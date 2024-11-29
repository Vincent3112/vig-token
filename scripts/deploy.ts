import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract with account: ${deployer.address}`);

  console.log("key : ", process.env.PRIVATE_KEY);

  const vig = await ethers.getContractFactory("VigToken");
  const initialSupply = ethers.parseEther("1000000");
  const token = await vig.deploy(initialSupply);

  await token.waitForDeployment();
  console.log(`Token deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
