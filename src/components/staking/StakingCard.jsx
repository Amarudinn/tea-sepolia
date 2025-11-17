import { motion } from 'framer-motion'
import { Flame, Lock, TrendingUp } from 'lucide-react'
import TVLDisplay from '../TVLDisplay'

export default function StakingCard({ title, apy, tvl, tvlRaw, token, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8"
    >
      {/* Header - Badges and TVL */}
      <div className="flex justify-between items-start mb-8">
        {/* Badges on the left */}
        <div className="flex flex-wrap gap-2">
          <Badge icon={Lock} color="sky">
            NO LOCK
          </Badge>
          <Badge icon={TrendingUp} color="yellow">
            HIGH APY
          </Badge>
          <Badge icon={Flame} color="orange">
            🔥
          </Badge>
        </div>
        
        {/* TVL on the right */}
        <TVLDisplay value={tvlRaw} token={token} />
      </div>

      {/* Content */}
      {children}
    </motion.div>
  )
}

function Badge({ icon: Icon, color, children }) {
  const colors = {
    sky: 'text-sky-400 bg-sky-400/10',
    yellow: 'text-yellow-400 bg-yellow-400/10',
    orange: 'text-orange-400 bg-orange-400/10',
  }

  return (
    <div className={`px-4 py-2 rounded-full text-sm font-medium ${colors[color]}`}>
      {children}
    </div>
  )
}
