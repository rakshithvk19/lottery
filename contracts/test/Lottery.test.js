const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery Contract", function () {
  let Lottery;
  let lottery;
  let owner;
  let players; // Array to store player accounts

  beforeEach(async function () {
    // Get signers for owner and players
    [owner, ...players] = await ethers.getSigners();

    // Deploy the Lottery contract
    const LotteryFactory = await ethers.getContractFactory("Lottery");
    lottery = await LotteryFactory.deploy();
  });

  it("Should allow players to enter the lottery", async function () {
    // Player1 enters the lottery
    await lottery
      .connect(players[0])
      .enter({ value: ethers.parseEther("0.2") });
    const player1Entered = await lottery.hasEntered(players[0].address);
    expect(player1Entered).to.equal(true);

    // Player2 enters the lottery
    await lottery
      .connect(players[1])
      .enter({ value: ethers.parseEther("0.2") });
    const player2Entered = await lottery.hasEntered(players[1].address);
    expect(player2Entered).to.equal(true);
  });

  it("Should not allow players to enter more than once", async function () {
    // Player1 enters the lottery
    await lottery
      .connect(players[0])
      .enter({ value: ethers.parseEther("0.2") });

    // Player1 attempts to enter again and expects it to revert
    await expect(
      lottery.connect(players[0]).enter({ value: ethers.parseEther("0.2") })
    ).to.be.revertedWith("You have already entered the lottery");
  });

  it("Should pick a winner when conditions are met", async function () {
    // Simulate 10 players entering the lottery
    for (let i = 0; i < 11; i++) {
      await lottery
        .connect(players[i])
        .enter({ value: ethers.parseEther("1") });
    }

    // Check initial contract balance
    const initialContractBalanceBeforePick = await ethers.provider.getBalance(
      lottery.target
    );

    expect(initialContractBalanceBeforePick).to.be.at.least(
      ethers.parseEther("2")
    );

    // Pick a winner
    const pickWinnerTx = await lottery.connect(owner).pickWinner();
    const pickWinnerReceipt = await pickWinnerTx.wait();

    // Get winner from the event
    const winner = pickWinnerReceipt.events[0].args.winner;

    // Check final contract balance, players array, and hasEntered status
    const finalContractBalanceAfterPick = await ethers.provider.getBalance(
      lottery.address
    );

    // We expect some gas costs, so we check if the balance is less than the initial balance
    expect(finalContractBalanceAfterPick).to.be.lessThan(
      initialContractBalanceBeforePick
    );

    expect(await lottery.players()).to.have.lengthOf(0);
    expect(await lottery.hasEntered(winner)).to.equal(false);
  });
});
