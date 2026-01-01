# ACCEPTANCE_RECEIPT v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the Acceptance Receipt mechanism of the QuantumKey Protocol (QKP).

An Acceptance Receipt is a cryptographically signed trust decision stating that a specific intent, under a specific context and policy, has been accepted, rejected, or conditionally accepted.

Acceptance never alters facts.
It records responsibility.

## 1. Core Concept

- Intent expresses *what is requested*  
- Semantic Signatures evaluate *what it means*  
- Acceptance Receipts declare *what is trusted*  

Acceptance is an explicit, attributable decision.

## 2. Definition

An Acceptance Receipt is an immutable, signed artifact that binds:

- an intent  
- one or more semantic evaluations  
- a trust policy  
- a decision  
- an accountable issuer  

## 3. Mandatory Fields

Every Acceptance Receipt MUST include:

- receipt_id  
- intent_id  
- semantic_hash  
- issuer_did  
- issuer_role  
- policy_id  
- decision  
- decision_reason  
- referenced_semantic_signatures  
- execution_mode  
- issued_at  
- expires_at  
- signature  
- signature_scheme  

## 4. Decision Types

decision MUST be one of:

- ACCEPT  
- REJECT  
- CONDITIONAL  

Policies MAY restrict which decisions are allowed.

## 5. Decision Reason

decision_reason is a human-readable explanation of the trust decision.

It is non-normative but auditable.

## 6. Binding Rules

A valid Acceptance Receipt MUST cryptographically bind:

- intent_id  
- semantic_hash  
- policy_id  
- execution_mode  
- issuer_did  
- issued_at / expires_at  

Any mismatch invalidates the receipt.

## 7. Relationship to Semantic Signatures

Acceptance Receipts MAY reference one or more Semantic Signatures.

Policies MAY define:
- minimum number of signatures  
- required validator diversity  
- confidence thresholds  

Acceptance is independent of consensus.

## 8. Execution Mode Enforcement

Acceptance Receipts MUST explicitly declare the execution_mode:

- SIMULATION  
- SOFT  
- STRICT  

Receipts issued for non-STRICT modes MUST NOT be reused for STRICT execution.

## 9. Expiration and Revocation

- expires_at defines the validity window  
- expired receipts MUST be rejected  
- revocation receipts MAY invalidate prior acceptance  

Revocation MUST itself be signed and attributable.

## 10. Security Properties

Acceptance Receipts provide:

- Explicit accountability  
- Non-repudiation of trust decisions  
- Verifiable policy application  
- Audit-friendly evidence  

They do not guarantee correctness of execution.

## 11. Failure and Dispute Handling

Disputes MAY arise due to:
- policy changes  
- new evidence  
- compromised keys  

QKP supports:
- multiple competing receipts  
- restorative governance processes  
- explicit supersession  

## 12. What Acceptance Receipts Do Not Do

- They do not enforce execution  
- They do not prove moral correctness  
- They do not eliminate human responsibility  

## 13. Versioning and Evolution

Acceptance Receipt format is stable for v0.1.

Future versions MAY extend:
- decision metadata  
- revocation mechanisms  
- cross-policy interoperability  

Backward verification MUST remain possible.

## 14. Linked Specifications

- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- THREAT_MODEL_v0.1.md  
- protocol-spec.md
