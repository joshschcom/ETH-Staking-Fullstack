require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
console.log(process.env);
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    hardhat: {},
    mumbai: {
      url: process.env.PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY1],
    },
  },
  solidity: {
    version: "0.8.0",
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
