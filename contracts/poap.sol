// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract POAP is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _poapIdCounter;

    uint256 public _startTime;

    uint256 public _endTime;

    mapping(address => bool) private _whitelisteds;

    enum WhitelistStatus {
        ENABLED,
        DISABLED
    }

    WhitelistStatus private _whitelistStatus = WhitelistStatus.DISABLED;

    // maximum allowed mint
    uint256 public _maxMint;

    string public _metaData;

    enum MintStatus {
        INACTIVE,
        ACTIVE
    }

    MintStatus public mintStatus = MintStatus.ACTIVE;

    constructor(
        address owner,
        uint256 startTime,
        uint256 endTime,
        uint256 maxMint,
        string memory metaData,
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        setEndTime(endTime);
        setStartTime(startTime);
        setMetaData(metaData);
        setMaxMint(maxMint);
        transferOwnership(owner);
    }

    modifier canMint() {
        require(mintStatus == MintStatus.ACTIVE, "MINT_INACTIVE");
        require(block.timestamp >= _startTime, "MINT_NOT_STARTED");
        require(block.timestamp <= _endTime, "MINT_ENDED");
        require(_maxMint > _poapIdCounter.current(), "MINT_EXCEEDED");
        require(balanceOf(msg.sender) == 0, "MINT_MULTIPLE_DISALLOWED");
        _;
    }

    function enableWhitelist() external onlyOwner {
        require(_whitelistStatus == WhitelistStatus.DISABLED);

        _whitelistStatus = WhitelistStatus.ENABLED;
    }

    function disableWhitelist() external onlyOwner {
        require(_whitelistStatus == WhitelistStatus.ENABLED);

        _whitelistStatus = WhitelistStatus.DISABLED;
    }

    function addToWhiteList() external onlyOwner {
        _whitelisteds[msg.sender] = true;
    }

    function removeFromWhiteList() external onlyOwner {
        _whitelisteds[msg.sender] = false;
    }

    function setStartTime(uint256 startTime) public onlyOwner {
        require(_endTime > startTime, "MINT_START_TIME_INVALID");
        _startTime = startTime;
    }

    function setEndTime(uint256 endTime) public onlyOwner {
        require(
            endTime >= block.timestamp && endTime > _startTime,
            "MINT_END_TIME_INVALID"
        );
        _endTime = endTime;
    }

    function setMetaData(string memory metaData) public onlyOwner {
        _metaData = metaData;
    }

    function setMaxMint(uint256 maxMint) public onlyOwner {
        _maxMint = maxMint;
    }

    function activateMint() external onlyOwner {
        mintStatus = MintStatus.ACTIVE;
    }

    function deactivateMint() external onlyOwner {
        mintStatus = MintStatus.INACTIVE;
    }

    function safeMint(string memory uri) external canMint {
        if (_whitelistStatus == WhitelistStatus.ENABLED) {
            require(_whitelisteds[msg.sender], "WALLET_NOT_WHITELISTED");
        }
        uint256 poapId = _poapIdCounter.current();
        _poapIdCounter.increment();
        _safeMint(msg.sender, poapId);
        _setTokenURI(poapId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 poapId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, poapId);
    }

    //    destroy an NFT
    function _burn(uint256 poapId) internal override(ERC721, ERC721URIStorage) {
        super._burn(poapId);
    }

    //    return IPFS url of NFT metadata
    function tokenURI(uint256 poapId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(poapId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
