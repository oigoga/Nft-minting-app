import hre from "hardhat";

 

async function main() {
  const NFTmint = await hre.ethers.getContractFactory("NFTmint");
  const nftmint = await NFTmint.deploy();
  await nftmint.deployed();
  console.log("NFTmint deployed to:", nftmint.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
