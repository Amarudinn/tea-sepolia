import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Award, Clock, Loader2 } from 'lucide-react'

export default function CheckInModal({ onClose }) {
  const { address, isConnected } = useAccount()
  const [checkInData, setCheckInData] = useState({
    points: 0,
    streak: 0,
    lastCheckIn: null,
    canCheckIn: true,
  })
  const [isChecking, setIsChecking] = useState(false)

  useEffect(() => {
    if (address) {
      loadCheckInData()
    }
  }, [address])

  const loadCheckInData = () => {
    // Load from localStorage
    const data = localStorage.getItem(`checkin_${address}`)
    if (data) {
      setCheckInData(JSON.parse(data))
    }
  }

  const handleCheckIn = async () => {
    if (!isConnected || !checkInData.canCheckIn) return

    setIsChecking(true)
    
    // Simulate check-in
    setTimeout(() => {
      const newData = {
        points: checkInData.points + 10,
        streak: checkInData.streak + 1,
        lastCheckIn: new Date().toISOString(),
        canCheckIn: false,
      }
      
      setCheckInData(newData)
      localStorage.setItem(`checkin_${address}`, JSON.stringify(newData))
      setIsChecking(false)
    }, 1500)
  }

  const getNextCheckInTime = () => {
    if (!checkInData.lastCheckIn) return 'Available now'
    
    const lastCheckIn = new Date(checkInData.lastCheckIn)
    const nextCheckIn = new Date(lastCheckIn.getTime() + 24 * 60 * 60 * 1000)
    const now = new Date()
    
    if (now >= nextCheckIn) return 'Available now'
    
    const diff = nextCheckIn - now
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${hours}h ${minutes}m`
  }

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
            <X className="w-5 h-5 text-red-400" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-slate-900" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Daily Check-in</h2>
            <p className="text-slate-400">Earn rewards by checking in daily</p>
          </div>

          {/* Stats */}
          <div className="space-y-4 mb-8">
            <StatRow icon={Award} label="Points" value={checkInData.points} />
            <StatRow icon={Calendar} label="Streak" value={`${checkInData.streak} days`} />
            <StatRow
              icon={Clock}
              label="Last Check-in"
              value={checkInData.lastCheckIn ? new Date(checkInData.lastCheckIn).toLocaleDateString() : 'Never'}
            />
            <StatRow
              icon={Clock}
              label="Next Check-in"
              value={getNextCheckInTime()}
            />
          </div>

          {/* Check-in Button */}
          {isConnected ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckIn}
              disabled={!checkInData.canCheckIn || isChecking}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isChecking ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              ) : checkInData.canCheckIn ? (
                'Check In'
              ) : (
                'Already Checked In'
              )}
            </motion.button>
          ) : (
            <div className="text-center text-slate-400">
              Please connect your wallet
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function StatRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-green-400" />
        <span className="text-slate-300">{label}</span>
      </div>
      <span className="font-semibold text-slate-100">{value}</span>
    </div>
  )
}
