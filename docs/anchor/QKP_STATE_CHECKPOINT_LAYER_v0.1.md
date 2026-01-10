# QKP State Checkpoint Layer — v0.1

Status: Normative  
Scope: Anchor Layer  
Chain: Ethereum L1  

---

## 1. Purpose

The QKP State Checkpoint Layer anchors the **global state of the QuantumKey Protocol** into Ethereum.

It provides a cryptographically immutable timeline of:
- what was accepted
- when it was accepted
- by whom it was published

This transforms QKP from a collection of intentions into a verifiable history.

---

## 2. Ontological Role

The State Checkpoint is the **ledger of reality** for QKP.

Intents describe what should happen.  
Checkpoints record what did happen.

Everything that claims to be true in QKP must eventually be reflected in a checkpoint.

---

## 3. What a Checkpoint Is

A QKP State Checkpoint is a commitment to a full protocol state.

It is represented by a single hash:

state_root = keccak256( canonical_serialization_of_all_protocol_state )

This includes:
- executed intentions
- accepted receipts
- reputation scores
- disputes
- penalties
- governance decisions

Only the hash is stored on Ethereum.  
The full state lives off-chain and can be reconstructed.

---

## 4. Checkpoint Record Format

A QKP State Checkpoint has the following canonical fields:

QKP-STATE  
version = 0.1  
state_root = keccak256 hash  
publisher_qkp_id = did:qkp:…  
previous_state_root = keccak256 hash or null  
timestamp = ISO-8601  
signature = cryptographic signature  

---

## 5. Chain of States

Each checkpoint links to the previous one.

This creates an immutable chain:

state_0  
→ state_1  
→ state_2  
→ state_3  

Any fork, tampering, or rewrite becomes mathematically visible.

---

## 6. Who May Publish

Only identities authorized by QKP governance rules may publish checkpoints.

Authorization is itself expressed as QKP intentions.

This allows:
- validators
- federations
- governance collectives

to act as publishers.

---

## 7. What Ethereum Stores

Ethereum stores only:

state_root  
publisher  
timestamp  

Nothing else.

Ethereum becomes the neutral timestamped witness.

---

## 8. Dispute Model

Any party may challenge a checkpoint by submitting:
- an alternative state_root
- a proof of inconsistency

Disputes are resolved by replaying:
- intentions
- executions
- receipts

The Ethereum anchor decides which state is canonical.

---

## 9. Immutability Guarantee

Once a checkpoint is anchored:
- it cannot be erased
- it cannot be reordered
- it cannot be falsified

It becomes a fossil in the blockchain.

---

## 10. Relationship to Intentions

Intentions say:
“I commit to X.”

Checkpoints say:
“X happened (or did not happen).”

Together they form:
promise → action → proof → history

---

## 11. Why This Matters

This makes QKP:
- auditable
- litigable
- replayable
- scientifically verifiable

No narrative is needed.  
Only hashes.

---

## 12. Final Statement

The State Checkpoint Layer turns QuantumKey Protocol into a **time machine of truth**.

Nothing important can ever be forgotten again.
