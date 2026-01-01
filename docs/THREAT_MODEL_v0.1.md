# THREAT_MODEL v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the threat model of the QuantumKey Protocol (QKP): what can go wrong, what the protocol proves, what it does not prove, and which mitigation and recovery paths are expected.

QKP is a protocol for verifiable accountability: it makes intent, execution, and trust decisions cryptographically provable in autonomous and federated systems.

## 1. Core Security Principles

- Verifiability over trust  
- Structure over interpretation  
- Auditability without surveillance  
- Federation without centralization  

## 2. Security Assets

- A1. Integrity of the Quantum Intent Envelope (QIE)  
- A2. Authenticity of declared intent and signatures  
- A3. Verifiable causality between actions  
- A4. Explicit trust decisions (AcceptanceReceipt)  
- A5. Replay and fork resistance  
- A6. Blast-radius minimization  

## 3. Adversary Model

- T1. External attacker without valid keys  
- T2. Insider with valid but misused keys  
- T3. Malicious or compromised agent (AID)  
- T4. Sybil coalition  
- T5. Policy manipulation attacker  
- T6. Infrastructure attacker (DoS, censorship)  
- T7. Legal or coercive actor  

## 4. Attack Surfaces

- S1. QIE construction and canonicalization  
- S2. Key management and rotation  
- S3. Semantic validation and semantic_hash  
- S4. AcceptanceReceipt and attestation reuse  
- S5. Causal graph manipulation  
- S6. Execution modes (SIMULATION / SOFT / STRICT)  
- S7. Federated policy divergence  
- S8. Transport and storage layers  

## 5. Threats and Mitigations

### TM-01 Replay of QIE

**Threat:** Reuse of a valid QIE outside its original context.  

**Mitigation:**
- Mandatory TTL and nonce  
- Explicit causal binding  
- Receipt binding to semantic_hash and context  

### TM-02 Canonicalization Ambiguity

**Threat:** Different serializations produce different hashes.  

**Mitigation:**
- Deterministic canonical encoding  
- semantic_hash computed post-normalization  

### TM-03 Identity Spoofing

**Threat:** Fake HID/AID/CID identities.  

**Mitigation:**
- DID resolution and proof-of-control  
- AID TTL and revocation receipts  

### TM-04 Key Compromise

**Threat:** Valid signatures from stolen keys.  

**Mitigation:**
- Short-lived agent keys  
- Multisig for high-risk intents  
- Explicit key-compromise events  

### TM-05 Mode Downgrade Abuse

**Threat:** Using SIMULATION or SOFT to bypass enforcement.  

**Mitigation:**
- Policy-declared mandatory STRICT intents  
- Execution mode explicitly recorded in receipts  

### TM-06 Semantic Validator Divergence

**Threat:** Conflicting semantic evaluations.  

**Mitigation:**
- Formal semantic signature definition  
- Validator ID, version, and evidence bundle  
- Optional quorum validation  

### TM-07 Receipt Reuse or Forgery

**Threat:** Receipts reused in unrelated contexts.  

**Mitigation:**
- Binding to semantic_hash, policy_id, issuer_did, TTL  
- Mandatory receipt signature  

### TM-08 Causal Graph Injection

**Threat:** Fake authorization or parent links.  

**Mitigation:**
- Signed causal references  
- Existence and validity checks  

### TM-09 DoS and Censorship

**Threat:** Blocking publication of intents or receipts.  

**Mitigation:**
- Redundant transport and storage  
- Delayed publication as a first-class feature  

### TM-10 Sybil Capture

**Threat:** Multiple fake human identities capturing trust.  

**Mitigation:**
- Human uniqueness mechanisms outside cryptography  
- Community audit and restorative governance  

## 6. What QKP Proves vs Does Not Prove

**QKP proves:**
- Authenticity and integrity of intents and receipts  
- Verifiable causal chains  
- Explicit trust acceptance under declared policies  

**QKP does not prove:**
- Moral correctness of intent  
- Physical-world execution  
- Human uniqueness or freedom from coercion  
- Strong semantic understanding without formal definition  

## 7. Normative Security Requirements (v0.1)

- TTL and context binding are mandatory  
- Receipts must bind semantic_hash, policy_id, issuer_did, TTL  
- STRICT mode required for critical intents  
- Short-lived agent identities (AID)  

## 8. Linked Roadmap Artifacts

- QIE Minimal Profile  
- Semantic Signature Specification  
- Canonical End-to-End Demo
