# REFERENCE_FLOW v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the canonical reference flow of the QuantumKey Protocol (QKP).

The reference flow describes the minimal, end-to-end lifecycle of an intent:
from declaration to execution and audit, in a way that is deterministic, auditable, and implementation-independent.

This flow is normative for v0.1.

## 1. High-Level Flow Overview

The QKP reference flow follows five sequential phases:

1. Intent Declaration  
2. Semantic Evaluation  
3. Trust Decision  
4. Execution  
5. Audit and Verification  

Each phase produces cryptographically verifiable artifacts.

## 2. Phase 1 — Intent Declaration

### Inputs
- Actor (HID, AID, CID, or SID)  
- Intent definition  
- Execution context  

### Actions
- Construct QIE according to QIE_MINIMAL_PROFILE  
- Canonicalize intent payload  
- Compute semantic_hash  
- Sign QIE  

### Outputs
- Quantum Intent Envelope (QIE)

### Guarantees
- Authenticity of issuer  
- Integrity of declared intent  
- Replay resistance (TTL + nonce)

## 3. Phase 2 — Semantic Evaluation

### Inputs
- QIE  
- Semantic policy  
- Semantic validator  

### Actions
- Resolve issuer identity  
- Validate semantic_hash  
- Evaluate intent under declared policy  
- Produce Semantic Signature  

### Outputs
- One or more Semantic Signatures

### Guarantees
- Bounded interpretation  
- Explicit attribution of evaluation  
- Visible divergence between validators

## 4. Phase 3 — Trust Decision

### Inputs
- QIE  
- Semantic Signatures  
- Trust policy  

### Actions
- Apply trust policy  
- Decide ACCEPT, REJECT, or CONDITIONAL  
- Issue Acceptance Receipt  

### Outputs
- Acceptance Receipt

### Guarantees
- Explicit accountability  
- Policy-bound trust decision  
- Non-repudiation

## 5. Phase 4 — Execution

### Inputs
- QIE  
- Acceptance Receipt  
- Execution environment  

### Actions
- Verify Acceptance Receipt  
- Verify execution_mode  
- Execute intent if allowed  

### Outputs
- Execution result (out of scope for protocol)

### Guarantees
- Mode-aware execution  
- Prevention of unauthorized escalation  
- Traceability to trust decision

## 6. Phase 5 — Audit and Verification

### Inputs
- QIE  
- Semantic Signatures  
- Acceptance Receipts  

### Actions
- Recompute semantic_hash  
- Verify signatures  
- Verify causal links  
- Verify policy application  

### Outputs
- Audit report (external to protocol)

### Guarantees
- End-to-end verifiability  
- Deterministic replay of decisions  
- Independent third-party audit

## 7. Error Handling and Failure Modes

At any phase, the flow MUST halt if:

- Cryptographic verification fails  
- TTL or expiration is violated  
- Policy requirements are not met  

Failures MUST be explicit and auditable.

## 8. Causal Linking Rules

Each artifact SHOULD reference its parent:

- Semantic Signature → QIE  
- Acceptance Receipt → QIE + Semantic Signature(s)  

This forms a verifiable causal graph.

## 9. Determinism Requirements

For identical inputs:
- QIE canonicalization MUST be deterministic  
- semantic_hash MUST be identical  
- Policy evaluation MUST be reproducible  

Non-determinism MUST be explicitly declared.

## 10. Multi-Receipt and Conflict Handling

Multiple Acceptance Receipts MAY exist for the same intent.

QKP allows:
- Competing trust decisions  
- Parallel policy domains  
- Restorative supersession  

No global consensus is required.

## 11. Security Properties of the Reference Flow

The reference flow ensures:

- Separation of facts and trust  
- Explicit responsibility at each stage  
- Minimal blast radius on failure  
- Auditability without central authority  

## 12. What the Reference Flow Does Not Enforce

- Correctness of real-world execution  
- Moral or ethical validity  
- Consensus between organizations  

These remain external concerns.

## 13. Versioning

This reference flow is canonical for v0.1.

Future versions MAY:
- Extend phases  
- Add optional enforcement hooks  
- Support additional execution environments  

Backward auditability MUST remain possible.

## 14. Linked Specifications

- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- ACCEPTANCE_RECEIPT_v0.1.md  
- THREAT_MODEL_v0.1.md  
- protocol-spec.md
