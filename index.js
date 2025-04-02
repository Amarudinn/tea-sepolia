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
const aitContractAddress = '0x0281e0e9Df9920E994051fC3798fd1565F6d28BF'; // LEAF Contract Address
const aitStakingContract = '0x665EE57E60a73B4bd470E7A3bf21f7Bba3c52287'; // LEAF Staking Contract
const claimAitContract = '0x1359aF4Efc1A70199061FbD92f9ffC781f9aB95c'; // Claim LEAF Token
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
            const chainId = await ethereum.request({ method: 'eth_chainId' });
            const TEA_SEPOLIA_CHAIN_ID = '0x27ea'; // 10218 hexadecimal
            
            if (chainId !== TEA_SEPOLIA_CHAIN_ID) {
                try {
                    await ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: TEA_SEPOLIA_CHAIN_ID }],
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                    chainId: TEA_SEPOLIA_CHAIN_ID,
                                    chainName: 'TEA-Sepolia',
                                    nativeCurrency: {
                                        name: 'TEA',
                                        symbol: 'TEA',
                                        decimals: 18
                                    },
                                    rpcUrls: ['https://tea-sepolia.g.alchemy.com/public'],
                                    blockExplorerUrls: []
                                }],
                            });
                        } catch (addError) {
                            console.error('Failed to add TEA-Sepolia network:', addError);
                            return;
                        }
                    } else {
                        console.error('Failed to switch to TEA-Sepolia network:', switchError);
                        return;
                    }
                }
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
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
            title: 'Invalid Input',
            text: 'Enter a valid stake amount',
            icon: 'error',
            confirmButtonText: 'Close'
        });
        return;
    }

    const { isConfirmed } = await Swal.fire({
        title: 'Confirm Stake',
        html: `You are about to stake <b>${amount} TEA</b>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    });


    if (!isConfirmed) return;

    try {
        const stakedAmount = web3.utils.toWei(amount, 'ether');

        const loadingAlert = Swal.fire({
            title: 'Processing Stake...',
            html: 'Please confirm stake transaction in MetaMask',
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false
        });

        const txPromise = nativeContract.methods.stake()
            .send({ from: accounts[0], value: stakedAmount });

        txPromise.on('transactionHash', (hash) => {
            loadingAlert.then(() => {
                Swal.fire({
                    title: 'Transaction Processed',
                    html: `
                        <div>
                            <p>Stake being processed on the blockchain...</p>
                            <p>
                                <a href="https://sepolia.tea.xyz/tx/${hash}" target="_blank"
                                   style="color:#2196F3;text-decoration:underline;">
                                    View in Explorer
                                </a>
                            </p>
                        </div>
                    `,
                    icon: 'info',
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
            });
        });

        const receipt = await txPromise;
        
        await Swal.fire({
            title: 'Stake Successful!',
            html: `
                <div>
                    <p>Staked  ${amount} TEA successfully!</p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${receipt.transactionHash}" target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            View Stake Transaction
                        </a>
                    </p>
                </div>
            `,
            icon: 'success'
        });

        updateAccountBalance();
		updateStakedAmount();
		updateRewardAmount();
		updateTotalStaking();

    } catch (error) {
        await Swal.fire({
            title: 'Transaction Failed',
            text: error.message.includes('User denied')
                ? 'You cancel the transaction'
                : 'An error occurred during the staking process',
            icon: 'error'
        });
    }
}

async function approve(amount, tokenContract, spenderAddress) {
    try {
        const approvedAmount = web3.utils.toWei(amount.toString());
        
        const approveAlert = Swal.fire({
            title: 'Authorization Needed',
            html: 'Please approve the token spending in MetaMask',
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false,
            showConfirmButton: false
        });
        
        const approvalTx = await tokenContract.methods
            .approve(spenderAddress, approvedAmount)
            .send({ from: accounts[0] });
        
        await approveAlert.close();
        
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Token approved",
            showConfirmButton: false,
            timer: 1500
        });
        
        return approvalTx;
    } catch (error) {
        await Swal.close();
        
        let errorMsg = "Approval failed";
        if (error.message.includes('User denied')) {
            errorMsg = "You rejected the approval in MetaMask";
        }
        
        await Swal.fire({
            position: "center",
            icon: "error",
            title: errorMsg,
            showConfirmButton: true,
        });
        
        console.error('Approval error:', error);
        throw error;
    }
}

async function aitStake() {
    const amount = document.getElementById('aitStakeAmount').value;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        await Swal.fire({
            title: 'Invalid Input',
            text: 'Please enter a valid stake amount',
            icon: 'error',
            confirmButtonText: 'Close'
        });
        return;
    }

    const { isConfirmed } = await Swal.fire({
        title: 'Confirm Stake',
        html: `You are about to stake <b>${amount} LEAF</b>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    });

    if (!isConfirmed) return;

    let approvalDone = false;
    let approvalTxHash = null;

    try {
        const approveAlert = Swal.fire({
            title: 'Approving Tokens...',
            html: 'Please approve token spending in MetaMask',
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false
        });

        const aitStakedAmount = web3.utils.toWei(amount);
        approvalTxHash = await aitContract.methods
            .approve(aitStaking.options.address, aitStakedAmount)
            .send({ from: accounts[0] })
            .then(tx => {
                approvalDone = true;
                return tx.transactionHash;
            });

        await approveAlert.close();
        await Swal.fire({
            title: 'Approval Successful',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });

        const stakeAlert = Swal.fire({
            title: 'Processing Stake...',
            html: 'Please confirm stake transaction in MetaMask',
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false
        });

        const stakeTx = await aitStaking.methods
            .stake(aitStakedAmount)
            .send({ from: accounts[0] });

        await stakeAlert.close();

        await Swal.fire({
            title: 'Stake Successful!',
            html: `
                <div>
                    <p>Staked ${amount} LEAF successfully</p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${stakeTx.transactionHash}" 
                           target="_blank" style="color:#2196F3;">
                            View Stake Transaction
                        </a>
                    </p>
                </div>
            `,
            icon: 'success'
        });

        updateBalances();

    } catch (error) {
        Swal.close();

        let errorMessage = 'Transaction failed';
        let txLinks = '';

        if (approvalDone) {
            errorMessage = 'Stake failed after approval';
            if (error.receipt?.transactionHash) {
                txLinks += `
                    <p>Approval TX: 
                        <a href="https://sepolia.tea.xyz/tx/${approvalTxHash}" 
                           target="_blank" style="color:#2196F3;">
                            View
                        </a>
                    </p>
                    <p>Failed Stake TX: 
                        <a href="https://sepolia.tea.xyz/tx/${error.receipt.transactionHash}" 
                           target="_blank" style="color:#2196F3;">
                            View
                        </a>
                    </p>
                `;
            }
        } else {
            errorMessage = error.message.includes('User denied') 
                ? 'Approval rejected in MetaMask' 
                : 'Approval failed';
            
            if (approvalTxHash) {
                txLinks += `
                    <p>Failed Approval TX: 
                        <a href="https://sepolia.tea.xyz/tx/${approvalTxHash}" 
                           target="_blank" style="color:#2196F3;">
                            View
                        </a>
                    </p>
                `;
            }
        }

        await Swal.fire({
            title: errorMessage,
            html: `
                <div>
                    <p>${error.message || 'Unknown error occurred'}</p>
                    ${txLinks}
                </div>
            `,
            icon: 'error'
        });

        console.error('Error details:', error);
    }
}

async function updateBalances() {
    await Promise.all([
        aitUpdateAccountBalance(),
        aitUpdateStakedAmount(),
        aitUpdateRewardAmount(),
        updateTotalTokenStaking()
    ]);
}

async function unstakePartial() {
    const amount = document.getElementById('unstakeAmount').value;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        await Swal.fire({
            title: 'Invalid Input',
            text: 'Please enter a valid stake amount',
            icon: 'error',
            confirmButtonText: 'Close'
        });
        return;
    }

    try {
        const stakedBalanceWei = await nativeContract.methods.getStakedAmount(accounts[0]).call();
        const stakedBalance = web3.utils.fromWei(stakedBalanceWei);
        
        if (Number(amount) > Number(stakedBalance)) {
            await Swal.fire({
                title: 'Insufficient Balance',
                html: `
                    <div>
                        <p>The unstake amount exceeds your available balance</p>
                        <p>Balance available: <b>${stakedBalance} TEA</b></p>
                    </div>
                `,
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }

        const { isConfirmed } = await Swal.fire({
            title: 'Confirm Unstake',
            html: `
                <div>
                    <p>You will unstake: <b>${amount} TEA</b></p>
                    <p>From the total balance: <b>${stakedBalance} TEA</b></p>
                </div>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cencel',
        });

        if (!isConfirmed) return;

        const loadingAlert = Swal.fire({
            title: 'Processing Unstake...',
            html: 'Please confirm the transaction in MetaMask',
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false,
            showConfirmButton: false
        });

        const unstakedAmount = web3.utils.toWei(amount);
        const unstakeTx = await nativeContract.methods
            .unstakePartial(unstakedAmount)
            .send({ from: accounts[0] });

        await loadingAlert.close();

        await Swal.fire({
            title: 'Unstake Successful!',
            html: `
                <div>
                    <p>You have successfully unstake <b>${amount} TEA</b></p>
                    <p>Remaining balance: <b>${(stakedBalance - amount).toFixed(2)} TEA</b></p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${unstakeTx.transactionHash}" 
                           target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            View Unstake Transactions
                        </a>
                    </p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Close'
        });

        await updateUnstakeData();

    } catch (error) {
        await Swal.close();
        
        let errorMessage = 'Failed to unstake';
        let txLink = '';
        
        if (error.receipt?.transactionHash) {
            txLink = `
                <p>
                    <a href="https://sepolia.tea.xyz/tx/${error.receipt.transactionHash}"
                       target="_blank"
                       style="color:#2196F3;text-decoration:underline;">
                        View Failed Transactions
                    </a>
                </p>
            `;
        }
        
        if (error.message.includes('User denied')) {
            errorMessage = 'You canceled the transaction in MetaMask';
        } else if (error.message.includes('exceeds staked amount')) {
            errorMessage = 'Unstake amount exceeds balance';
        }

        await Swal.fire({
            title: errorMessage,
            html: `
                <div>
                    <p>${error.message || 'There is an error'}</p>
                    ${txLink}
                </div>
            `,
            icon: 'error',
            confirmButtonText: 'Close'
        });

        console.error('Error unstake:', {
            error,
            inputAmount: amount,
            account: accounts[0],
            timestamp: new Date().toISOString()
        });
    }
}

async function updateUnstakeData() {
    await Promise.all([
        updateAccountBalance(),
        updateStakedAmount(),
        updateRewardAmount(),
        updateTotalStaking()
    ]);
}

async function aitUnstakePartial() {

    const amount = document.getElementById('aitUnstakeAmount').value;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        await Swal.fire({
            title: 'Invalid Input',
            text: 'Please enter a valid stake amount',
            icon: 'error',
            confirmButtonText: 'Close'
        });
        return;
    }

    try {
        const stakedBalanceWei = await aitStaking.methods.getStakedAmount(accounts[0]).call();
        const stakedBalance = web3.utils.fromWei(stakedBalanceWei);
        
        if (Number(amount) > Number(stakedBalance)) {
            await Swal.fire({
                title: 'Insufficient Balance',
                html: `
                    <div>
                        <p>The unstake amount exceeds your available balance</p>
                        <p>Balance available: <b>${stakedBalance} LEAF</b></p>
                    </div>
                `,
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }

        const { isConfirmed } = await Swal.fire({
            title: 'Confirm Unstake',
            html: `
                <div>
                    <p>You will unstake: <b>${amount} LEAF</b></p>
                    <p>From the total balance: <b>${stakedBalance} LEAF</b></p>
                </div>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cencel',
        });

        if (!isConfirmed) return;

        const loadingAlert = Swal.fire({
            title: 'Processing Unstake...',
            html: 'Please confirm the transaction in MetaMask',
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false,
            showConfirmButton: false
        });

        const unstakedAmount = web3.utils.toWei(amount);
        const unstakeTx = await aitStaking.methods
            .unstakePartial(unstakedAmount)
            .send({ from: accounts[0] });

        await loadingAlert.close();

        await Swal.fire({
            title: 'Unstake Successful!',
            html: `
                <div>
                    <p>You have successfully unstake <b>${amount} LEAF</b></p>
                    <p>Remaining balance: <b>${(stakedBalance - amount).toFixed(0)} LEAF</b></p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${unstakeTx.transactionHash}" 
                           target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            View Unstake Transactions
                        </a>
                    </p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Close'
        });

        await updateAitUnstakeData();

    } catch (error) {
        await Swal.close();
        
        let errorMessage = 'Failed to unstake';
        let txLink = '';
        
        if (error.receipt?.transactionHash) {
            txLink = `
                <p>
                    <a href="https://sepolia.tea.xyz/tx/${error.receipt.transactionHash}"
                       target="_blank"
                       style="color:#2196F3;text-decoration:underline;">
                        View Failed Transactions
                    </a>
                </p>
            `;
        }
        
        if (error.message.includes('User denied')) {
            errorMessage = 'You canceled the transaction in MetaMask';
        } else if (error.message.includes('exceeds staked amount')) {
            errorMessage = 'Unstake amount exceeds balance';
        }

        await Swal.fire({
            title: errorMessage,
            html: `
                <div>
                    <p>${error.message || 'There is an error'}</p>
                    ${txLink}
                </div>
            `,
            icon: 'error',
            confirmButtonText: 'Close'
        });

        console.error('Error unstake:', {
            error,
            inputAmount: amount,
            account: accounts[0],
            timestamp: new Date().toISOString()
        });
    }
}

async function updateAitUnstakeData() {
    await Promise.all([
        aitUpdateAccountBalance(),
        aitUpdateStakedAmount(),
        aitUpdateRewardAmount(),
        updateTotalTokenStaking()
    ]);
}

async function claimReward() {
    try {
        const pendingRewardWei = await nativeContract.methods.getPendingReward(accounts[0]).call();
        const pendingReward = web3.utils.fromWei(pendingRewardWei);

        if (Number(pendingReward) <= 0) {
            await Swal.fire({
                title: 'No Rewards',
                text: 'You do not have any rewards to claim at this time.',
                icon: 'info',
                confirmButtonText: 'Close'
            });
            return;
        }

        const { isConfirmed } = await Swal.fire({
            title: 'Confirm Claim Reward',
            html: `You will claim a reward of <b>${Number(pendingReward).toFixed(4)} TEA</b>?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Close'
        });

        if (!isConfirmed) return;

        const loadingAlert = Swal.fire({
            title: 'Processing Claim Reward...',
            html: 'Please confirm the transaction in MetaMask',
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false,
            showConfirmButton: false
        });

        const claimTx = await nativeContract.methods
            .claimReward()
            .send({ from: accounts[0] });

        await loadingAlert.close();
        
        await Swal.fire({
            title: 'Claim Reward Successful!',
            html: `
                <div>
                    <p>You have successfully claimed <b>${Number(pendingReward).toFixed(4)} TEA</b></p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${claimTx.transactionHash}" 
                           target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            View Transactions
                        </a>
                    </p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Close'
        });

        await Promise.all([
            updateAccountBalance(),
            updateRewardAmount()
        ]);

    } catch (error) {
        await Swal.close();
        
        let errorMessage = 'Failed to claim reward';
        let txLink = '';
        
        if (error.receipt?.transactionHash) {
            txLink = `
                <p>
                    <a href="https://sepolia.tea.xyz/tx/${error.receipt.transactionHash}"
                       target="_blank"
                       style="color:#2196F3;text-decoration:underline;">
                        View Failed Transactions
                    </a>
                </p>
            `;
        }
        
        if (error.message.includes('User denied')) {
            errorMessage = 'You canceled the transaction in MetaMask';
        } else if (error.message.includes('No reward to claim')) {
            errorMessage = 'There are no rewards to claim';
        }

        await Swal.fire({
            title: errorMessage,
            html: `
                <div>
                    <p>${error.message || 'There is an error'}</p>
                    ${txLink}
                </div>
            `,
            icon: 'error',
            confirmButtonText: 'Close'
        });

        console.error('Error claim reward:', {
            error,
            account: accounts[0],
            timestamp: new Date().toISOString()
        });
    }
}

async function aitClaimReward() {
    try {
        const pendingRewardWei = await aitStaking.methods.getPendingReward(accounts[0]).call();
        const pendingReward = web3.utils.fromWei(pendingRewardWei);

        if (Number(pendingReward) <= 0) {
            await Swal.fire({
                title: 'No Rewards',
                text: 'You do not have any rewards to claim at this time.',
                icon: 'info',
                confirmButtonText: 'Close'
            });
            return;
        }

        const { isConfirmed } = await Swal.fire({
            title: 'Confirm Claim Reward',
            html: `You will claim a reward of <b>${Number(pendingReward).toFixed(4)} TEA</b>?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Close'
        });

        if (!isConfirmed) return;

        const loadingAlert = Swal.fire({
            title: 'Processing Claim Reward...',
            html: 'Please confirm the transaction in MetaMask',
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false,
            showConfirmButton: false
        });

        const claimTx = await nativeContract.methods
            .claimReward()
            .send({ from: accounts[0] });

        await loadingAlert.close();
        
        await Swal.fire({
            title: 'Claim Reward Successful!',
            html: `
                <div>
                    <p>You have successfully claimed <b>${Number(pendingReward).toFixed(4)} TEA</b></p>
                    <p>
                        <a href="https://sepolia.tea.xyz/tx/${claimTx.transactionHash}" 
                           target="_blank"
                           style="color:#2196F3;text-decoration:underline;">
                            View Transactions
                        </a>
                    </p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Close'
        });

        await Promise.all([
            updateAccountBalance(),
            updateRewardAmount()
        ]);

    } catch (error) {
        await Swal.close();
        
        let errorMessage = 'Failed to claim reward';
        let txLink = '';
        
        if (error.receipt?.transactionHash) {
            txLink = `
                <p>
                    <a href="https://sepolia.tea.xyz/tx/${error.receipt.transactionHash}"
                       target="_blank"
                       style="color:#2196F3;text-decoration:underline;">
                        View Failed Transactions
                    </a>
                </p>
            `;
        }
        
        if (error.message.includes('User denied')) {
            errorMessage = 'You canceled the transaction in MetaMask';
        } else if (error.message.includes('No reward to claim')) {
            errorMessage = 'There are no rewards to claim';
        }

        await Swal.fire({
            title: errorMessage,
            html: `
                <div>
                    <p>${error.message || 'There is an error'}</p>
                    ${txLink}
                </div>
            `,
            icon: 'error',
            confirmButtonText: 'Close'
        });

        console.error('Error claim reward:', {
            error,
            account: accounts[0],
            timestamp: new Date().toISOString()
        });
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
                    `Limit Daily Claim`,
                    `You have already made a claim today. Please try again after ${Math.ceil(24 - hoursSinceLastClaim)} hours`
                );
                return;
            }
        }

        const { isConfirmed } = await Swal.fire({
            title: "Confirm Claim",
            html: `You will send <b class="eth-value">1 TEA</b> to get <b>100 LEAF</b>`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Yes, Claim Now",
            cancelButtonText: "Close",
        });

        if (!isConfirmed) return;

        showLoading("Processing transactions...");

        const valueInWei = web3.utils.toWei('1', 'ether');

        const gasEstimate = await contract.methods.claimTokens()
            .estimateGas({ from: userAddress, value: valueInWei })
            .catch(err => {
                console.error("Gas estimate error:", err);
                throw new Error("Failed to estimate gas. Please try again later.");
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
            await Swal.fire({
                title: 'Claim Successful!',
                html: `
                    <div>
                        <p>The token has been successfully sent to your address.</b></p>
                        <p>
                            <a href="https://sepolia.tea.xyz/tx/${transactionHash}" 
                               target="_blank"
                               style="color:#2196F3;text-decoration:underline;">
                                View Transactions
                            </a>
                        </p>
                    </div>
                `,
                icon: 'success',
                confirmButtonText: 'Close'
            });

            document.getElementById('claimButton').disabled = true;
            await checkClaimStatus();
        } else {
            showError("Transaction failed to process on blockchain");
        }

        updateClaimTokens();

    } catch (error) {
        console.error("Error detail:", error);

        if (transactionHash) {
            showWarning(
                "Transaction Processed",
                `Your transaction is being processed on the blockchain. <a href="https://sepolia.tea.xyz/tx/${transactionHash}" target="_blank" class="tx-link">View Transaction</a>`
            );
        } else {
            handleClaimError(error);
        }
    }
}

async function updateClaimTokens() {
    await Promise.all([
        updateAccountBalance(),
        aitUpdateAccountBalance()
    ]);
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
                   View Transaction
               </a>`,
        showConfirmButton: true,
        confirmButtonText: "Close"
    });
}

function showWarning(title, message) {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: title,
        html: message,
        showConfirmButton: true,
        confirmButtonText: "Understand"
    });
}

function showError(message) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: message,
        showConfirmButton: true,
        confirmButtonText: "Understand"
    });
}

function handleClaimError(error) {
    let errorMessage = 'Failed to make a claim';

    if (error.code === 4001) {
        errorMessage = "You cancel the transaction";
    } else if (error.message.includes('User denied transaction')) {
        errorMessage = "Transaction rejected by user";
    } else if (error.message.includes('insufficient funds')) {
        errorMessage = "ETH balance is insufficient";
    } else if (error.message.includes('revert')) {
        if (error.message.includes('Claim not available yet')) {
            errorMessage = "You have made a claim today";
        } else if (error.message.includes('Incorrect fee amount')) {
            errorMessage = "The amount of ETH sent is incorrect";
        } else if (error.message.includes('Not enough tokens')) {
            errorMessage = "Token is out, cannot be claimed at this time";
        }
    } else if (error.message.includes('gas')) {
        errorMessage = "Gas adjustment is required. Try again.";
    } else if (error.message.includes('Transaction was not mined')) {
        errorMessage = "Transaction is being processed. Please check your wallet.";
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
        showError("A system error has occurred. Please refresh the page.");
    }
});

window.addEventListener('load', async () => {
    if (window.ethereum) {
        init();
    }
});