// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.23;

contract Lottery {
    address public owner; // Contract owner's address
    address[] public players; // Array to store the addresses of players who entered the lottery

    // Constructor to set the owner as the one who deploys the contract
    constructor() {
        owner = msg.sender;
    }

    // Enter into the lottery by sending more than 0.1 Ether
    function enter() public payable notOwner {
        // Require that the sent value is more than 0.1 Ether
        require(msg.value > 0.1 ether);
        // Add the sender's address to the players array
        players.push(msg.sender);
    }

    // Random number generator function
    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    // Encode the sender's address, current block timestamp, and players array for randomness
                    abi.encodePacked(msg.sender, block.timestamp, players)
                )
            );
    }

    // Pick winner from the player pool
    function pickWinner() public onlyOwner {
        // Require that the caller is the owner
        require(owner == msg.sender);

        // Generate a random index within the players array
        uint index = random() % players.length;

        // Set the winner's address
        address payable winner = payable(players[index]);

        // Get the current balance of the contract
        uint contractBalance = address(this).balance;

        // Transfer the entire contract balance to the winner
        winner.transfer(contractBalance);

        // Reset the players array for a new round
        players = new address[](0);
    }

    // Modifier function to check if the caller is the owner
    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }

    // Modifier function to check if the caller is not the owner
    modifier notOwner() {
        require(owner != msg.sender);
        _;
    }
}
