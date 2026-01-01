# SEMANTIC_SIGNATURE v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the Semantic Signature mechanism used by the QuantumKey Protocol (QKP).

A Semantic Signature transforms declared intent into a verifiable, bounded, and auditable object, enabling independent validators to evaluate meaning without altering facts.

## 1. Design Principles

- Semantics are evaluated, not enforced  
- Meaning is bounded by declared context  
- Validation is explicit and attributable  
- Divergence is allowed but visible  
- Semantics never rewrite history  

## 2. Definition

A Semantic Signature is a cryptographically bound evaluation of an intent’s declared meaning, produced by a semantic validator under a specific policy and version.

It does not modify the intent.
It produces an attestation about the intent.

## 3. Components of a Semantic Signature

Each Semantic Signature MUST include:

- semantic_signature_id  
- intent_id  
- semantic_hash  
- validator_id  
- validator_version  
- policy_id  
- evaluation_result  
- confidence_score  
- evidence_bundle  
- issued_at  
- expires_at  
- signature  
- signature_scheme  

## 4. Evaluation Result Types

evaluation_result MUST be one of:

- ACCEPT  
- REJECT  
- CONDITIONAL  
- UNDETERMINED  

Policies MAY define how each result is treated.

## 5. Confidence Score

confidence_score is a normalized value between 0.0 and 1.0.

It represents the validator’s confidence in the evaluation, not truth itself.

Policies MAY enforce minimum confidence thresholds.

## 6. Evidence Bundle

The evidence_bundle MAY include:

- normalized intent representation  
- rule matches  
- policy clauses triggered  
- external references (hashes only)  
- reasoning trace (optional, non-normative)  

Evidence MUST NOT alter the intent or semantic_hash.

## 7. Binding Rules

A valid Semantic Signature MUST cryptographically bind:

- intent_id  
- semantic_hash  
- validator_id  
- policy_id  
- issued_at / expires_at  

Any mismatch invalidates the signature.

## 8. Validator Requirements

Semantic validators MUST:

- declare validator_id and version  
- publish supported policy_ids  
- use deterministic evaluation for identical inputs  
- sign all outputs  
- expose validation metadata for audit  

## 9. Divergence and Quorum

Multiple Semantic Signatures MAY exist for the same intent.

Policies MAY require:
- single trusted validator  
- N-of-M validator quorum  
- weighted confidence aggregation  

Divergence is a feature, not a failure.

## 10. Security Considerations

- Semantic validation is a high-value attack surface  
- Validator capture must be assumed possible  
- Quorum and diversity reduce systemic risk  
- Receipts MUST reference Semantic Signatures explicitly  

## 11. What Semantic Signatures Do Not Do

- They do not enforce execution  
- They do not define morality  
- They do not guarantee consensus  
- They do not replace human judgment  

## 12. Relationship to AcceptanceReceipt

AcceptanceReceipt MAY reference one or more Semantic Signatures.

Acceptance is a trust decision.
Semantic evaluation is an input to that decision.

## 13. Versioning and Evolution

Semantic Signature format is stable for v0.1.

Future versions MAY:
- extend evidence formats  
- add new evaluation_result types  
- define cross-policy compatibility  

Backward verification MUST remain possible.

## 14. Linked Specifications

- QIE_MINIMAL_PROFILE_v0.1.md  
- THREAT_MODEL_v0.1.md  
- protocol-spec.md
