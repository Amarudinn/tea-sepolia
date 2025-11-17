import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { teaSepolia } from './chains'

export const config = getDefaultConfig({
  appName: 'Tea Leaf Staking',
  projectId: 'YOUR_PROJECT_ID', // Get from WalletConnect Cloud
  chains: [teaSepolia],
  ssr: false,
})
