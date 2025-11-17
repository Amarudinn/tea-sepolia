import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp } from 'lucide-react'
import NativeStaking from './staking/NativeStaking'
import LeafStaking from './staking/LeafStaking'
import CheckInModal from './CheckInModal'
import FaucetButtons from './FaucetButtons'

export default function StakingDashboard() {
  const [activeTab, setActiveTab] = useState('native')
  const [showCheckIn, setShowCheckIn] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          Leaf Stake
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Enjoy the rewards of staking with high APY
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCheckIn(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Daily Check-in
          </motion.button>
          <FaucetButtons />
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <div className="glass-card p-1 inline-flex rounded-xl">
          <TabButton
            active={activeTab === 'native'}
            onClick={() => setActiveTab('native')}
          >
            Native Staking
          </TabButton>
          <TabButton
            active={activeTab === 'leaf'}
            onClick={() => setActiveTab('leaf')}
          >
            LEAF Staking
          </TabButton>
        </div>
      </motion.div>

      {/* Staking Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'native' ? <NativeStaking /> : <LeafStaking />}
      </motion.div>

      {/* Check-in Modal */}
      {showCheckIn && <CheckInModal onClose={() => setShowCheckIn(false)} />}
    </div>
  )
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
        active
          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 shadow-lg'
          : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {children}
    </button>
  )
}
