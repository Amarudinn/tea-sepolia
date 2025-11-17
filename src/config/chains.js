// TEA Sepolia Network Configuration
export const teaSepolia = {
  id: 10218, // Correct Chain ID for TEA Sepolia testnet
  name: 'TEA Sepolia',
  network: 'tea-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'TEA',
    symbol: 'TEA',
  },
  rpcUrls: {
    default: {
      http: ['https://tea-sepolia.g.alchemy.com/public'],
      webSocket: ['wss://rpc-sepolia.tea.xyz'],
    },
    public: {
      http: ['https://tea-sepolia.g.alchemy.com/public'],
      webSocket: ['wss://rpc-sepolia.tea.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'TEA Explorer',
      url: 'https://sepolia.tea.xyz',
    },
  },
  testnet: true,
}
