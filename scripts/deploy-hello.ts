import "@nomiclabs/hardhat-ethers";
import { Contract } from "ethers";
import { ethers } from "hardhat";

async function deploy(): Promise<Contract> {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = HelloWorld.deploy();
    (await hello).deployed();
    
    return hello;
}

async function sayHello(hello: Contract): Promise<void> {
    console.log("Say hello: ", await hello.hello());
}

deploy().then(sayHello);
