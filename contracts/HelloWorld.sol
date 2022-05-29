// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// state container with functions to mutate it
// every time you deploy, constructor gets called ONE time
contract HelloWorld {
    function hello() public pure returns (string memory) {
        return "Hello Contract!";
    }
}
