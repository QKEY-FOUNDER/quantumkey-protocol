# QuantumKey Identity & Cryptography Specification v0.1  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  
Version: 0.1  
Status: Draft (Identity & Trust Layer Specification)

---

## 1. Overview

The QuantumKey Identity Layer defines the primitives that anchor human intention, AI agents, and system entities into a coherent, verifiable identity framework.

Identity in QuantumKey is based on three principles:

1. **Continuity of Intent** — identity preserves meaning across time.  
2. **Verifiable Uniqueness** — each entity has a cryptographically provable anchor.  
3. **Privacy-Preserving Transparency** — the system reveals meaning without exposing the human.

The Identity Layer combines:

- decentralized identifiers (DIDs)  
- capability mappings  
- proof-of-intent cryptography  
- semantic signatures  
- quantum-resilient hashing  

It forms the backbone of trust for the entire protocol.

---

## 2. Identity Types

QuantumKey defines four classes of identities:

### 2.1 Human Identity (HID)
A self-sovereign identity representing a human participant.

Properties:

HID = { did: DID_QKEY, recovery_set: [...], intent_profile_hash: bytes32, capabilities: string[] }

Used for:

- governance  
- intent submission  
- delegation to agents  

---

### 2.2 AI Agent Identity (AID)

An identity assigned to an autonomous or semi-autonomous agent acting on behalf of a human.

AID = { did: DID_QKEY, controller: HID, allowed_actions: string[], model_hash: bytes32, ttl_ms: number }

Ensures bounded autonomy and accountability.

---

### 2.3 Contract Identity (CID)

Represents smart contracts within the protocol.

CID = { did: DID_QKEY, contract_address: string, capabilities: string[] }

---

### 2.4 System Identity (SID)

Reserved for protocol-level components:

- coordinators  
- validators  
- registries  
- semantic verifiers

SID = { did: DID_QKEY, role: string, permissions: string[] }

---

## 3. DID_QKEY Format

QuantumKey introduces a minimal yet expressive DID format.

did:qkey:<32-byte-identifier>

Examples:

did:qkey:z8f3ab91c32e90cd0182f... did:qkey:agent-logic-07 did:qkey:contract-ff1298...

### Identifier generation avoids:

- correlation  
- fingerprint bias  
- prediction  

The DID registry is decentralized and resolves via the protocol’s state tree.

---

## 4. Key Types (Quantum-Resilient)

QuantumKey supports dual cryptographic families:

### 4.1 Classical Ed25519  
Used for standard operations.

### 4.2 BLS12-381  
Used for batch verification and multi-signature aggregation.

### 4.3 Quantum-Resilient Hashing  

All identity anchors use:

- **SHA3-512**  
- **Blake3**  
- **Post-Quantum optional: Falcon / Dilithium (planned)**

Hashing functions ensure long-term survivability in a post-quantum environment.

---

## 5. Capability Mapping

Every identity includes a set of **capability tags** defining what it can do.

Example:

capabilities = [ "govern.vote", "intent.submit", "agent.delegate", "contract.call", "state.read" ]

Validators enforce capabilities at execution time.

This prevents privilege escalation and enforces meaning continuity.

---

## 6. Intent Profile

Each entity maintains an **Intent Profile Hash**, representing the stable structure of its behavioral pattern.

intent_profile_hash = hash({ historical_intents: [...semantic hashes...], trust_score: number, preferred_agents: [...], policy_constraints: {...} })

This allows:

- adaptive agent delegation  
- anomaly detection  
- personalized governance weight (not based on money!)  

The profile hash preserves privacy while enabling pattern recognition.

---

## 7. Proof-of-Intent Cryptography

QuantumKey introduces a novel primitive:

## **Proof of Intent (PoI)**

PoI binds:

- **identity**  
- **intent meaning**  
- **semantic structure**  
- **cryptographic signature**

into a single artifact.

This ensures:

- the sender meant what they encoded  
- the AI agent cannot alter meaning  
- validators can confirm semantic integrity  

PoI is generated as:

PoI = hash( intent_body + semantic_hash + sender_did )

---

## 8. Multi-Layer Signatures

QIE messages use **two distinct but complementary signatures**:

### 8.1 Cryptographic Signature

sig_crypto = sign_with(sk, qie_hash)

### 8.2 Semantic Signature

Produced by the AI verification node:

sig_semantic = sign_with(model_sk, semantic_hash)

The dual-layer approach ensures:

- authenticity  
- intent integrity  
- meaning preservation  

It prevents:

- adversarial AI drift  
- malicious agents  
- contradictory intents  

---

## 9. Recovery Architecture

Human identities support multi-party recovery:

recovery_set = { guardians: [ DID_QKEY... ], threshold: number }

Supports:

- wallet loss  
- key rotation  
- social recovery  

AI agents never use recovery — they simply expire (TTL).

---

## 10. Identity Lifecycle

### 10.1 HID Lifecycle

1. Create DID  
2. Initialize recovery set  
3. Bind intent profile  
4. Delegate optional agents  
5. Operate  
6. Rotate keys  
7. Archive (death or deactivation)

### 10.2 AID Lifecycle

1. Created by human  
2. Registered with scope  
3. Uses TTL  
4. Expires or revoked  

### 10.3 CID Lifecycle

1. Deployed  
2. Assigned DID  
3. Updated via upgrades  
4. Archived  

### 10.4 SID Lifecycle

Constant, system-defined.

---

## 11. Status

Identity & Cryptography v0.1 establishes:

- the DID system  
- identity taxonomy  
- PoI (Proof of Intent) primitive  
- quantum-resilient cryptography  
- capability mapping  
- lifecycle rules  

This is the foundation of trust in the QuantumKey universe.

Future versions (0.2–1.0) will expand:

- PQ signature schemes  
- zero-knowledge intent proofs  
- multi-agent trust propagation  
- decentralized biometrics (optional)
