// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract OrderBalance {
    event TradeSettled(address indexed engine, string symbol, uint256 price, uint256 qty);

    function settleTrade(string calldata symbol, uint256 price, uint256 qty) external returns (bool) {
        emit TradeSettled(msg.sender, symbol, price, qty);
        return true;
    }
}
