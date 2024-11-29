// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VigToken is ERC20 {
    constructor(uint256 supply) ERC20("VigToken", "VIG") {
        _mint(msg.sender, supply);
    }
}
