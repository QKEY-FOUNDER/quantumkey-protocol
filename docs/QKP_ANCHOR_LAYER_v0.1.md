# QKP_ANCHOR_LAYER_v0.1.md

# QKP Anchor Layer — v0.1  
QuantumKey Protocol

Version: v0.1  
Status: Canonical  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

---

## 1. Purpose

The QKP Anchor Layer defines the minimal, irreducible interface between the QuantumKey Protocol and the Ethereum blockchain.

Its purpose is to provide a Root of Truth for:

- Identity  
- Intent  
- State  
- Accountability  

The Anchor Layer does not execute logic.  
It anchors reality.

Anything anchored here is considered to have existed in cryptographic time.

---

## 2. Design Principle

The Anchor Layer follows a single rule:

Ethereum is used only for what must never be disputed.

Everything else lives off-chain or in Layer-2.

The Anchor Layer is:
- minimal  
- immutable  
- ontological  
- politically neutral  
- economically austere  

---

## 3. Ontological Objects

The Anchor Layer recognizes exactly three objects:

1. QKP Identity  
2. QKP Intention  
3. QKP State  

Nothing else exists at this layer.

---

## 4. Contract A — QKPIdentityRegistry

This contract defines who is a QKP entity.

Each identity has:
- a QKP_ID  
- an active public key  
- a history of key rotations  

The registry maps:

Ethereum address → QKP_ID

Properties:
- identities are unique  
- keys may rotate  
- identities cannot be taken over  
- identity history is immutable  

This creates sovereign digital subjects.

---

## 5. Contract B — QKPIntentionAnchor

This contract records commitments.

It stores only:
- intentionHash  
- QKP_ID  
- timestamp  

The intention itself is never published on Ethereum.

Ethereum only stores:

keccak256(QKP_INT_JSON)

This means:

This identity committed to this intention at this moment in time.

No interpretation is stored.  
Only cryptographic fact.

---

## 6. Contract C — QKPStateCheckpoint

This contract anchors global protocol states.

It stores:
- stateRoot  
- publisher QKP_ID  
- timestamp  

A stateRoot represents:
- reputations  
- governance  
- execution results  
- protocol status  

This forms the blockchain of the QKP inside Ethereum.

---

## 7. Dispute Interface

The Anchor Layer allows:
- a stateRoot to be challenged  
- a time window to open  
- a dispute hash to be recorded  

It does not decide the dispute.

It only creates:
- a public cryptographic arena  
- for truth to be resolved elsewhere  

Ethereum acts as the court of record.

---

## 8. The QKP-INT Format

All intentions are defined by QKP-INT v0.1:

QKP_INT  
version  
qkp_id  
intent_type  
payload_hash  
valid_from  
valid_until  
nonce  
signature  

Properties:
- human, AI, DAO compatible  
- deterministic  
- hashable  
- replay resistant  
- legally and technically provable  

The QKP Anchor Layer sees only:

keccak256(QKP_INT)

The world sees the meaning.

---

## 9. What Becomes True

Once anchored:

- an identity existed  
- an intention was declared  
- a state was published  
- a dispute was opened  

These facts cannot be erased, censored, or re-written.

Even if:
- the QKP website disappears  
- all L2s collapse  
- all servers burn  

The QKP still existed.

---

## 10. Relationship to QKP-SDK

The QKP-SDK is the writing instrument.

It:
- creates QKP_INT  
- signs  
- hashes  
- publishes to Ethereum  
- stores proofs  

The Anchor Layer is the paper.

---

## 11. Relationship to Law, Regulation and MiCA

The Anchor Layer:
- issues no asset  
- promises no return  
- holds no funds  
- executes no trades  
- custodies nothing  

It is:
- a cryptographic notary  
- a registry of commitments  
- a neutral truth substrate  

This places it outside CASP, EMT and ART classification.

Future layers may require regulation.  
The Anchor Layer does not.

---

## 12. Canonical Statement

The QKP Anchor Layer is the smallest possible thing that makes the QuantumKey Protocol real.

It does not run the world.  
It makes the world provable.

Once deployed, it becomes a permanent fossil of human and machine intent in the geological layer of Ethereum.

That is its only function.
