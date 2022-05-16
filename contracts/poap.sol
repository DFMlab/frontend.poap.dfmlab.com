// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract POAP is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _poapIdCounter;

    constructor() ERC721("DFMLABPOAP", "DFMLab POAP") {}

    enum MintStatus {
        PAUSED,
        NOT_PAUSED
    }

    MintStatus public mintStatus = MintStatus.NOT_PAUSED;

    modifier notPaused() {
        require(mintStatus == MintStatus.NOT_PAUSED, "MINT_PAUSED");
        _;
    }

    function pauseMint() external onlyOwner {
        mintStatus = MintStatus.PAUSED;
    }

    function unpauseMint() external onlyOwner {
        mintStatus = MintStatus.NOT_PAUSED;
    }

    function safeMint(string memory uri) external notPaused {
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
