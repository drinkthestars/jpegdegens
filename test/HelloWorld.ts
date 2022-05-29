// adds convenience methods to the ethers library
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("shoudl say hi", async function () {
        // 1. setup env 
        // 2. deploy contract
        // 3. call functions to test

        // 2. deploy!!!
        // nomic labs adds some nice functions
        // contract factory!

        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        //makes the txn to actually deploy the contract onto a network
        const hello = await HelloWorld.deploy();
        await hello.deployed(); // wait until its done!

        expect(await hello.hello()).to.equal("Hello Contract!");
    })
})

