require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const endpointUrl = process.env.RPC_URL;
const privateKey = process.env.PRIVATE_KEY;
const etherscanKey = process.env.ETHERSCAN_API_KEY;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: endpointUrl,
      accounts: [`0x${privateKey}`],
    },
  },
  etherscan: {
    apiKey: etherscanKey,
  },
};
