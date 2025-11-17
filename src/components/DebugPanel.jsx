import { useAccount, useBalance, useBlockNumber } from 'wagmi'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bug, X } from 'lucide-react'

export default function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { address, isConnected, chain } = useAccount()
  const { data: balance } = useBalance({ address })
  const { data: blockNumber } = useBlockNumber({ watch: true })

  if (process.env.NODE_ENV === 'production') return null

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-all"
        title="Debug Panel"
      >
        <Bug className="w-6 h-6 text-white" />
      </button>

      {/* Debug Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-4 right-4 z-40 w-80 max-h-[80vh] overflow-auto bg-slate-800 border border-slate-700 rounded-lg shadow-2xl p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Bug className="w-5 h-5" />
                Debug Info
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              {/* Connection Status */}
              <DebugItem
                label="Connected"
                value={isConnected ? '✅ Yes' : '❌ No'}
                color={isConnected ? 'text-green-400' : 'text-red-400'}
              />

              {/* Chain Info */}
              <DebugItem
                label="Chain ID"
                value={chain?.id || 'N/A'}
                color="text-blue-400"
              />
              <DebugItem
                label="Chain Name"
                value={chain?.name || 'N/A'}
                color="text-blue-400"
              />

              {/* Address */}
              <DebugItem
                label="Address"
                value={address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'N/A'}
                color="text-yellow-400"
              />

              {/* Balance */}
              <DebugItem
                label="Balance"
                value={balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : 'N/A'}
                color="text-green-400"
              />

              {/* Block Number */}
              <DebugItem
                label="Block"
                value={blockNumber?.toString() || 'N/A'}
                color="text-purple-400"
              />

              {/* RPC URL */}
              <DebugItem
                label="RPC"
                value={chain?.rpcUrls?.default?.http?.[0] || 'N/A'}
                color="text-cyan-400"
                small
              />

              {/* Expected Chain */}
              <div className="pt-3 border-t border-slate-700">
                <p className="text-slate-400 text-xs mb-2">Expected:</p>
                <DebugItem label="Chain ID" value="10218" color="text-slate-300" />
                <DebugItem label="RPC" value="https://rpc-sepolia.tea.xyz" color="text-slate-300" small />
              </div>

              {/* Warnings */}
              {isConnected && chain?.id !== 10218 && (
                <div className="mt-3 p-2 bg-red-500/10 border border-red-500/20 rounded">
                  <p className="text-red-400 text-xs">
                    ⚠️ Wrong network! Please switch to TEA Sepolia (10218)
                  </p>
                </div>
              )}

              {!isConnected && (
                <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                  <p className="text-yellow-400 text-xs">
                    ⚠️ Wallet not connected
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function DebugItem({ label, value, color, small }) {
  return (
    <div className="flex justify-between items-start gap-2">
      <span className="text-slate-400">{label}:</span>
      <span className={`${color} font-mono ${small ? 'text-xs' : ''} break-all text-right`}>
        {value}
      </span>
    </div>
  )
}
