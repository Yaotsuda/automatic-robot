const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const KrylToken = await hre.ethers.getContractFactory("KrylToken");
  const token = await KrylToken.deploy(1000000); // 1,000,000 токенов
  await token.deployed();

  console.log("KrylToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
