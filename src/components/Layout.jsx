import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Leaf, Twitter, Send, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navbar */}
      <nav className="relative backdrop-blur-lg bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Tea Leaf
              </span>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hidden md:flex items-center space-x-1"
            >
              <NavButton onClick={() => onNavigate('stake')} active={currentPage === 'stake'}>
                Stake
              </NavButton>
              <NavButton onClick={() => onNavigate('farm')} active={currentPage === 'farm'}>
                Farm
              </NavButton>
              <NavButton onClick={() => onNavigate('bridge')} active={currentPage === 'bridge'}>
                Bridge
              </NavButton>
            </motion.div>

            {/* Connect Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ConnectButton
                chainStatus="icon"
                showBalance={false}
              />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-white/10 backdrop-blur-lg bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-slate-400 text-sm">
                © 2025 Tea Leaf. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <SocialLink href="https://x.com/m_amarudinn2" icon={Twitter} />
              <SocialLink href="https://t.me/AirdropIntelligent" icon={Send} />
              <SocialLink href="#" icon={Github} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavButton({ onClick, children, active }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-green-400/10 text-green-400'
          : 'text-slate-300 hover:bg-white/5 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-green-400 transition-all duration-200 hover:scale-110"
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}
