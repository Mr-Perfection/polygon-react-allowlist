# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

### Setup
```sh
npx hardhat
pnpm install -D @nomiclabs/hardhat-waffle ethereum-waffle @nomiclabs/hardhat-ethers ethers hardhat
pnpm install -D @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
pnpm install -D typescript ts-node @types/node @types/chai @types/mocha @ethersproject/bytes dotenv
pnpm install @openzeppelin/contracts
pnpm up --latest

# https://hardhat.org/hardhat-chai-matchers/docs/migrate-from-waffle
pnpm uninstall @nomiclabs/hardhat-waffle ethereum-waffle
```