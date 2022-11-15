# Commands

npm i --save-dev hardhat

npx hardhat

npm i @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle chai ethereum-waffle ethers

npx hardhat node

npm i react-bootstrap-icons ethers bootstrap

npm i dotenv

npx hardhat run --network localhost scripts/1_deploy.js

npx hardhat run --network mumbai scripts/1_deploy.js

npm run

# Instructions

Normally this would deploy via the deploy scripts with a few sample Transactions already on the staking App, but since we had problems to interact with them via metamask and hardhat node we have chosen Mumbai to deploy there. It will likely fail on any ETH Network ifyou dont have more then 10ETH. Dont forget to change the parseEther Ether value to the amount of ETH you want in the contract for when the contract deploys. If you want to run it with the predefined transactions in beforehand change delete the /\* \*/ in the deploy script aswell as delete the closing bracket above it. Dont forget to change the ETH Amount for signer2 to amount you wish. You might have to add PRIVATE_KEY2 to the .env file.
