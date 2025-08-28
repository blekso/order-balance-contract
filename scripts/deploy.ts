import { deployments, getNamedAccounts } from "hardhat";

async function main() {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log({
    from: deployer,
    args: [],
  });

  const tx = await deploy("OrderBalance", {
    from: deployer,
    args: [],
  });

  console.log(`Deployed to: ${tx.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
