// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./Ownable.sol";

contract DailyCheckIn is Ownable {
    struct UserStats {
        uint256 currentStreak;
        uint256 longestStreak;
        uint256 totalCheckIns;
        uint256 lastCheckInTime;
        uint256 totalTokensEarned;
    }

    IERC20 public rewardToken;

    mapping(address => UserStats) public userStats;

    uint256 public constant CHECK_IN_INTERVAL = 24 hours; 
    uint256 public constant TOKEN_REWARD = 1 * 10**18; 
    uint256 public totalUsers;
    uint256 public totalCheckIns;

    event CheckedIn(
        address indexed user,
        uint256 timestamp,
        uint256 rewardAmount,
        uint256 currentStreak
    );
    event TokenAddressUpdated(address newTokenAddress);
    event TokensWithdrawn(uint256 amount);

    constructor(address _tokenAddress) {
        rewardToken = IERC20(_tokenAddress);
    }

    function checkIn() external {
        address user = msg.sender;
        UserStats storage stats = userStats[msg.sender];
        stats.totalCheckIns++;

        require(canCheckIn(user), "Anda sudah check-in hari ini");

        if (stats.totalCheckIns == 0) {
            totalUsers++;
        }

        if (stats.lastCheckInTime > 0) {
            if (
                block.timestamp >= stats.lastCheckInTime + CHECK_IN_INTERVAL * 2
            ) {
                stats.currentStreak = 1;
            } else if (
                block.timestamp >= stats.lastCheckInTime + CHECK_IN_INTERVAL
            ) {
                stats.currentStreak++;
            }
        } else {
            stats.currentStreak = 1;
        }

        if (stats.currentStreak > stats.longestStreak) {
            stats.longestStreak = stats.currentStreak;
        }

        stats.lastCheckInTime = block.timestamp;
        stats.totalCheckIns++;
        stats.totalTokensEarned += TOKEN_REWARD;
        totalCheckIns++;

        require(
            rewardToken.transfer(user, TOKEN_REWARD),
            "Transfer reward gagal"
        );

        emit CheckedIn(
            user,
            block.timestamp,
            TOKEN_REWARD,
            stats.currentStreak
        );
    }

    function getUserCheckInCount(address user) public view returns (uint256) {
        return userStats[user].totalCheckIns;
    }

    function canCheckIn(address user) public view returns (bool) {
        UserStats memory stats = userStats[user];
        if (stats.lastCheckInTime == 0) {
            return true;
        }
        return block.timestamp >= stats.lastCheckInTime + CHECK_IN_INTERVAL;
    }

    function getUserStats(address user)
        public
        view
        returns (
            uint256 currentStreak,
            uint256 longestStreak,
            uint256 totalCheckInsForUser,
            uint256 lastCheckInTime,
            uint256 totalTokensEarned,
            bool canUserCheckIn
        )
    {
        UserStats memory stats = userStats[user];
        return (
            stats.currentStreak,
            stats.longestStreak,
            stats.totalCheckIns,
            stats.lastCheckInTime,
            stats.totalTokensEarned,
            canCheckIn(user)
        );
    }

    function timeUntilNextCheckIn(address user) public view returns (uint256) {
        UserStats memory stats = userStats[user];
        if (
            stats.lastCheckInTime == 0 ||
            block.timestamp >= stats.lastCheckInTime + CHECK_IN_INTERVAL
        ) {
            return 0;
        }
        return (stats.lastCheckInTime + CHECK_IN_INTERVAL) - block.timestamp;
    }

    function setTokenAddress(address _tokenAddress) external onlyOwner {
        require(_tokenAddress != address(0), "Alamat token tidak valid");
        rewardToken = IERC20(_tokenAddress);
        emit TokenAddressUpdated(_tokenAddress);
    }

    function withdrawTokens() external onlyOwner {
        uint256 balance = rewardToken.balanceOf(address(this));
        require(balance > 0, "Tidak ada token yang bisa ditarik");
        rewardToken.transfer(owner(), balance);
        emit TokensWithdrawn(balance);
    }

    function fundContract(uint256 amount) external {
        require(
            rewardToken.transferFrom(msg.sender, address(this), amount),
            "Transfer gagal"
        );
    }
}
