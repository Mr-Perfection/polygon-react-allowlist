import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";

dotenv.config({ path: __dirname+'/.env' });

const { MATIC_URL, ACCOUNT_PRIVATE_KEY } = process.env;


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: MATIC_URL,
      accounts: [ACCOUNT_PRIVATE_KEY || ""],
    }
  }
};

export default config;
