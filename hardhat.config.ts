import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";

import "dotenv/config";

const PRIVKEY_DEFAULT =
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia.rpc.subquery.network/public",
      accounts: [
        process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : PRIVKEY_DEFAULT,
      ],
    },
  },
  etherscan: {
    apiKey: "XJH4US71G3CKPY8XSUS5Y9RIWVX2QF5QXU",
  },
};

export default config;
