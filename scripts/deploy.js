
async function main() {
  const HelloWorld = await ethers.deployContract("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  // const hello_world = await HelloWorld("Hello World!");
  console.log("Contract deployed to address:", HelloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
