# Smart Contracts Documentation

## 📋 Contract Addresses

All contracts deployed on **TEA Sepolia Testnet** (Chain ID: 88882)

| Contract | Address | Purpose |
|----------|---------|---------|
| Native Staking | `0x124526079cA384E2A2E78Cc03bF4d475f6b93173` | Stake TEA tokens |
| LEAF Token | `0x0281e0e9Df9920E994051fC3798fd1565F6d28BF` | ERC20 token |
| LEAF Staking | `0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287` | Stake LEAF tokens |
| LEAF Faucet | `0x1359aF4Efc1A70199061FbD92f9ffC781f9aB95c` | Claim LEAF tokens |

## 🔍 Contract Details

### 1. Native Staking Contract

**Address:** `0x124526079cA384E2A2E78Cc03bF4d475f6b93173`

**Features:**
- Stake native TEA tokens
- Earn rewards (14% APY)
- No lock period
- Partial unstaking
- Real-time reward calculation

**Main Functions:**

```solidity
// Stake TEA tokens
function stake() external payable

// Unstake all tokens
function unstake() external

// Unstake specific amount
function unstakePartial(uint256 amount) external

// Claim rewards
function claimReward() external

// View functions
function getStakedAmount(address user) external view returns (uint256)
function getPendingReward(address user) external view returns (uint256)
function getTotalStaking() external view returns (uint256)
```

**Usage Example:**

```javascript
// Stake 1 TEA
await writeContract({
  address: '0x124526079cA384E2A2E78Cc03bF4d475f6b93173',
  abi: NATIVE_STAKING_ABI,
  functionName: 'stake',
  value: parseEther('1')
})

// Check staked amount
const staked = await readContract({
  address: '0x124526079cA384E2A2E78Cc03bF4d475f6b93173',
  abi: NATIVE_STAKING_ABI,
  functionName: 'getStakedAmount',
  args: [userAddress]
})
```

---

### 2. LEAF Token Contract

**Address:** `0x0281e0e9Df9920E994051fC3798fd1565F6d28BF`

**Type:** ERC20 Token

**Features:**
- Standard ERC20 implementation
- Mintable
- Burnable
- 18 decimals

**Main Functions:**

```solidity
// Standard ERC20
function balanceOf(address account) external view returns (uint256)
function transfer(address to, uint256 amount) external returns (bool)
function approve(address spender, uint256 amount) external returns (bool)
function transferFrom(address from, address to, uint256 amount) external returns (bool)
function allowance(address owner, address spender) external view returns (uint256)

// Additional
function mint(address to, uint256 amount) external returns (bool)
function burn(uint256 amount) external returns (bool)
```

**Usage Example:**

```javascript
// Check balance
const balance = await readContract({
  address: '0x0281e0e9Df9920E994051fC3798fd1565F6d28BF',
  abi: LEAF_TOKEN_ABI,
  functionName: 'balanceOf',
  args: [userAddress]
})

// Approve staking contract
await writeContract({
  address: '0x0281e0e9Df9920E994051fC3798fd1565F6d28BF',
  abi: LEAF_TOKEN_ABI,
  functionName: 'approve',
  args: ['0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287', parseEther('1000')]
})
```

---

### 3. LEAF Staking Contract

**Address:** `0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287`

**Features:**
- Stake LEAF tokens
- Earn TEA rewards (6% APY)
- No lock period
- Partial unstaking
- Automatic reward calculation

**Main Functions:**

```solidity
// Stake LEAF tokens
function stake(uint256 amount) external

// Unstake all tokens
function unstake() external

// Unstake specific amount
function unstakePartial(uint256 amount) external

// Claim rewards
function claimReward() external

// View functions
function getStakedAmount(address user) external view returns (uint256)
function getPendingReward(address user) external view returns (uint256)
function getTotalTokenStaked() external view returns (uint256)
```

**Usage Example:**

```javascript
// First approve
await writeContract({
  address: '0x0281e0e9Df9920E994051fC3798fd1565F6d28BF',
  abi: LEAF_TOKEN_ABI,
  functionName: 'approve',
  args: ['0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287', parseEther('100')]
})

// Then stake
await writeContract({
  address: '0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287',
  abi: LEAF_STAKING_ABI,
  functionName: 'stake',
  args: [parseEther('100')]
})
```

---

### 4. LEAF Faucet Contract

**Address:** `0x1359aF4Efc1A70199061FbD92f9ffC781f9aB95c`

**Features:**
- Claim LEAF tokens
- Small fee required (0.001 TEA)
- Cooldown period
- Limited amount per claim

**Main Functions:**

```solidity
// Claim tokens (requires fee)
function claimTokens() external payable

// View functions
function claimFee() external view returns (uint256)
function getTokenBalance() external view returns (uint256)
```

**Usage Example:**

```javascript
// Claim LEAF tokens
await writeContract({
  address: '0x1359aF4Efc1A70199061FbD92f9ffC781f9aB95c',
  abi: LEAF_FAUCET_ABI,
  functionName: 'claimTokens',
  value: parseEther('0.001') // Fee
})
```

---

## 🔐 Security Considerations

### For Users

1. **Always verify contract addresses**
   - Check on TEA Explorer
   - Compare with official documentation

2. **Approve carefully**
   - Only approve what you need
   - Revoke unused approvals

3. **Test with small amounts first**
   - Start with minimal amounts
   - Verify everything works

4. **Keep private keys safe**
   - Never share seed phrase
   - Use hardware wallet for large amounts

### For Developers

1. **Use read-only functions when possible**
   ```javascript
   // Good - read only
   const balance = await readContract({...})
   
   // Careful - writes to blockchain
   await writeContract({...})
   ```

2. **Handle errors properly**
   ```javascript
   try {
     await writeContract({...})
   } catch (error) {
     console.error('Transaction failed:', error)
     // Show user-friendly message
   }
   ```

3. **Wait for confirmations**
   ```javascript
   const { data: hash } = useWriteContract()
   const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })
   ```

4. **Validate inputs**
   ```javascript
   if (!amount || parseFloat(amount) <= 0) {
     alert('Invalid amount')
     return
   }
   ```

---

## 📊 APY Calculation

### Native Staking (14% APY)

```
Reward Rate = 14% per year
            = 14 / 365 / 24 / 60 / 60 % per second
            = 0.00000044 % per second

Reward = Staked Amount × Reward Rate × Time
```

### LEAF Staking (6% APY)

```
Reward Rate = 6% per year
            = 6 / 365 / 24 / 60 / 60 % per second
            = 0.00000019 % per second

Reward = Staked Amount × Reward Rate × Time
```

---

## 🧪 Testing Contracts

### Using TEA Explorer

1. Go to https://explorer-sepolia.tea.xyz
2. Search contract address
3. View transactions
4. Read contract state

### Using Wagmi Hooks

```javascript
// Read contract
const { data, isError, isLoading } = useReadContract({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'getStakedAmount',
  args: [userAddress]
})

// Write contract
const { writeContract, data: hash } = useWriteContract()

writeContract({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'stake',
  value: parseEther('1')
})
```

---

## 🔄 Contract Interaction Flow

### Native Staking Flow

```
1. User clicks "Stake"
2. Enter amount
3. Call stake() with value
4. Wait for confirmation
5. Balance updates automatically
6. Rewards accumulate
7. User can claim or unstake anytime
```

### LEAF Staking Flow

```
1. User clicks "Stake"
2. Enter amount
3. Check allowance
4. If needed: approve() first
5. Then: stake(amount)
6. Wait for confirmation
7. Balance updates automatically
8. Rewards accumulate in TEA
9. User can claim or unstake anytime
```

---

## 📝 Events

### Native Staking Events

```solidity
event Staked(address indexed user, uint256 amount)
event Unstaked(address indexed user, uint256 amount)
event RewardClaimed(address indexed user, uint256 amount)
```

### LEAF Staking Events

```solidity
event Staked(address indexed user, uint256 amount)
event Unstaked(address indexed user, uint256 amount)
event RewardClaimed(address indexed user, uint256 amount)
```

### Listening to Events

```javascript
// Using Wagmi
const { data: logs } = useWatchContractEvent({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  eventName: 'Staked',
  onLogs(logs) {
    console.log('New stake:', logs)
  }
})
```

---

## 🌐 Network Information

**TEA Sepolia Testnet**

- Chain ID: 88882
- RPC URL: https://rpc-sepolia.tea.xyz
- Explorer: https://explorer-sepolia.tea.xyz
- Faucet: https://faucet-sepolia.tea.xyz
- Currency: TEA

**Add to MetaMask:**

```javascript
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x15B32', // 88882 in hex
    chainName: 'TEA Sepolia',
    nativeCurrency: {
      name: 'TEA',
      symbol: 'TEA',
      decimals: 18
    },
    rpcUrls: ['https://rpc-sepolia.tea.xyz'],
    blockExplorerUrls: ['https://explorer-sepolia.tea.xyz']
  }]
})
```

---

## 🔗 Useful Links

- TEA Docs: https://docs.tea.xyz
- Contract Source: Check explorer
- Audit Reports: (if available)
- GitHub: (if available)

---

**Note:** Always verify contract addresses and test with small amounts first!
