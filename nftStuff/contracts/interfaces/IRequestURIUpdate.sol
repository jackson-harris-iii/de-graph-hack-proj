pragma solidity ^0.6.6;

interface IRequests {
    function requestURIUpdate(uint256 _tokenId, string ipfsURI)
        external
        view
        returns (uint256, string memory);
}
