# CONFORMANCE_MATRIX v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the conformance requirements for implementations of the QuantumKey Protocol (QKP).

It specifies what an implementation MUST, SHOULD, and MAY support in order to be considered QKP-compliant at version v0.1.

Conformance is evaluated at the protocol level, not at the application level.

## 1. Conformance Levels

QKP defines a single baseline conformance level for v0.1:

- QKP-Core v0.1

Optional extensions MAY exist but MUST NOT break baseline verification.

## 2. Normative Language

The keywords MUST, SHOULD, and MAY are to be interpreted as described in RFC 2119.

## 3. QIE Conformance

### 3.1 QIE Construction

- MUST implement QIE_MINIMAL_PROFILE_v0.1  
- MUST include TTL and nonce  
- MUST canonicalize intent before hashing  
- MUST compute semantic_hash deterministically  
- SHOULD include parent_intent_id when applicable  
- MAY include additional metadata fields  

### 3.2 QIE Validation

- MUST reject expired QIEs  
- MUST reject invalid signatures  
- MUST reject mismatched semantic_hash  
- MUST reject reused nonce within the same context  

## 4. Identity Conformance

- MUST support DID resolution for issuer_did  
- MUST support issuer_type (HID, AID, CID, SID)  
- MUST verify proof-of-control for issuer_did  
- SHOULD support AID TTL and rotation  
- MAY support identity revocation receipts  

## 5. Semantic Signature Conformance

- MUST support SEMANTIC_SIGNATURE_v0.1  
- MUST bind semantic_hash and intent_id  
- MUST declare validator_id and version  
- MUST sign semantic evaluation output  
- SHOULD expose evidence_bundle  
- MAY support quorum-based validation  

## 6. Acceptance Receipt Conformance

- MUST support ACCEPTANCE_RECEIPT_v0.1  
- MUST bind intent_id, semantic_hash, policy_id  
- MUST declare execution_mode  
- MUST sign trust decisions  
- SHOULD support receipt expiration  
- MAY support receipt revocation  

## 7. Execution Mode Conformance

- MUST recognize SIMULATION, SOFT, and STRICT  
- MUST enforce execution_mode restrictions  
- MUST prevent reuse of non-STRICT receipts for STRICT execution  
- SHOULD log mode violations explicitly  

## 8. Reference Flow Conformance

- MUST implement all phases of REFERENCE_FLOW_v0.1  
- MUST halt execution on verification failure  
- MUST preserve causal linking between artifacts  
- SHOULD support independent third-party audit replay  

## 9. Auditability Conformance

- MUST allow recomputation of semantic_hash  
- MUST allow verification of all signatures  
- MUST preserve artifact immutability  
- SHOULD expose artifacts in portable formats  

## 10. Failure Handling Conformance

- MUST fail explicitly on invalid artifacts  
- MUST surface verification errors  
- SHOULD distinguish validation failure from policy rejection  
- MAY support restorative supersession flows  

## 11. Non-Goals

The following are explicitly out of scope for QKP conformance:

- Enforcement of real-world execution  
- Determination of moral or ethical correctness  
- Global consensus on trust decisions  
- Human uniqueness verification  

## 12. Conformance Declaration

An implementation MAY declare itself:

"QKP-Core v0.1 Compliant"

only if all MUST requirements in this document are satisfied.

## 13. Linked Specifications

- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- ACCEPTANCE_RECEIPT_v0.1.md  
- REFERENCE_FLOW_v0.1.md  
- THREAT_MODEL_v0.1.md  
- protocol-spec.md
