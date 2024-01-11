// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.23;

contract Lottery {
    address public owner; // Contract owner's address
    address[] public players; // Array to store the addresses of players who entered the lottery
    mapping(address => bool) public hasEntered; // Mapping to track whether an address has already entered the lottery

    // Constructor to set the owner as the one who deploys the contract
    constructor() {
        owner = msg.sender;
    }

    // Enter into the lottery by sending more than 0.1 Ether
    function enter() public payable notOwner {
        // Require that the sender has not already entered
        require(
            !hasEntered[msg.sender],
            "You have already entered the lottery"
        );

        // Require that the sent value is more than 0.1 Ether
        require(
            msg.value > 0.1 ether,
            "The minimum amount of ether required to enter the lottery is 0.1 Ether"
        );

        // Add the sender's address to the players array
        players.push(msg.sender);

        // Mark the sender as entered
        hasEntered[msg.sender] = true;
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
        // Require that there are at least 10 players to pick a winner
        require(
            players.length >= 10,
            "There must be at least 10 players to pick a winner"
        );

        // Get the current balance of the contract
        uint contractBalance = address(this).balance;

        // Require that the contract balance should have at least 10 ether to pick the winner
        require(
            contractBalance >= 10 ether,
            "Insufficient funds to pick the winner"
        );

        // Generate a random index within the players array
        uint index = random() % players.length;

        // Set the winner's address
        address payable winner = payable(players[index]);

        // Transfer the entire contract balance to the winner
        winner.transfer(contractBalance);

        // Reset the players array for a new round
        players = new address[](0);

        // Reset the hasEntered mapping
        for (uint i = 0; i < players.length; i++) {
            hasEntered[players[i]] = false;
        }
    }

    // Modifier function to check if the caller is the owner
    modifier onlyOwner() {
        require(
            owner == msg.sender,
            "You are not authorised to perform this action!"
        );
        _;
    }

    // Modifier function to check if the caller is not the owner
    modifier notOwner() {
        require(
            owner != msg.sender,
            "You are not authorised to perform this action!"
        );
        _;
    }
}
