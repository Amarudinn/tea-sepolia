import { useState, useEffect } from 'react'
import { useAccount, useBalance, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Lock, Gift, Loader2 } from 'lucide-react'
import { CONTRACTS, NATIVE_STAKING_ABI } from '../../config/contracts'
import { formatBalance, formatReward, formatTVL } from '../../utils/formatters'
import StakingCard from './StakingCard'
import StatCard from './StatCard'

export default function NativeStaking() {
  const { address, isConnected, chain } = useAccount()
  const [stakeAmount, setStakeAmount] = useState('')
  const [unstakeAmount, setUnstakeAmount] = useState('')
  const [showStake, setShowStake] = useState(false)
  const [showUnstake, setShowUnstake] = useState(false)

  // Debug logging
  useEffect(() => {
    console.log('🔍 Debug Info:', {
      address,
      isConnected,
      chainId: chain?.id,
      chainName: chain?.name,
    })
  }, [address, isConnected, chain])

  // Read wallet balance (native TEA)
  const { data: balance, isError: balanceError, isLoading: balanceLoading } = useBalance({
    address: address,
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Debug balance
  useEffect(() => {
    console.log('💰 Balance:', {
      balance: balance?.value?.toString(),
      formatted: balance ? formatEther(balance.value) : 'N/A',
      error: balanceError,
      loading: balanceLoading,
    })
  }, [balance, balanceError, balanceLoading])

  // Read staked amount
  const { data: stakedAmount } = useReadContract({
    address: CONTRACTS.NATIVE_STAKING,
    abi: NATIVE_STAKING_ABI,
    functionName: 'getStakedAmount',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  const { data: pendingReward } = useReadContract({
    address: CONTRACTS.NATIVE_STAKING,
    abi: NATIVE_STAKING_ABI,
    functionName: 'getPendingReward',
    args: [address],
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  const { data: totalStaking, isError: tvlError, isLoading: tvlLoading } = useReadContract({
    address: CONTRACTS.NATIVE_STAKING,
    abi: NATIVE_STAKING_ABI,
    functionName: 'getTotalStaking',
    query: { refetchInterval: 10000 },
  })

  // Debug TVL
  useEffect(() => {
    if (totalStaking) {
      const ethValue = formatEther(totalStaking)
      console.log('📊 Native TVL Debug:', {
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

  // Write functions
  const { writeContract: stake, data: stakeHash } = useWriteContract()
  const { writeContract: unstake, data: unstakeHash } = useWriteContract()
  const { writeContract: claim, data: claimHash } = useWriteContract()

  const { isLoading: isStaking } = useWaitForTransactionReceipt({ hash: stakeHash })
  const { isLoading: isUnstaking } = useWaitForTransactionReceipt({ hash: unstakeHash })
  const { isLoading: isClaiming } = useWaitForTransactionReceipt({ hash: claimHash })

  const handleStake = () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) return
    stake({
      address: CONTRACTS.NATIVE_STAKING,
      abi: NATIVE_STAKING_ABI,
      functionName: 'stake',
      value: parseEther(stakeAmount),
    })
  }

  const handleUnstake = () => {
    if (!unstakeAmount || parseFloat(unstakeAmount) <= 0) return
    unstake({
      address: CONTRACTS.NATIVE_STAKING,
      abi: NATIVE_STAKING_ABI,
      functionName: 'unstakePartial',
      args: [parseEther(unstakeAmount)],
    })
  }

  const handleClaim = () => {
    claim({
      address: CONTRACTS.NATIVE_STAKING,
      abi: NATIVE_STAKING_ABI,
      functionName: 'claimReward',
    })
  }

  const setMaxStake = () => {
    if (balance) {
      // Leave some for gas
      const maxAmount = balance.value > parseEther('0.01') 
        ? balance.value - parseEther('0.01') 
        : 0n
      setStakeAmount(formatEther(maxAmount))
    }
  }

  const setMaxUnstake = () => {
    if (stakedAmount) {
      setUnstakeAmount(formatEther(stakedAmount))
    }
  }

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
        title="Native Staking"
        apy="14%"
        tvlRaw={totalStaking}
        token="TEA"
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            icon={Wallet}
            label="Balance"
            value={balance ? formatBalance(balance.value) : '0.00'}
            token="TEA"
          />
          <StatCard
            icon={TrendingUp}
            label="APY"
            value="14%"
            highlight
          />
          <StatCard
            icon={Lock}
            label="Staked"
            value={stakedAmount ? formatBalance(stakedAmount) : '0.00'}
            token="TEA"
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
            <h4 className="text-lg font-semibold mb-4">Stake TEA</h4>
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
              disabled={isStaking}
              className="btn-primary w-full"
            >
              {isStaking ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Stake'}
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
            <h4 className="text-lg font-semibold mb-4">Unstake TEA</h4>
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
