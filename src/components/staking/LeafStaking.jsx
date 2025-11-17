import { useState, useEffect } from 'react'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Lock, Gift, Loader2 } from 'lucide-react'
import { CONTRACTS, LEAF_TOKEN_ABI, LEAF_STAKING_ABI } from '../../config/contracts'
import { formatBalance, formatReward, formatTVL } from '../../utils/formatters'
import StakingCard from './StakingCard'
import StatCard from './StatCard'

export default function LeafStaking() {
  const { address, isConnected } = useAccount()
  const [stakeAmount, setStakeAmount] = useState('')
  const [unstakeAmount, setUnstakeAmount] = useState('')
  const [showStake, setShowStake] = useState(false)
  const [showUnstake, setShowUnstake] = useState(false)

  // Read LEAF balance
  const { data: leafBalance } = useReadContract({
    address: CONTRACTS.LEAF_TOKEN,
    abi: LEAF_TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Read staked amount
  const { data: stakedAmount } = useReadContract({
    address: CONTRACTS.LEAF_STAKING,
    abi: LEAF_STAKING_ABI,
    functionName: 'getStakedAmount',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Read pending rewards
  const { data: pendingReward } = useReadContract({
    address: CONTRACTS.LEAF_STAKING,
    abi: LEAF_STAKING_ABI,
    functionName: 'getPendingReward',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Read total staked
  const { data: totalStaking, isError: tvlError, isLoading: tvlLoading } = useReadContract({
    address: CONTRACTS.LEAF_STAKING,
    abi: LEAF_STAKING_ABI,
    functionName: 'getTotalTokenStaked',
    query: { refetchInterval: 10000 },
  })

  // Debug TVL
  useEffect(() => {
    if (totalStaking) {
      const ethValue = formatEther(totalStaking)
      console.log('📊 LEAF TVL Debug:', {
        raw: totalStaking.toString(),
        wei: totalStaking.toString(),
        ether: ethValue,
        number: parseFloat(ethValue),
        formatted: formatTVL(totalStaking),
        error: tvlError,
        loading: tvlLoading,
      })
    }
  }, [totalStaking, tvlError, tvlLoading])

  // Check allowance
  const { data: allowance } = useReadContract({
    address: CONTRACTS.LEAF_TOKEN,
    abi: LEAF_TOKEN_ABI,
    functionName: 'allowance',
    args: [address, CONTRACTS.LEAF_STAKING],
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
      address: CONTRACTS.LEAF_TOKEN,
      abi: LEAF_TOKEN_ABI,
      functionName: 'approve',
      args: [CONTRACTS.LEAF_STAKING, parseEther('1000000')],
    })
  }

  const handleStake = () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) return
    
    const amount = parseEther(stakeAmount)
    if (allowance && allowance < amount) {
      handleApprove()
      return
    }

    stake({
      address: CONTRACTS.LEAF_STAKING,
      abi: LEAF_STAKING_ABI,
      functionName: 'stake',
      args: [amount],
    })
  }

  const handleUnstake = () => {
    if (!unstakeAmount || parseFloat(unstakeAmount) <= 0) return
    unstake({
      address: CONTRACTS.LEAF_STAKING,
      abi: LEAF_STAKING_ABI,
      functionName: 'unstakePartial',
      args: [parseEther(unstakeAmount)],
    })
  }

  const handleClaim = () => {
    claim({
      address: CONTRACTS.LEAF_STAKING,
      abi: LEAF_STAKING_ABI,
      functionName: 'claimReward',
    })
  }

  const setMaxStake = () => {
    if (leafBalance) {
      setStakeAmount(formatEther(leafBalance))
    }
  }

  const setMaxUnstake = () => {
    if (stakedAmount) {
      setUnstakeAmount(formatEther(stakedAmount))
    }
  }

  const needsApproval = stakeAmount && allowance && parseEther(stakeAmount) > allowance

  if (!isConnected) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center"
      >
        <Wallet className="w-16 h-16 mx-auto mb-4 text-green-400" />
        <h3 className="text-2xl font-bold mb-2">Connect Your Wallet</h3>
        <p className="text-slate-400">
          Please connect your wallet to start staking
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <StakingCard
        title="LEAF Staking"
        apy="6%"
        tvlRaw={totalStaking}
        token="LEAF"
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            icon={Wallet}
            label="Balance"
            value={leafBalance ? formatBalance(leafBalance) : '0.00'}
            token="LEAF"
          />
          <StatCard
            icon={TrendingUp}
            label="APY"
            value="6%"
            highlight
          />
          <StatCard
            icon={Lock}
            label="Staked"
            value={stakedAmount ? formatBalance(stakedAmount) : '0.00'}
            token="LEAF"
          />
          <StatCard
            icon={Gift}
            label="Rewards"
            value={pendingReward ? formatReward(pendingReward) : '0.000000'}
            token="TEA"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setShowStake(!showStake)
              setShowUnstake(false)
            }}
            className="btn-primary"
          >
            Stake
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setShowUnstake(!showUnstake)
              setShowStake(false)
            }}
            className="btn-primary"
          >
            Unstake
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClaim}
            disabled={isClaiming}
            className="btn-primary"
          >
            {isClaiming ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Claim'}
          </motion.button>
        </div>

        {/* Stake Section */}
        {showStake && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card p-6 border-l-4 border-green-400"
          >
            <h4 className="text-lg font-semibold mb-4">Stake LEAF</h4>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Enter amount"
                className="input-field"
              />
              <button onClick={setMaxStake} className="btn-secondary px-6">
                Max
              </button>
            </div>
            <button
              onClick={handleStake}
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
                'Stake'
              )}
            </button>
          </motion.div>
        )}

        {/* Unstake Section */}
        {showUnstake && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card p-6 border-l-4 border-green-400"
          >
            <h4 className="text-lg font-semibold mb-4">Unstake LEAF</h4>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
                placeholder="Enter amount"
                className="input-field"
              />
              <button onClick={setMaxUnstake} className="btn-secondary px-6">
                Max
              </button>
            </div>
            <button
              onClick={handleUnstake}
              disabled={isUnstaking}
              className="btn-primary w-full"
            >
              {isUnstaking ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Unstake'}
            </button>
          </motion.div>
        )}
      </StakingCard>
    </div>
  )
}
