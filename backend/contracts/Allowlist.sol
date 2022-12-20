// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Allowlist {
    // all are going to be set to uuid value in smart contract, so declare as same type
  struct allowlister {
    string f_name;
    string l_name;
    string wallet_address;
  }

  allowlister[] allowlisters; // array of all allowlisters

  function _createAllowlister (string memory _uuid) public {
    allowlisters.push(allowlister({
      f_name: _uuid,
      l_name: _uuid,
      wallet_address: _uuid
    }));
  }
}
