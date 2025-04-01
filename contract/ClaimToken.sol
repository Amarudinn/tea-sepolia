// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract ClaimToken {
    address public owner;
    address public tokenAddress;
    uint256 public totalToken;
    uint256 public claimFee = 1 ether;
    uint256 public tokenAmount = 100 * 10**18;

    event TokensClaimed(address indexed receiver, uint256 amount);
    event TotalTokenUpdated(uint256 newTotalToken);
    event FeeReceived(address indexed sender, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function.");
        _;
    }

    constructor(address _tokenAddress) {
        require(_tokenAddress != address(0), "Token address cannot be zero.");
        owner = msg.sender;
        tokenAddress = _tokenAddress;
        updateTotalToken();
    }

    mapping(address => bool) public hasClaimed;
    mapping(address => uint256) public lastClaimTime;

    function claimTokens() external payable {
        require(msg.value == claimFee, "Incorrect fee amount. 0.02 ETH required.");
        require(!hasClaimed[msg.sender] || block.timestamp >= lastClaimTime[msg.sender] + 24 hours, "Claim not available yet.");
        require(tokenAmount <= getTokenBalance(), "Not enough tokens available for claim.");

        hasClaimed[msg.sender] = true;
        lastClaimTime[msg.sender] = block.timestamp;

        emit FeeReceived(msg.sender, msg.value);

        bool success = IERC20(tokenAddress).transfer(msg.sender, tokenAmount);
        require(success, "Token transfer failed.");

        emit TokensClaimed(msg.sender, tokenAmount);
        updateTotalToken();
    }

    function getTokenBalance() public view returns (uint256) {
        return IERC20(tokenAddress).balanceOf(address(this));
    }

    function updateTotalToken() internal {
        totalToken = getTokenBalance();
        emit TotalTokenUpdated(totalToken);
    }

    function setClaimFee(uint256 _fee) external onlyOwner {
        require(_fee > 0, "Claim fee must be greater than zero.");
        claimFee = _fee;
    }

    function setTokenAmount(uint256 _amount) external onlyOwner {
        require(_amount > 0, "Token amount must be greater than zero.");
        tokenAmount = _amount;
    }

    function withdrawTokens() external onlyOwner {
        uint256 tokenBalance = getTokenBalance();
        require(tokenBalance > 0, "No token balance to withdraw.");

        bool success = IERC20(tokenAddress).transfer(owner, tokenBalance);
        require(success, "Token withdrawal failed.");

        updateTotalToken();
    }

    function withdrawFees() external onlyOwner {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No fees to withdraw.");

        (bool success, ) = owner.call{value: contractBalance}("");
        require(success, "Fee withdrawal failed.");
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner cannot be the zero address.");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    receive() external payable {
        emit FeeReceived(msg.sender, msg.value);
    }
}
