import { motion, AnimatePresence } from 'framer-motion'
import { X, Rocket } from 'lucide-react'

export default function ComingSoonModal({ isOpen, onClose, feature }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card p-8 max-w-md w-full relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>

          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
            <Rocket className="w-10 h-10 text-slate-900" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-4">
            Coming Soon! 🚀
          </h2>

          {/* Feature Name */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 font-semibold">
              {feature}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-center mb-8">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="btn-primary w-full"
          >
            Got it!
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
