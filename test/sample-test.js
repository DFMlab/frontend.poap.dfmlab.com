const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Poap", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Poap");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    expect(await greeter.mintStatus).to.equal(0);
  });
});
