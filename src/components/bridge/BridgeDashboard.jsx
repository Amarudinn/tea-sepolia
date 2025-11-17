import { useState, useEffect } from 'react'
import { useAccount, useBalance, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { motion } from 'framer-motion'
import { ArrowDown, Loader2 } from 'lucide-react'
import { CONTRACTS, BRIDGE_ABI } from '../../config/contracts'

const FEE_PERCENTAGE = 3
const NETWORK_COST = 0.02

export default function BridgeDashboard() {
  const { address, isConnected } = useAccount()
  const [amount, setAmount] = useState('')
  const [receiveAmount, setReceiveAmount] = useState('0')

  // Get TEA balance
  const { data: balance } = useBalance({
    address: address,
    query: { enabled: !!address, refetchInterval: 5000 },
  })

  // Bridge transaction
  const { writeContract: bridge, data: bridgeHash } = useWriteContract()
  const { isLoading: isBridging } = useWaitForTransactionReceipt({ hash: bridgeHash })

  // Calculate receive amount
  useEffect(() => {
    if (amount && !isNaN(parseFloat(amount))) {
      const inputAmount = parseFloat(amount)
      const afterFee = inputAmount * (1 - FEE_PERCENTAGE / 100)
      const final = afterFee - NETWORK_COST
      setReceiveAmount(final > 0 ? final.toFixed(6) : '0')
    } else {
      setReceiveAmount('0')
    }
  }, [amount])

  const handleBridge = () => {
    if (!amount || parseFloat(amount) <= 0) return
    
    bridge({
      address: CONTRACTS.BRIDGE,
      abi: BRIDGE_ABI,
      functionName: 'deposit',
      value: parseEther(amount),
    })
  }

  const setPercentage = (percent) => {
    if (!balance) return
    
    const balanceNum = parseFloat(formatEther(balance.value))
    const amountToSet = percent === 100 ? balanceNum : (balanceNum * percent / 100)
    setAmount(amountToSet.toFixed(6))
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          Bridge
        </h1>
        <p className="text-slate-400 text-lg">
          Bridge TEA to Sepolia Network
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-8 border-l-4 border-green-400"
      >
        {/* Bridge Info Banner */}
        <div className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/20 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                <span className="text-2xl">🌉</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Cross-Chain Bridge</h3>
                <p className="text-sm text-slate-400">Fast & Secure Transfer</p>
              </div>
            </div>
            {isConnected && balance && (
              <div className="text-right">
                <p className="text-xs text-slate-400">Available Balance</p>
                <p className="text-lg font-semibold text-green-400">
                  {parseFloat(formatEther(balance.value)).toFixed(4)} TEA
                </p>
              </div>
            )}
          </div>
        </div>

        {/* From Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-300">From</span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
          </div>

          <div className="glass-card p-5 border border-green-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl">
                  🍵
                </div>
                <div>
                  <p className="font-semibold text-slate-200">TEA</p>
                  <p className="text-xs text-slate-400">TEA Sepolia Network</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="input-field text-lg"
              />
              <div className="flex gap-1">
                <button onClick={() => setPercentage(25)} className="hidden sm:block px-3 py-2 text-xs bg-green-400/10 text-green-400 rounded-lg hover:bg-green-400/20 border border-green-400/20">
                  25%
                </button>
                <button onClick={() => setPercentage(50)} className="hidden sm:block px-3 py-2 text-xs bg-green-400/10 text-green-400 rounded-lg hover:bg-green-400/20 border border-green-400/20">
                  50%
                </button>
                <button onClick={() => setPercentage(100)} className="px-3 py-2 text-xs bg-green-400 text-slate-900 rounded-lg hover:bg-green-500 font-semibold">
                  MAX
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg relative z-10">
            <ArrowDown className="w-6 h-6 text-slate-900" />
          </div>
        </div>

        {/* To Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-300">To</span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
          </div>

          <div className="glass-card p-5 border border-emerald-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-xl">
                  🍵
                </div>
                <div>
                  <p className="font-semibold text-slate-200">tsTEA</p>
                  <p className="text-xs text-slate-400">Ethereum Sepolia Network</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">You receive</p>
                <p className="text-lg font-semibold text-emerald-400">{receiveAmount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="glass-card p-5 space-y-3 bg-slate-800/30 mt-4">
          <h4 className="font-semibold text-slate-200 mb-3">Transaction Details</h4>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Bridge Fee ({FEE_PERCENTAGE}%)</span>
            <span className="text-slate-200 font-medium">
              {amount ? (parseFloat(amount) * FEE_PERCENTAGE / 100).toFixed(6) : '0'} TEA
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Network Cost</span>
            <span className="text-slate-200 font-medium">{NETWORK_COST} TEA</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Estimated Time</span>
            <span className="text-slate-200 font-medium">~5 minutes</span>
          </div>
          <div className="border-t border-white/10 pt-3 flex justify-between">
            <span className="text-green-400 font-semibold">Total Received</span>
            <span className="text-green-400 font-semibold text-lg">{receiveAmount} tsTEA</span>
          </div>
        </div>

        {/* Bridge Button */}
        {isConnected ? (
          <button
            onClick={handleBridge}
            disabled={!amount || parseFloat(amount) <= 0 || isBridging}
            className="btn-primary w-full mt-6"
          >
            {isBridging ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              'Bridge TEA → tsTEA'
            )}
          </button>
        ) : (
          <div className="text-center text-slate-400 py-3 mt-6">
            Connect wallet to bridge
          </div>
        )}
      </motion.div>
    </div>
  )
}
