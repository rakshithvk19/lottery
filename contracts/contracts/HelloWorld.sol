// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.23;

contract HelloWorld {
    string hello = "Hello World";

    function helloWorld() public view returns (string memory) {
        return hello;
    }
}
