import { motion } from 'framer-motion'

export default function StatCard({ icon: Icon, label, value, token, highlight }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="stat-card"
    >
      <div className="flex items-center text-slate-400 mb-2">
        <span className="text-sm">{label}</span>
        <Icon className="w-4 h-4 ml-2" />
      </div>
      <div className={`text-xl font-semibold ${highlight ? 'text-green-400' : 'text-slate-100'}`}>
        {value} {token && <span className="text-green-400">{token}</span>}
      </div>
    </motion.div>
  )
}
