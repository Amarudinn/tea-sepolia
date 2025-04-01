const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const stakeButton = document.getElementById('stakeButton');
const unstakeButton = document.getElementById('unstakeButton');
const stakeSection = document.getElementById('stakeSection');
const unstakeSection = document.getElementById('unstakeSection');

let stakeClicked = false;
let unstakeClicked = false;

stakeButton.addEventListener('click', () => {
    if (stakeClicked) {
        stakeSection.classList.add('hidden');
    } else {
        stakeSection.classList.remove('hidden');
        unstakeSection.classList.add('hidden');
    }
    stakeClicked = !stakeClicked;
});

unstakeButton.addEventListener('click', () => {
    if (unstakeClicked) {
        unstakeSection.classList.add('hidden');
    } else {
        unstakeSection.classList.remove('hidden');
        stakeSection.classList.add('hidden');
    }
    unstakeClicked = !unstakeClicked;
});

const aitStakeButton = document.getElementById('aitStakeButton');
const aitUnstakeButton = document.getElementById('aitUnstakeButton');
const aitStakeSection = document.getElementById('aitStakeSection');
const aitUnstakeSection = document.getElementById('aitUnstakeSection');

let aitStakeClicked = false;
let aitUnstakeClicked = false;

aitStakeButton.addEventListener('click', () => {
    if (aitStakeClicked) {
        aitStakeSection.classList.add('hidden');
    } else {
        aitStakeSection.classList.remove('hidden');
        aitUnstakeSection.classList.add('hidden');
    }
    aitStakeClicked = !aitStakeClicked;
});

aitUnstakeButton.addEventListener('click', () => {
    if (aitUnstakeClicked) {
        aitUnstakeSection.classList.add('hidden');
    } else {
        aitUnstakeSection.classList.remove('hidden');
        aitStakeSection.classList.add('hidden');
    }
    aitUnstakeClicked = !aitUnstakeClicked;
});

const nativeStakingContract = '0x124526079cA384E2A2E78Cc03bF4d475f6b93173'; // Native Staking Contract
const aitContractAddress = '0x0281e0e9Df9920E994051fC3798fd1565F6d28BF'; // AIT Contract Address
const aitStakingContract = '0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287'; // AIT Staking Contract
const claimAitContract = '0x1359aF4Efc1A70199061FbD92f9ffC781f9aB95c'; // Claim AIT Token
const nativeContractABI = [
    {
        "inputs": [],
        "name": "claimReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newRewardRate",
                "type": "uint256"
            }
        ],
        "name": "setRewardRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RewardClaimed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "stake",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Staked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "unstake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Unstaked",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "unstakePartial",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "calculateReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getPendingReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getStakedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getTotalReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalStaking",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SCALE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "stakes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastClaimTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalReward",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pendingReward",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalStaking",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const aitContractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const aitStakingContractABI = [
    {
        "inputs": [],
        "name": "claimReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newRewardRate",
                "type": "uint256"
            }
        ],
        "name": "setRewardRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RewardClaimed",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "stake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Staked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "unstake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Unstaked",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "unstakePartial",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "calculateReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getPendingReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getStakedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getTotalReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalTokenStaked",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SCALE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "stakes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastClaimTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalReward",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pendingReward",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalTokenStaked",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const claimAitContractABI = [
    {
        "inputs": [],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FeeReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fee",
                "type": "uint256"
            }
        ],
        "name": "setClaimFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "setTokenAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTotalToken",
                "type": "uint256"
            }
        ],
        "name": "TotalTokenUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "claimFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "hasClaimed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lastClaimTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let web3;
let nativeContract;
let aitContract;
let aitStaking;
let claimContract;
let accounts;

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        try {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log('Connected to MetaMask');
            console.log('Current account:', account);

            document.getElementById("connectWallet").style.display = 'none';
            document.getElementById("aitConnectWallet").style.display = 'none';
            document.getElementById("stakeUnstake").style.display = 'block';
            document.getElementById("aitStakeUnstake").style.display = 'block';
            document.getElementById("tvlnative").style.display = 'block';
            document.getElementById("tvlait").style.display = 'block';

            updateConnectButton(account);
            initializeWeb3();
            updateAccountBalance();
            updateStakedAmount();
            updateRewardAmount();
            updateTotalStaking();
            updateTotalStakers();
            aitUpdateAccountBalance();
            aitUpdateStakedAmount();
            aitUpdateRewardAmount();
            updateTotalTokenStaking();
        } catch (error) {
            console.error('Failed to connect to MetaMask:', error);
        }
    } else {
        console.error('MetaMask is not installed!');
    }
}

function updateConnectButton(account) {
    const connectBtn = document.getElementById('connectButton');
    connectBtn.textContent = `${account.substring(0, 5)}...${account.substring(account.length - 5)}`;
}

async function initializeWeb3() {
    web3 = new Web3(window.ethereum);
    nativeContract = new web3.eth.Contract(nativeContractABI, nativeStakingContract);
    aitContract = new web3.eth.Contract(aitContractABI, aitContractAddress);
    aitStaking = new web3.eth.Contract(aitStakingContractABI, aitStakingContract);
    claimContract = new web3.eth.Contract(claimAitContractABI, claimAitContract);
}

async function updateAccountBalance() {
    const balanceElement = document.getElementById('balance');
    const ethBalance = await web3.eth.getBalance(accounts[0]);
    const formattedEthBalance = (ethBalance / 10 ** 18).toFixed(2);
    balanceElement.textContent = `${formattedEthBalance}`;
}

async function aitUpdateAccountBalance() {
    const aitBalanceElement = document.getElementById('aitbalance');
    const aitbalance = await aitContract.methods.balanceOf(accounts[0]).call();
    const aitFormattedBalance = (aitbalance / 10 ** 18).toFixed(0);
    aitBalanceElement.textContent = aitFormattedBalance;
}

function setMaxStakeAmount() {
    const balance = document.getElementById('balance').textContent;
    document.getElementById('stakeAmount').value = balance;
}

function setMaxUnstakeAmount() {
    const stakedAmount = document.getElementById('stakedAmount').textContent;
    document.getElementById('unstakeAmount').value = stakedAmount;
}

function aitSetMaxStakeAmount() {
    const aitBalance = document.getElementById('aitbalance').textContent;
    document.getElementById('aitStakeAmount').value = aitBalance;
}

function aitSetMaxUnstakeAmount() {
    const aitStakedAmount = document.getElementById('aitStakedAmount').textContent;
    document.getElementById('aitUnstakeAmount').value = aitStakedAmount;
}

async function stake() {
    const amount = document.getElementById('stakeAmount').value;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        await Swal.fire({
            title: 'Input Tidak Valid',
            text: 'Masukkan jumlah stake yang valid',
            icon: 'error',
            confirmButtonText: 'Tutup'
        });
        return;
    }

    try {
        const stakedAmount = web3.utils.toWei(amount, 'ether');

        const txPromise = nativeContract.methods.stake()
            .send({ from: accounts[0], value: stakedAmount });

        let alertProses;
        txPromise.on('transactionHash', (hash) => {
            alertProses = Swal.fire({
                title: 'Stake Diproses',
                didOpen: () => {
                    Swal.showLoading();
                },
                html: `
                    <div>
                        <p>Transaksi sedang diproses...</p>
                        <p>
                            <a href="https://sepolia.tea.xyz/tx/${hash}" target="_blank"
                               style="color:#2196F3;text-decoration:underline;word-break:break-all;">
                                Lihat di Tea Explorer
                            </a>
                        </p>
                    </div>
                `,
                showConfirmButton: false,
                allowOutsideClick: false
            });
        });

        const receipt = await txPromise;

        if (alertProses) {
            Swal.close();
        }

        await Swal.fire({
            title: 'Stake Berhasil!',
            html: `
                <div>
                    <p>Transaksi berhasil dikonfirmasi.</p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${receipt.transactionHash}" target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            Lihat di Tea Explorer
                        </a>
                    </p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Tutup'
        });

        updateAccountBalance();
        updateStakedAmount();
        updateRewardAmount();
        updateTotalStakers();
        updateTotalStaking();

    } catch (error) {
        await Swal.fire({
            title: 'Stake Berhasil!',
            html: `
                <div>
                    <p>Transaksi berhasil dikonfirmasi.</p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${receipt.transactionHash}" target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            Lihat di Tea Explorer
                        </a>
                    </p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Tutup'
        });
    }
}

async function approve(amount) {
    let approvalSwal;
    try {
        const approvedAmount = web3.utils.toWei(amount);
        
        // Show loading alert for approval
        approvalSwal = Swal.fire({
            title: 'Approving...',
            html: 'Please confirm the approval in your MetaMask',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                Swal.hideLoading();
            }
        });

        // Trigger MetaMask approval
        const approvalTx = await aitContract.methods.approve(aitStakingContract, approvedAmount)
            .send({ from: accounts[0] })
            .on('transactionHash', (hash) => {
                approvalSwal.update({
                    html: `Approval pending... <a href="https://etherscan.io/tx/${hash}" target="_blank">View on Etherscan</a>`
                });
            });

        await approvalSwal.close();

        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Approval successful!",
            showConfirmButton: false,
            timer: 1500
        });
        return true;
    } catch (error) {
        if (approvalSwal) {
            await approvalSwal.close();
        }
        
        let errorMsg = "Transaction rejected";
        if (error.code === 4001) {
            errorMsg = "You rejected the transaction in MetaMask";
        } else if (error.message.includes("reverted")) {
            errorMsg = "Transaction reverted - check contract requirements";
        }

        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Approval failed",
            text: errorMsg,
            showConfirmButton: true,
        });
        console.error('Approval error:', error);
        return false;
    }
}

async function aitStake() {
    const amount = document.getElementById('aitStakeAmount').value;
    
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        Swal.fire({
            position: "top-center",
            icon: "warning",
            title: "Invalid amount",
            text: "Please enter a valid staking amount",
            showConfirmButton: true,
        });
        return;
    }

    let stakeSwal;
    try {
        // Show initial loading alert
        stakeSwal = Swal.fire({
            title: 'Preparing Staking...',
            html: 'Checking approval status',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                Swal.hideLoading();
            }
        });

        // First get approval
        const isApproved = await approve(amount);
        if (!isApproved) return;

        const aitStakedAmount = web3.utils.toWei(amount);
        
        stakeSwal.update({
            title: 'Staking...',
            html: 'Please confirm the staking transaction in MetaMask'
        });

        const stakeTx = await aitStaking.methods.stake(aitStakedAmount)
            .send({ from: accounts[0] })
            .on('transactionHash', (hash) => {
                stakeSwal.update({
                    html: `Staking in progress... <a href="https://etherscan.io/tx/${hash}" target="_blank">View on Etherscan</a>`
                });
            })
            .on('receipt', (receipt) => {
                console.log('Staking receipt:', receipt);
            });

        await stakeSwal.close();

        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Staked successfully!",
            html: `Your ${amount} tokens have been staked`,
            showConfirmButton: false,
            timer: 2500
        });

        // Update UI
        await Promise.all([
            aitUpdateAccountBalance(),
            aitUpdateStakedAmount(),
            aitUpdateRewardAmount(),
            updateTotalTokenStaking()
        ]);

    } catch (error) {
        if (stakeSwal) {
            await stakeSwal.close();
        }
        
        let errorMsg = "Staking failed";
        if (error.code === 4001) {
            errorMsg = "You rejected the staking transaction";
        } else if (error.message.includes("revert")) {
            errorMsg = "Staking failed - contract reverted";
        } else if (error.message.includes("insufficient allowance")) {
            errorMsg = "Insufficient allowance - please approve more tokens";
        }

        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Staking Error",
            text: errorMsg,
            showConfirmButton: true,
        });
        console.error('Staking error:', error);
    }
}

async function unstakePartial() {
    const amount = document.getElementById('unstakeAmount').value;
    const unstakedAmount = web3.utils.toWei(amount);

    try {
        const unstakeTx = await nativeContract.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Unstake successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Partial unstake successful');
        updateAccountBalance();
        updateStakedAmount();
        updateRewardAmount();
        updateTotalStakers();
        updateTotalStaking();
    } catch (error) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to unstake",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to unstake:', error);
    }
}

async function aitUnstakePartial() {
    const amount = document.getElementById('aitUnstakeAmount').value;
    const aitUnstakeAmount = web3.utils.toWei(amount);

    try {
        const unstakeTx = await aitStaking.methods.unstakePartial(aitUnstakeAmount).send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Unstake successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Partial unstake successful');
        aitUpdateAccountBalance();
        aitUpdateStakedAmount();
        aitUpdateRewardAmount();
        updateTotalTokenStaking();
    } catch (error) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to unstake",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to unstake:', error);
    }
}

async function claimReward() {
    try {
        const claimTx = await nativeContract.methods.claimReward().send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Reward claimed",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Reward claimed');
        updateAccountBalance();
        updateRewardAmount();
    } catch (error) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to claim reward",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to claim reward:', error);
    }
}

async function aitClaimReward() {
    try {
        const claimTx = await aitStaking.methods.claimReward().send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Reward claimed",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Reward claimed');
        aitUpdateAccountBalance();
        aitUpdateRewardAmount();
    } catch (error) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to claim reward",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to claim reward:', error);
    }
}

async function updateStakedAmount() {
    const stakedAmountElement = document.getElementById('stakedAmount');
    const stakedAmount = await nativeContract.methods.getStakedAmount(accounts[0]).call();
    const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(2);
    stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateRewardAmount() {
    const rewardAmountElement = document.getElementById('rewardAmount');
    const rewardAmount = await nativeContract.methods.getPendingReward(accounts[0]).call();
    const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
    rewardAmountElement.textContent = formattedRewardAmount;
}

setInterval(updateRewardAmount, 1000);

async function updateTotalStaking() {
    const totalStaking = await nativeContract.methods.getTotalStaking().call();
    const totalStakingInEth = web3.utils.fromWei(totalStaking, 'ether').toString();
    const totalStakingRounded = parseFloat(totalStakingInEth).toFixed(0);
    document.getElementById('totalStaking').textContent = totalStakingRounded;
}

async function updateTotalStakers() {
    const totalStakers = await nativeContract.methods.getTotalStakers().call();
    document.getElementById('totalStakers').textContent = totalStakers;
}

async function aitUpdateStakedAmount() {
    const aitStakedAmountElement = document.getElementById('aitStakedAmount');
    const aitStakedAmount = await aitStaking.methods.getStakedAmount(accounts[0]).call();
    const aitFormattedStakedAmount = (aitStakedAmount / 10 ** 18).toFixed(0);
    aitStakedAmountElement.textContent = aitFormattedStakedAmount;
}

async function aitUpdateRewardAmount() {
    const aitRewardAmountElement = document.getElementById('aitRewardAmount');
    const aitRewardAmount = await aitStaking.methods.getPendingReward(accounts[0]).call();
    const aitFormattedRewardAmount = (aitRewardAmount / 10 ** 18).toFixed(4);
    aitRewardAmountElement.textContent = aitFormattedRewardAmount;
}

setInterval(aitUpdateRewardAmount, 1000);

async function updateTotalTokenStaking() {
    const totalTokenStaking = await aitStaking.methods.getTotalTokenStaked().call();
    const totalStakingInAit = web3.utils.fromWei(totalTokenStaking, 'ether').toString();
    const totalStakingRoundedAit = parseFloat(totalStakingInAit).toFixed(0);
    document.getElementById('totalTokenStaking').textContent = totalStakingRoundedAit;
}

async function claimTokens() {
    let transactionHash = null;

    try {
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        const contract = new web3.eth.Contract(claimAitContractABI, claimAitContract);

        const [hasClaimed, lastClaimTime] = await Promise.all([
            contract.methods.hasClaimed(userAddress).call(),
            contract.methods.lastClaimTime(userAddress).call()
        ]);

        if (hasClaimed) {
            const lastClaimDate = new Date(lastClaimTime * 1000);
            const now = new Date();
            const hoursSinceLastClaim = (now - lastClaimDate) / (1000 * 60 * 60);

            if (hoursSinceLastClaim < 24) {
                showWarning(
                    `Claim Harian Terbatas`,
                    `Anda sudah melakukan claim hari ini. Silakan coba lagi setelah ${Math.ceil(24 - hoursSinceLastClaim)} jam`
                );
                return;
            }
        }

        const { isConfirmed } = await Swal.fire({
            title: "Konfirmasi Claim",
            html: `Anda akan mengirim <b class="eth-value">1 ETH</b> untuk mendapatkan <b>100 token</b>`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Ya, Claim Sekarang",
            cancelButtonText: "Batal",
            reverseButtons: true
        });

        if (!isConfirmed) return;

        showLoading("Memproses transaksi...");

        const valueInWei = web3.utils.toWei('1', 'ether');

        const gasEstimate = await contract.methods.claimTokens()
            .estimateGas({ from: userAddress, value: valueInWei })
            .catch(err => {
                console.error("Gas estimate error:", err);
                throw new Error("Gagal mengestimasi gas. Coba lagi nanti.");
            });

        const receipt = await contract.methods.claimTokens()
            .send({
                from: userAddress,
                value: valueInWei,
                gas: Math.floor(gasEstimate * 1.2) // Buffer 20%
            })
            .on('transactionHash', (hash) => {
                transactionHash = hash;
                console.log("Transaction Hash:", hash);
            })
            .on('error', (error) => {
                console.error("Transaction error:", error);
                if (!error.message.includes('Transaction was not mined')) {
                    throw error;
                }
            });

        if (receipt.status) {
            showSuccessWithTxLink(
                "Claim Berhasil!",
                "Token telah berhasil dikirim ke alamat Anda",
                `<a href="https://sepolia.tea.xyz/tx/${transactionHash}" target="_blank" class="tx-link">Tea Explorer</a>`
            );

            document.getElementById('claimButton').disabled = true;
            await checkClaimStatus();
        } else {
            showError("Transaksi gagal diproses di blockchain");
        }

    } catch (error) {
        console.error("Error detail:", error);

        if (transactionHash) {
            showWarning(
                "Transaksi Diproses",
                `Transaksi Anda sedang diproses blockchain. <a href="https://sepolia.tea.xyz/tx/${transactionHash}" target="_blank" class="tx-link">Tea Explorer</a>`
            );
        } else {
            handleClaimError(error);
        }
    }
}

async function checkClaimStatus() {
    try {
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        const contract = new web3.eth.Contract(claimAitContractABI, claimAitContract);

        const [hasClaimed, lastClaimTime] = await Promise.all([
            contract.methods.hasClaimed(userAddress).call(),
            contract.methods.lastClaimTime(userAddress).call()
        ]);

        if (hasClaimed) {
            const lastClaimDate = new Date(lastClaimTime * 1000);
            const now = new Date();
            const hoursSinceLastClaim = (now - lastClaimDate) / (1000 * 60 * 60);

            if (hoursSinceLastClaim < 24) {
                document.getElementById('claimButton').disabled = true;
            } else {
                document.getElementById('claimButton').disabled = false;
            }
        }
    } catch (error) {
        console.error("Error checking claim status:", error);
    }
}

function showLoading(message) {
    Swal.fire({
        title: message,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });
}

function showSuccessWithTxLink(title, message, txHash) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: title,
        html: `${message}<br><br>
               <small>Transaction Hash:</small><br>
               <a href="https://sepolia.tea.xyz/tx/${txHash}" target="_blank" class="tx-link">
                   ${txHash}
               </a>`,
        showConfirmButton: true,
        confirmButtonText: "Tutup"
    });
}

function showWarning(title, message) {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: title,
        html: message,
        showConfirmButton: true,
        confirmButtonText: "Mengerti"
    });
}

function showError(message) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: message,
        showConfirmButton: true,
        confirmButtonText: "Mengerti"
    });
}

function handleClaimError(error) {
    let errorMessage = 'Gagal melakukan claim';

    if (error.code === 4001) {
        errorMessage = "Anda membatalkan transaksi";
    } else if (error.message.includes('User denied transaction')) {
        errorMessage = "Transaksi ditolak oleh pengguna";
    } else if (error.message.includes('insufficient funds')) {
        errorMessage = "Saldo ETH tidak mencukupi";
    } else if (error.message.includes('revert')) {
        if (error.message.includes('Claim not available yet')) {
            errorMessage = "Anda sudah melakukan claim hari ini";
        } else if (error.message.includes('Incorrect fee amount')) {
            errorMessage = "Jumlah ETH yang dikirim tidak tepat";
        } else if (error.message.includes('Not enough tokens')) {
            errorMessage = "Token habis, tidak bisa diklaim saat ini";
        }
    } else if (error.message.includes('gas')) {
        errorMessage = "Penyesuaian gas diperlukan. Coba lagi";
    } else if (error.message.includes('Transaction was not mined')) {
        errorMessage = "Transaksi sedang diproses. Silakan cek wallet Anda";
    }

    showError(errorMessage);
}

document.getElementById('claimButton').addEventListener('click', async () => {
    try {
        if (!web3 || !web3.eth) {
            await initWeb3();
        }

        await claimTokens();
    } catch (error) {
        console.error("Global error handler:", error);
        showError("Terjadi kesalahan sistem. Silakan refresh halaman");
    }
});

window.addEventListener('load', async () => {
    if (window.ethereum) {
        init();
    }
});