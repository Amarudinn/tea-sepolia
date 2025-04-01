// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract LEAFStaking {
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lastClaimTime; 
        uint256 totalReward; 
        uint256 pendingReward; 
    }

    mapping(address => Stake) public stakes;

    address public owner;
    address public tokenAddress = 0x0281e0e9Df9920E994051fC3798fd1565F6d28BF;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    //Default 6000 (6%)
    uint256 public rewardRate = 6000; 
    uint256 public constant SCALE = 1e5; 

    uint256 public totalTokenStaked; 

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function setRewardRate(uint256 newRewardRate) external onlyOwner {
        require(newRewardRate >= 0, "Reward rate must be non-negative");
        rewardRate = newRewardRate;
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");

        IERC20 token = IERC20(tokenAddress);
        require(
            token.transferFrom(msg.sender, address(this), amount),
            "Token transfer failed"
        );

        Stake storage userStake = stakes[msg.sender];

        if (userStake.amount > 0) {
            uint256 reward = calculateReward(msg.sender);
            userStake.pendingReward += reward;
        }

        userStake.amount += amount;
        userStake.lastClaimTime = block.timestamp;

        if (userStake.startTime == 0) {
            userStake.startTime = block.timestamp;
        }

        totalTokenStaked += amount;

        emit Staked(msg.sender, amount);
    }

    function unstake() external {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No active stake found");

        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        totalTokenStaked -= userStake.amount;

        uint256 stakedAmount = userStake.amount;
        userStake.amount = 0;
        userStake.lastClaimTime = block.timestamp;

        IERC20 token = IERC20(tokenAddress);
        require(token.transfer(msg.sender, stakedAmount), "Token transfer failed");

        emit Unstaked(msg.sender, stakedAmount);
    }

    function unstakePartial(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount >= amount, "Insufficient staked amount");

        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        userStake.amount -= amount;
        userStake.lastClaimTime = block.timestamp;

        totalTokenStaked -= amount;

        IERC20 token = IERC20(tokenAddress);
        require(token.transfer(msg.sender, amount), "Token transfer failed");

        emit Unstaked(msg.sender, amount);
    }

    function claimReward() external {
        Stake storage userStake = stakes[msg.sender];

        uint256 reward = calculateReward(msg.sender);
        uint256 totalReward = userStake.pendingReward + reward;
        require(totalReward > 0, "No reward available");

        userStake.pendingReward = 0;
        userStake.lastClaimTime = block.timestamp;
        userStake.totalReward += totalReward;

        payable(msg.sender).transfer(totalReward);

        emit RewardClaimed(msg.sender, totalReward);
    }

    function calculateReward(address user) public view returns (uint256) {
        Stake storage userStake = stakes[user];

        if (userStake.amount == 0) {
            return 0;
        }

        uint256 stakingTime = block.timestamp - userStake.lastClaimTime;
        uint256 reward = (userStake.amount * stakingTime * rewardRate) /
            (100 * (1 days) * SCALE); 

        return reward;
    }

    function getStakedAmount(address user) external view returns (uint256) {
        return stakes[user].amount;
    }

    function getTotalReward(address user) external view returns (uint256) {
        return stakes[user].totalReward;
    }

    function getPendingReward(address user) external view returns (uint256) {
        Stake storage userStake = stakes[user];
        uint256 reward = calculateReward(user);
        return userStake.pendingReward + reward;
    }

    function getTotalTokenStaked() external view returns (uint256) {
        return totalTokenStaked;
    }
}