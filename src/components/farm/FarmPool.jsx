import { useState } from 'react'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Loader2, Flame } from 'lucide-react'
import { LP_TOKEN_ABI, FARM_ABI } from '../../config/contracts'
import { formatBalance, formatReward } from '../../utils/formatters'

export default function FarmPool({ pool, defaultExpanded = false }) {
  const { address, isConnected } = useAccount()
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [showFarmInput, setShowFarmInput] = useState(false)
  const [showRemoveInput, setShowRemoveInput] = useState(false)
  const [farmAmount, setFarmAmount] = useState('')
  const [removeAmount, setRemoveAmount] = useState('')

  // Read LP balance
  const { data: lpBalance } = useReadContract({
    address: pool.lpToken,
    abi: LP_TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Read staked amount
  const { data: stakedAmount } = useReadContract({
    address: pool.farmContract,
    abi: FARM_ABI,
    functionName: 'getStakedAmount',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Read pending rewards
  const { data: pendingReward } = useReadContract({
    address: pool.farmContract,
    abi: FARM_ABI,
    functionName: 'getPendingReward',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Read APR
  const { data: apr } = useReadContract({
    address: pool.farmContract,
    abi: FARM_ABI,
    functionName: 'getCurrentAPR',
    query: { refetchInterval: 10000 },
  })

  // Check allowance
  const { data: allowance } = useReadContract({
    address: pool.lpToken,
    abi: LP_TOKEN_ABI,
    functionName: 'allowance',
    args: [address, pool.farmContract],
    query: { enabled: !!address },
  })

  // Write functions
  const { writeContract: approve, data: approveHash } = useWriteContract()
  const { writeContract: stake, data: stakeHash } = useWriteContract()
  const { writeContract: unstake, data: unstakeHash } = useWriteContract()
  const { writeContract: claim, data: claimHash } = useWriteContract()

  const { isLoading: isApproving } = useWaitForTransactionReceipt({ hash: approveHash })
  const { isLoading: isStaking } = useWaitForTransactionReceipt({ hash: stakeHash })
  const { isLoading: isUnstaking } = useWaitForTransactionReceipt({ hash: unstakeHash })
  const { isLoading: isClaiming } = useWaitForTransactionReceipt({ hash: claimHash })

  const handleApprove = () => {
    approve({
      address: pool.lpToken,
      abi: LP_TOKEN_ABI,
      functionName: 'approve',
      args: [pool.farmContract, parseEther('1000000')],
    })
  }

  const handleFarm = () => {
    if (!farmAmount || parseFloat(farmAmount) <= 0) return
    
    const amount = parseEther(farmAmount)
    if (allowance && allowance < amount) {
      handleApprove()
      return
    }

    stake({
      address: pool.farmContract,
      abi: FARM_ABI,
      functionName: 'stake',
      args: [amount],
    })
  }

  const handleRemove = () => {
    if (!removeAmount || parseFloat(removeAmount) <= 0) return
    unstake({
      address: pool.farmContract,
      abi: FARM_ABI,
      functionName: 'unstakePartial',
      args: [parseEther(removeAmount)],
    })
  }

  const handleClaim = () => {
    claim({
      address: pool.farmContract,
      abi: FARM_ABI,
      functionName: 'claimReward',
    })
  }

  const setMaxFarm = () => {
    if (lpBalance) {
      setFarmAmount(formatEther(lpBalance))
    }
  }

  const setMaxRemove = () => {
    if (stakedAmount) {
      setRemoveAmount(formatEther(stakedAmount))
    }
  }

  const needsApproval = farmAmount && allowance && parseEther(farmAmount) > allowance

  return (
    <div className="glass-card border-l-4 border-green-400">
      {/* Pool Header - Clickable */}
      <div
        className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => isConnected && setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          {/* Left: Pool Info */}
          <div className="flex items-center gap-3">
            {/* Overlapping Token Icons */}
            <div className="relative flex items-center">
              {/* Token 0 - Front */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center border-2 border-green-400 relative z-10 overflow-hidden">
                {pool.token0Icon ? (
                  <img src={pool.token0Icon} alt={pool.token0} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl">{pool.token0}</span>
                )}
              </div>
              {/* Token 1 - Back */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center border-2 border-green-400 -ml-3 overflow-hidden">
                {pool.token1Icon ? (
                  <img src={pool.token1Icon} alt={pool.token1} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl">{pool.token1}</span>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">{pool.name}</h3>
              <div className="flex gap-2 mt-1">
                <span className="px-2 py-0.5 bg-sky-400/10 text-sky-400 text-xs rounded">
                  {pool.badge}
                </span>
                <span className="text-xs">🔥</span>
              </div>
            </div>
          </div>

          {/* Right: APR & Arrow */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="flex items-center gap-1 text-green-400 justify-end">
                <Flame className="w-4 h-4" />
                <span className="text-sm">APR</span>
              </div>
              <span className="text-lg font-semibold text-green-400">
                {apr ? `${apr.toString()}%` : '0%'}
              </span>
            </div>
            {isConnected && (
              isExpanded ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && isConnected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {/* Stats - Simple Text */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Balance:</span>
                  <span className="text-slate-200">
                    {lpBalance ? formatBalance(lpBalance) : '0'} LP
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Farmed:</span>
                  <span className="text-slate-200">
                    {stakedAmount ? formatBalance(stakedAmount) : '0'} LP
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Rewards:</span>
                  <span className="text-green-400">
                    {pendingReward ? formatReward(pendingReward) : '0'} TEA
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setShowFarmInput(!showFarmInput)
                    setShowRemoveInput(false)
                  }}
                  className="btn-primary"
                >
                  Farm
                </button>
                <button
                  onClick={() => {
                    setShowRemoveInput(!showRemoveInput)
                    setShowFarmInput(false)
                  }}
                  disabled={!stakedAmount || stakedAmount === 0n}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Remove
                </button>
                <button
                  onClick={handleClaim}
                  disabled={isClaiming}
                  className="btn-primary"
                >
                  {isClaiming ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Claim'}
                </button>
              </div>

              {/* Farm Input Section */}
              <AnimatePresence mode="wait">
                {showFarmInput && (
                  <motion.div
                    key="farm"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={farmAmount}
                        onChange={(e) => setFarmAmount(e.target.value)}
                        placeholder="Amount to farm"
                        className="input-field"
                      />
                      <button onClick={setMaxFarm} className="btn-secondary px-4">
                        Max
                      </button>
                    </div>
                    <button
                      onClick={handleFarm}
                      disabled={isStaking || isApproving}
                      className="btn-primary w-full"
                    >
                      {isApproving ? (
                        <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                      ) : isStaking ? (
                        <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                      ) : needsApproval ? (
                        'Approve'
                      ) : (
                        'Confirm Farm'
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Remove Input Section */}
              <AnimatePresence mode="wait">
                {showRemoveInput && (
                  <motion.div
                    key="remove"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={removeAmount}
                        onChange={(e) => setRemoveAmount(e.target.value)}
                        placeholder="Amount to remove"
                        className="input-field"
                      />
                      <button onClick={setMaxRemove} className="btn-secondary px-4">
                        Max
                      </button>
                    </div>
                    <button
                      onClick={handleRemove}
                      disabled={isUnstaking}
                      className="btn-primary w-full"
                    >
                      {isUnstaking ? (
                        <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                      ) : (
                        'Confirm Remove'
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Not Connected State */}
      {!isConnected && (
        <div className="p-4 border-t border-white/10 text-center text-slate-400 text-sm">
          Connect wallet to farm
        </div>
      )}
    </div>
  )
}
