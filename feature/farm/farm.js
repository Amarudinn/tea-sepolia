const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});

const farmTab = document.getElementById('farmTab');
const myFarmTab = document.getElementById('myFarmTab');
const farm = document.getElementById('farm');
const myFarm = document.getElementById('myFarm');

farmTab.addEventListener('click', () => {
	farmTab.classList.add('border-b-2', 'border-green-400');
	myFarmTab.classList.remove('border-b-2', 'border-green-400');
	farm.classList.remove('hidden');
	myFarm.classList.add('hidden');
});

myFarmTab.addEventListener('click', () => {
	myFarmTab.classList.add('border-b-2', 'border-green-400');
	farmTab.classList.remove('border-b-2', 'border-green-400');
	myFarm.classList.remove('hidden');
	farm.classList.add('hidden');
});

document.getElementById('stakeContainer').addEventListener('click', function (event) {
	if (event.target.closest('#stakeSection')) {
		return;
	}

	const stakeSection = document.getElementById('stakeSection');
	stakeSection.classList.toggle('hidden');

	const arrowIcon = document.getElementById('arrowIcon');
	if (stakeSection.classList.contains('hidden')) {
		arrowIcon.classList.remove('fa-angle-down');
		arrowIcon.classList.add('fa-angle-left');
	} else {
		arrowIcon.classList.remove('fa-angle-left');
		arrowIcon.classList.add('fa-angle-down');
	}
});

document.getElementById('unstakeContainer').addEventListener('click', function (event) {
	if (event.target.closest('#unstakeSection')) {
		return;
	}

	const stakeSection = document.getElementById('unstakeSection');
	stakeSection.classList.toggle('hidden');

	const arrowIcon = document.getElementById('arrowIconUnstake');
	if (stakeSection.classList.contains('hidden')) {
		arrowIcon.classList.remove('fa-angle-down');
		arrowIcon.classList.add('fa-angle-left');
	} else {
		arrowIcon.classList.remove('fa-angle-left');
		arrowIcon.classList.add('fa-angle-down');
	}
});

document.getElementById('stakeContainerDua').addEventListener('click', function (event) {
	if (event.target.closest('#stakeSectionDua')) {
		return;
	}

	const stakeSection = document.getElementById('stakeSectionDua');
	stakeSection.classList.toggle('hidden');

	const arrowIcon = document.getElementById('arrowIconDua');
	if (stakeSection.classList.contains('hidden')) {
		arrowIcon.classList.remove('fa-angle-down');
		arrowIcon.classList.add('fa-angle-left');
	} else {
		arrowIcon.classList.remove('fa-angle-left');
		arrowIcon.classList.add('fa-angle-down');
	}
});

document.getElementById('unstakeContainerDua').addEventListener('click', function (event) {
	if (event.target.closest('#unstakeSectionDua')) {
		return;
	}

	const stakeSection = document.getElementById('unstakeSectionDua');
	stakeSection.classList.toggle('hidden');

	const arrowIcon = document.getElementById('arrowIconUnstakeDua');
	if (stakeSection.classList.contains('hidden')) {
		arrowIcon.classList.remove('fa-angle-down');
		arrowIcon.classList.add('fa-angle-left');
	} else {
		arrowIcon.classList.remove('fa-angle-left');
		arrowIcon.classList.add('fa-angle-down');
	}
});

document.getElementById('stakeContainerTiga').addEventListener('click', function (event) {
	if (event.target.closest('#stakeSectionTiga')) {
		return;
	}

	const stakeSection = document.getElementById('stakeSectionTiga');
	stakeSection.classList.toggle('hidden');

	const arrowIcon = document.getElementById('arrowIconTiga');
	if (stakeSection.classList.contains('hidden')) {
		arrowIcon.classList.remove('fa-angle-down');
		arrowIcon.classList.add('fa-angle-left');
	} else {
		arrowIcon.classList.remove('fa-angle-left');
		arrowIcon.classList.add('fa-angle-down');
	}
});

document.getElementById('unstakeContainerTiga').addEventListener('click', function (event) {
	if (event.target.closest('#unstakeSectionTiga')) {
		return;
	}

	const stakeSection = document.getElementById('unstakeSectionTiga');
	stakeSection.classList.toggle('hidden');

	const arrowIcon = document.getElementById('arrowIconUnstakeTiga');
	if (stakeSection.classList.contains('hidden')) {
		arrowIcon.classList.remove('fa-angle-down');
		arrowIcon.classList.add('fa-angle-left');
	} else {
		arrowIcon.classList.remove('fa-angle-left');
		arrowIcon.classList.add('fa-angle-down');
	}
});

const LEAF_LP_TOKEN = '0xd4922e23B8e37bF64f83110278576Bdac44fBB30'; // LP TEA/LEAF
const LEAF_STAKING_ADDRESS = '0xD8B09b7a931de894c309B1bc46f28AA920cb5b97'; // TEA/LEAF STAKING ADDRESS
const DAUN_LP_TOKEN = '0x000dCcC7EBC47Fd715058C20D498dC46be3aD335'; //LP TEA/DAUN
const DAUN_STAKING_ADDRESS = '0xc4E554b7f9Fef44E3572BD0448859235FE9d911F'; // TEA/DAUN STAKING ADDRESS
const HRL_LP_TOKEN = '0x9B36dd764e4675ecbf65c2cC689f3f1440108813'; //LP TEA/HRL
const HRL_STAKING_ADDRESS = '0x7680ad2d52Ad057FcE54E3A242366587a5064945'; // TEA/HRL STAKING ADDRESS

const LEAF_TOKEN_ABI = [
	{
		"inputs": [],
		"payable": false,
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
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
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
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
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
				"name": "amount0In",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1In",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0Out",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1Out",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Swap",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint112",
				"name": "reserve0",
				"type": "uint112"
			},
			{
				"indexed": false,
				"internalType": "uint112",
				"name": "reserve1",
				"type": "uint112"
			}
		],
		"name": "Sync",
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
		"constant": true,
		"inputs": [],
		"name": "DOMAIN_SEPARATOR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MINIMUM_LIQUIDITY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "PERMIT_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getReserves",
		"outputs": [
			{
				"internalType": "uint112",
				"name": "_reserve0",
				"type": "uint112"
			},
			{
				"internalType": "uint112",
				"name": "_reserve1",
				"type": "uint112"
			},
			{
				"internalType": "uint32",
				"name": "_blockTimestampLast",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_token0",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token1",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "kLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "permit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price0CumulativeLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price1CumulativeLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "skim",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount0Out",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1Out",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "swap",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sync",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token0",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const LEAF_STAKING_ABI = [
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
	  "inputs": [],
	  "name": "claimReward",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getCurrentAPR",
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
	},
	{
	  "inputs": [],
	  "name": "unstake",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
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
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "withdrawETH",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "stateMutability": "payable",
	  "type": "receive"
	}
  ];

const DAUN_TOKEN_ABI = [
	{
		"inputs": [],
		"payable": false,
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
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
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
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
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
				"name": "amount0In",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1In",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0Out",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1Out",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Swap",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint112",
				"name": "reserve0",
				"type": "uint112"
			},
			{
				"indexed": false,
				"internalType": "uint112",
				"name": "reserve1",
				"type": "uint112"
			}
		],
		"name": "Sync",
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
		"constant": true,
		"inputs": [],
		"name": "DOMAIN_SEPARATOR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MINIMUM_LIQUIDITY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "PERMIT_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getReserves",
		"outputs": [
			{
				"internalType": "uint112",
				"name": "_reserve0",
				"type": "uint112"
			},
			{
				"internalType": "uint112",
				"name": "_reserve1",
				"type": "uint112"
			},
			{
				"internalType": "uint32",
				"name": "_blockTimestampLast",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_token0",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token1",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "kLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "permit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price0CumulativeLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price1CumulativeLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "skim",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount0Out",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1Out",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "swap",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sync",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token0",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const DAUN_STAKING_ABI = [
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
	  "inputs": [],
	  "name": "claimReward",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getCurrentAPR",
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
	},
	{
	  "inputs": [],
	  "name": "unstake",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
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
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "withdrawETH",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "stateMutability": "payable",
	  "type": "receive"
	}
  ];

const HRL_TOKEN_ABI = [
	{
		"inputs": [],
		"payable": false,
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
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
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
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
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
				"name": "amount0In",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1In",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0Out",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1Out",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Swap",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint112",
				"name": "reserve0",
				"type": "uint112"
			},
			{
				"indexed": false,
				"internalType": "uint112",
				"name": "reserve1",
				"type": "uint112"
			}
		],
		"name": "Sync",
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
		"constant": true,
		"inputs": [],
		"name": "DOMAIN_SEPARATOR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MINIMUM_LIQUIDITY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "PERMIT_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getReserves",
		"outputs": [
			{
				"internalType": "uint112",
				"name": "_reserve0",
				"type": "uint112"
			},
			{
				"internalType": "uint112",
				"name": "_reserve1",
				"type": "uint112"
			},
			{
				"internalType": "uint32",
				"name": "_blockTimestampLast",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_token0",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token1",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "kLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "permit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price0CumulativeLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price1CumulativeLast",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "skim",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount0Out",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1Out",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "swap",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sync",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token0",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const HRL_STAKING_ABI = [
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
	  "inputs": [],
	  "name": "claimReward",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getCurrentAPR",
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
	},
	{
	  "inputs": [],
	  "name": "unstake",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
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
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "withdrawETH",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "stateMutability": "payable",
	  "type": "receive"
	}
  ];

let web3;
let LEAF_TOKEN_CONTRACT;
let LEAF_STAKING_CONTRACT;
let DAUN_TOKEN_CONTRACT;
let DAUN_STAKING_CONTRACT;
let HRL_TOKEN_CONTRACT;
let HRL_STAKING_CONTRACT;
let account;

async function init() {
	if (typeof window.ethereum !== 'undefined') {
		console.log('MetaMask is installed!');

		try {
			accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			const account = accounts[0];
			console.log('Connected to MetaMask');
			console.log('Current account:', account);

			document.getElementById("connectWalletStakeContent").style.display = 'none';
			document.getElementById("connectWalletUnstakeContent").style.display = 'none';
			document.getElementById("stakeContentSection").style.display = 'block';
			document.getElementById("unstakeContentSection").style.display = 'block';

			updateConnectButton(account);
			initializeWeb3();
			updateAccountBalance();
			updateStakedAmount();
			updateRewardAmount();
			updateApr();
			duaUpdateAccountBalance();
			updateStakedAmountDua();
			updateRewardAmountDua();
			updateAprDua();
			tigaUpdateAccountBalance();
			updateStakedAmountTiga();
			updateRewardAmountTiga();
			updateAprTiga();
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
	LEAF_TOKEN_CONTRACT = new web3.eth.Contract(LEAF_TOKEN_ABI, LEAF_LP_TOKEN);
	LEAF_STAKING_CONTRACT = new web3.eth.Contract(LEAF_STAKING_ABI, LEAF_STAKING_ADDRESS);
	DAUN_TOKEN_CONTRACT = new web3.eth.Contract(DAUN_TOKEN_ABI, DAUN_LP_TOKEN);
	DAUN_STAKING_CONTRACT = new web3.eth.Contract(DAUN_STAKING_ABI, DAUN_STAKING_ADDRESS);
	HRL_TOKEN_CONTRACT = new web3.eth.Contract(HRL_TOKEN_ABI, HRL_LP_TOKEN);
	HRL_STAKING_CONTRACT = new web3.eth.Contract(HRL_STAKING_ABI, HRL_STAKING_ADDRESS);
}

async function updateAccountBalance() {
	const balanceElement = document.getElementById('balance');
	const balance = await LEAF_TOKEN_CONTRACT.methods.balanceOf(accounts[0]).call();
	const formattedBalance = (balance / 10 ** 18).toFixed(0);
	balanceElement.textContent = formattedBalance;
}

async function duaUpdateAccountBalance() {
	const balanceElement = document.getElementById('balanceDua');
	const balance = await DAUN_TOKEN_CONTRACT.methods.balanceOf(accounts[0]).call();
	const formattedBalance = (balance / 10 ** 18).toFixed(0);
	balanceElement.textContent = formattedBalance;
}

async function tigaUpdateAccountBalance() {
	const balanceElement = document.getElementById('balanceTiga');
	const balance = await HRL_TOKEN_CONTRACT.methods.balanceOf(accounts[0]).call();
	const formattedBalance = (balance / 10 ** 18).toFixed(0);
	balanceElement.textContent = formattedBalance;
}

function setMaxStakeAmount() {
	const balance = document.getElementById('balance').textContent;
	document.getElementById('stakeAmount').value = balance;
}

function setMaxStakeAmountDua() {
	const balance = document.getElementById('balanceDua').textContent;
	document.getElementById('stakeAmountDua').value = balance;
}

function setMaxStakeAmountTiga() {
	const balance = document.getElementById('balanceTiga').textContent;
	document.getElementById('stakeAmountTiga').value = balance;
}

function setMaxUnstakeAmount() {
	const stakedAmount = document.getElementById('stakedAmount').textContent;
	document.getElementById('unstakeAmount').value = stakedAmount;
}

function setMaxUnstakeAmountDua() {
	const stakedAmount = document.getElementById('stakedAmountDua').textContent;
	document.getElementById('unstakeAmountDua').value = stakedAmount;
}

function setMaxUnstakeAmountTiga() {
	const stakedAmount = document.getElementById('stakedAmountTiga').textContent;
	document.getElementById('unstakeAmountTiga').value = stakedAmount;
}

async function approve(tokenContract, stakingAddress, amount) {
	try {
		const approvedAmount = web3.utils.toWei(amount);
		await tokenContract.methods.approve(stakingAddress, approvedAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top",
			icon: "success",
			title: "Approval successful",
			showConfirmButton: false,
			timer: 1000
		});
		console.log('Approval successful');
	} catch (error) {
		Swal.fire({
			position: "top",
			icon: "error",
			title: "Failed to approve",
			showConfirmButton: false,
			timer: 1500
		});
		console.error('Failed to approve:', error);
		throw error;
	}
}

async function stake() {
	const amount = document.getElementById('stakeAmount').value;

	try {
		await approve(LEAF_TOKEN_CONTRACT, LEAF_STAKING_ADDRESS, amount);

		const stakedAmount = web3.utils.toWei(amount);
		await LEAF_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0], gas: 300000 });

		Swal.fire({
			position: "top",
			icon: "success",
			title: "Staking successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Staking successful');
		updateAccountBalance();
		updateStakedAmount();
		updateRewardAmount();
		updateApr();
	} catch (error) {
		Swal.fire({
			position: "top",
			icon: "error",
			title: "Failed to stake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to stake:', error);
	}
}

async function stakeDua() {
	const amount = document.getElementById('stakeAmountDua').value;

	try {
		await approve(DAUN_TOKEN_CONTRACT, DAUN_STAKING_ADDRESS, amount);

		const stakedAmount = web3.utils.toWei(amount);
		await DAUN_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0], gas: 300000 });

		Swal.fire({
			position: "top",
			icon: "success",
			title: "Staking successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Staking successful');
		duaUpdateAccountBalance();
		updateStakedAmountDua();
		updateRewardAmountDua();
		updateAprDua();
	} catch (error) {
		Swal.fire({
			position: "top",
			icon: "error",
			title: "Failed to stake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to stake:', error);
	}
}

async function stakeTiga() {
	const amount = document.getElementById('stakeAmountTiga').value;

	try {
		await approve(HRL_TOKEN_CONTRACT, HRL_STAKING_ADDRESS, amount);

		const stakedAmount = web3.utils.toWei(amount);
		await HRL_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0], gas: 300000 });

		Swal.fire({
			position: "top",
			icon: "success",
			title: "Staking successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Staking successful');
		tigaUpdateAccountBalance();
		updateStakedAmountTiga();
		updateRewardAmountTiga();
		updateAprTiga();
	} catch (error) {
		Swal.fire({
			position: "top",
			icon: "error",
			title: "Failed to stake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to stake:', error);
	}
}

// async function approveTiga(amount) {
// 	try {
// 		const approvedAmount = web3.utils.toWei(amount);
// 		await HRL_TOKEN_CONTRACT.methods.approve(HRL_STAKING_ADDRESS, approvedAmount).send({ from: accounts[0] });
// 		Swal.fire({
// 			position: "top-center",
// 			icon: "success",
// 			title: "Approval successful",
// 			showConfirmButton: false,
// 			timer: 1000
// 		});
// 		console.log('Approval successful');
// 	} catch (error) {
// 		Swal.fire({
// 			position: "top-center",
// 			icon: "error",
// 			title: "Failed to approve",
// 			showConfirmButton: false,
// 			timer: 1500
// 		});
// 		console.error('Failed to approve:', error);
// 	}
// }

// async function stakeTiga() {
// 	const amount = document.getElementById('stakeAmountTiga').value;

// 	try {
// 		await approveTiga(amount);
// 		const stakedAmount = web3.utils.toWei(amount);
// 		await HRL_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0] });
// 		Swal.fire({
// 			position: "top-center",
// 			icon: "success",
// 			title: "Staking successful",
// 			showConfirmButton: false,
// 			timer: 2000
// 		});
// 		console.log('Staking successful');
// 		tigaUpdateAccountBalance();
// 		updateStakedAmountTiga();
// 		updateRewardAmountTiga();
// 		updateAprTiga();
// 	} catch (error) {
// 		Swal.fire({
// 			position: "top-center",
// 			icon: "error",
// 			title: "Failed to stake",
// 			showConfirmButton: false,
// 			timer: 2000
// 		});
// 		console.error('Failed to stake:', error);
// 	}
// }

async function unstakePartial() {
	const amount = document.getElementById('unstakeAmount').value;
	const unstakedAmount = web3.utils.toWei(amount);

	try {
		await LEAF_STAKING_CONTRACT.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
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
		updateApr();
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

async function unstakePartialDua() {
	const amount = document.getElementById('unstakeAmountDua').value;
	const unstakedAmount = web3.utils.toWei(amount);

	try {
		await DAUN_STAKING_CONTRACT.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Unstake successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Partial unstake successful');
		duaUpdateAccountBalance();
		updateStakedAmountDua();
		updateRewardAmountDua();
		updateAprDua();
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

async function unstakePartialTiga() {
	const amount = document.getElementById('unstakeAmountTiga').value;
	const unstakedAmount = web3.utils.toWei(amount);

	try {
		await HRL_STAKING_CONTRACT.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Unstake successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Partial unstake successful');
		tigaUpdateAccountBalance();
		updateStakedAmountTiga();
		updateRewardAmountTiga();
		updateAprTiga();
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
		await LEAF_STAKING_CONTRACT.methods.claimReward().send({ from: accounts[0] });
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
		updateApr();
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

async function claimRewardDua() {
	try {
		await DAUN_STAKING_CONTRACT.methods.claimReward().send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Reward claimed",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Reward claimed');
		duaUpdateAccountBalance();
		updateRewardAmountDua();
		updateAprDua();
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

async function claimRewardTiga() {
	try {
		await HRL_STAKING_CONTRACT.methods.claimReward().send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Reward claimed",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Reward claimed');
		tigaUpdateAccountBalance();
		updateRewardAmountTiga();
		updateAprTiga();
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
	const stakedAmount = await LEAF_STAKING_CONTRACT.methods.getStakedAmount(accounts[0]).call();
	const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(0);
	stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateStakedAmountDua() {
	const stakedAmountElement = document.getElementById('stakedAmountDua');
	const stakedAmount = await DAUN_STAKING_CONTRACT.methods.getStakedAmount(accounts[0]).call();
	const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(0);
	stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateStakedAmountTiga() {
	const stakedAmountElement = document.getElementById('stakedAmountTiga');
	const stakedAmount = await HRL_STAKING_CONTRACT.methods.getStakedAmount(accounts[0]).call();
	const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(0);
	stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateRewardAmount() {
	const rewardAmountElement = document.getElementById('rewardAmount');
	const rewardAmount = await LEAF_STAKING_CONTRACT.methods.getPendingReward(accounts[0]).call();
	const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
	rewardAmountElement.textContent = formattedRewardAmount;
}

setInterval(updateRewardAmount, 1000);

async function updateApr() {
	const calculateReward = document.getElementById('calculateReward');
	const apr = await LEAF_STAKING_CONTRACT.methods.getCurrentAPR().call();
	const aprPercentage = ((apr / 1e5) * 100).toFixed(2);
	calculateReward.textContent = aprPercentage;
}

async function updateRewardAmountDua() {
	const rewardAmountElement = document.getElementById('rewardAmountDua');
	const rewardAmount = await DAUN_STAKING_CONTRACT.methods.getPendingReward(accounts[0]).call();
	const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
	rewardAmountElement.textContent = formattedRewardAmount;
}

setInterval(updateRewardAmountDua, 1000);

async function updateAprDua() {
	const calculateRewardDua = document.getElementById('calculateRewardDua');
	const apr = await DAUN_STAKING_CONTRACT.methods.getCurrentAPR().call();
	const aprPercentage = ((apr / 1e5) * 100).toFixed(2);
	calculateRewardDua.textContent = aprPercentage;
}

async function updateRewardAmountTiga() {
	const rewardAmountElement = document.getElementById('rewardAmountTiga');
	const rewardAmount = await HRL_STAKING_CONTRACT.methods.getPendingReward(accounts[0]).call();
	const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
	rewardAmountElement.textContent = formattedRewardAmount;
}

setInterval(updateRewardAmountTiga, 1000);

async function updateAprTiga() {
	const calculateRewardTiga = document.getElementById('calculateRewardTiga');
	const apr = await HRL_STAKING_CONTRACT.methods.getCurrentAPR().call();
	const aprPercentage = ((apr / 1e5) * 100).toFixed(2);
	calculateRewardTiga.textContent = aprPercentage;
}


window.addEventListener('load', async () => {
	if (window.ethereum) {
		init();
	}
});