# TEA Sepolia DeFi Platform

A decentralized finance (DeFi) platform built on TEA Sepolia Testnet featuring staking, farming, and bridge functionalities.

## 🌟 Features

- **Native Staking**: Stake TEA tokens and earn 14% APY
- **LEAF Staking**: Stake LEAF tokens and earn 6% APY in TEA rewards
- **Farming Pools**: Provide liquidity and earn rewards
- **Bridge**: Cross-chain asset transfers (Coming Soon)
- **Faucet**: Get testnet tokens easily
- **Real-time Dashboard**: Track your staking positions and rewards

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- MetaMask or compatible Web3 wallet
- TEA tokens (get from [faucet](https://faucet-sepolia.tea.xyz))

### Installation

```bash
# Clone the repository
git clone https://github.com/Amarudinn/tea-sepolia.git
cd tea-sepolia

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🔧 Configuration

Create a `.env` file based on `.env.example`:

```env
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com)

## 📋 Smart Contracts

All contracts are deployed on **TEA Sepolia Testnet** (Chain ID: 88882)

| Contract | Address | Purpose |
|----------|---------|---------|
| Native Staking | `0x124526079cA384E2A2E78Cc03bF4d475f6b93173` | Stake TEA tokens |
| LEAF Token | `0x0281e0e9Df9920E994051fC3798fd1565F6d28BF` | ERC20 token |
| LEAF Staking | `0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287` | Stake LEAF tokens |
| LEAF Faucet | `0x1359aF4Efc1A70199061FbD92f9ffC781f9aB95c` | Claim LEAF tokens |

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Web3**: Wagmi v2 + Viem + RainbowKit
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: TanStack Query

## 🌐 Network Information

**TEA Sepolia Testnet**

- Chain ID: `88882`
- RPC URL: `https://rpc-sepolia.tea.xyz`
- Explorer: `https://explorer-sepolia.tea.xyz`
- Faucet: `https://faucet-sepolia.tea.xyz`
- Currency Symbol: `TEA`

### Add Network to MetaMask

```javascript
{
  chainId: '0x15B32',
  chainName: 'TEA Sepolia',
  nativeCurrency: {
    name: 'TEA',
    symbol: 'TEA',
    decimals: 18
  },
  rpcUrls: ['https://rpc-sepolia.tea.xyz'],
  blockExplorerUrls: ['https://explorer-sepolia.tea.xyz']
}
```

## 📱 Features Overview

### Native Staking
- Stake TEA tokens directly
- Earn 14% APY
- No lock period
- Claim rewards anytime
- Partial unstaking supported

### LEAF Staking
- Stake LEAF tokens
- Earn TEA rewards (6% APY)
- Flexible unstaking
- Real-time reward tracking

### Farming (Coming Soon)
- Provide liquidity
- Earn trading fees
- Multiple pool options
- Compound rewards

### Bridge (Coming Soon)
- Cross-chain transfers
- Fast and secure
- Low fees

## 🎨 Project Structure

```
tea-sepolia-react/
├── public/
│   └── feature/
│       ├── bridge/
│       └── farm/
├── src/
│   ├── components/
│   │   ├── bridge/
│   │   ├── farm/
│   │   ├── staking/
│   │   ├── Layout.jsx
│   │   ├── StakingDashboard.jsx
│   │   └── ...
│   ├── config/
│   │   ├── chains.js
│   │   ├── contracts.js
│   │   └── wagmi.js
│   ├── utils/
│   │   └── formatters.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🔐 Security

- Always verify contract addresses before interacting
- Start with small amounts for testing
- Never share your private keys or seed phrase
- Use hardware wallets for large amounts
- Check transactions on the explorer before confirming

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [TEA Documentation](https://docs.tea.xyz)
- [TEA Explorer](https://explorer-sepolia.tea.xyz)
- [TEA Faucet](https://faucet-sepolia.tea.xyz)

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Join TEA community channels

---

**⚠️ Disclaimer**: This is a testnet application. Do not use real funds. Always verify contract addresses and test thoroughly.
