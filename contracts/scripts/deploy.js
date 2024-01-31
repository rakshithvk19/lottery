const { ethers } = require("hardhat");

async function main() {
  // Get the deployer's signer address
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  // Get the Lottery contract factory
  const LotteryFactory = await ethers.getContractFactory("Lottery");

  try {
    // Deploy the Lottery contract
    const lottery = await LotteryFactory.deploy();

    // Log the deployed contract address
    console.log("Contract address:", lottery.address);
  } catch (error) {
    // Handle deployment error
    console.error("Error deploying contract:", error);
    process.exit(1);
  }
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    // Handle unhandled error
    console.error("Unhandled error in main:", error);
    process.exit(1);
  });
