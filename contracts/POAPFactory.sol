//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import './Poap.sol';

contract POAPFactory is Ownable {

    using Counters for Counters.Counter;

    mapping(uint256 => POAP) public _poaps;

    Counters.Counter private _poapCounter;

    enum Status { ACTIVE, INACTIVE }

    Status status = Status.ACTIVE;

    modifier onlyWhenActive() {
        require(status ==  Status.ACTIVE, "POAP_INACTIVE");
        _;
    }

    function activate() external onlyOwner {
        require(status == Status.INACTIVE, "POAP_ACTIVE");
        status = Status.ACTIVE;
    }

    function deactivate() external onlyOwner {
        require(status == Status.ACTIVE, "POAP_INACTIVE");
        status = Status.INACTIVE;
    }

    function delistPOAP(uint256 poapId) external onlyOwner {
        _poaps[poapId] = POAP(0x0000000000000000000000000000000000000000);
    }

    function listPOAP(address poapAddress) external onlyOwner onlyWhenActive {
        _listPOAP(POAP(poapAddress));
    }

    function _listPOAP(POAP poap) internal {

        uint256 poapCount = _poapCounter.current();

        _poapCounter.increment();

        _poaps[poapCount] = poap;

    }

    function spawn(address owner, uint256 startTime, uint256 endTime, uint256 maxMint, string memory metaData, string memory name, string memory symbol) external onlyWhenActive {
        POAP poap = new POAP(owner, startTime, endTime, maxMint, metaData, name, symbol);
        _listPOAP(poap);
    }

}