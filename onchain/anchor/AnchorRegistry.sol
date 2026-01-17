// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
 QuantumKey Protocol — Genesis Anchor Registry
 Write-once, immutable reference to the QKP Genesis Hash
*/

contract AnchorRegistry {
    bytes32 public immutable genesisHash;

    event GenesisAnchored(bytes32 genesisHash);

    constructor(bytes32 _genesisHash) {
        genesisHash = _genesisHash;
        emit GenesisAnchored(_genesisHash);
    }
}
