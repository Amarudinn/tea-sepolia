import { useState } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { config } from './config/wagmi'
import Layout from './components/Layout'
import StakingDashboard from './components/StakingDashboard'
import FarmDashboard from './components/farm/FarmDashboard'
import BridgeDashboard from './components/bridge/BridgeDashboard'
import DebugPanel from './components/DebugPanel'

const queryClient = new QueryClient()

function App() {
  const [currentPage, setCurrentPage] = useState('stake')

  const renderPage = () => {
    switch (currentPage) {
      case 'stake':
        return <StakingDashboard />
      case 'farm':
        return <FarmDashboard />
      case 'bridge':
        return <BridgeDashboard />
      default:
        return <StakingDashboard />
    }
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#22c55e',
            accentColorForeground: 'white',
            borderRadius: 'large',
          })}
        >
          <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
            {renderPage()}
          </Layout>
          <DebugPanel />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
