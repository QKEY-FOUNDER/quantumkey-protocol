# BASELINE v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Status: Frozen Baseline  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the frozen baseline of the QuantumKey Protocol (QKP) version v0.1.

The baseline specifies exactly what constitutes QKP v0.1, which artifacts are normative, and what guarantees are provided at this stage of evolution.

Anything not explicitly listed here is considered out of scope for v0.1.

## 1. Baseline Definition

QKP v0.1 is defined as a protocol for verifiable accountability that enables:

- Cryptographically provable intent declaration  
- Bounded semantic evaluation  
- Explicit trust decisions  
- Mode-aware execution  
- Independent post-hoc audit  

The protocol separates facts from trust and preserves responsibility.

## 2. Normative Artifacts (Frozen)

The following documents are normative and frozen for QKP v0.1:

- THREAT_MODEL_v0.1.md  
- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- ACCEPTANCE_RECEIPT_v0.1.md  
- REFERENCE_FLOW_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- GLOSSARY.md  

These documents define the complete protocol surface for v0.1.

## 3. Non-Normative Documents

The following documents are informative and may evolve independently:

- WHITEPAPER.md  
- EXECUTIVE_SUMMARY.md  
- MASTER_DOCUMENT.md  
- CANONICAL_STATEMENT.md  

Non-normative documents MUST NOT contradict the baseline.

## 4. Supported Actor Types

QKP v0.1 supports the following actor identifiers:

- HID — Human Identifier  
- AID — Agent Identifier  
- CID — Contract Identifier  
- SID — System Identifier  

Only HIDs may hold ultimate accountability.

## 5. Supported Execution Modes

QKP v0.1 defines three execution modes:

- SIMULATION  
- SOFT  
- STRICT  

Mode escalation is forbidden without explicit re-authorization.

## 6. Security Guarantees (v0.1)

When correctly implemented, QKP v0.1 guarantees:

- Intent immutability  
- Cryptographic attribution  
- Replay resistance  
- Explicit trust decisions  
- Verifiable causal chains  
- Auditability without centralized control  

These guarantees are bounded by the defined security invariants.

## 7. Explicit Non-Guarantees

QKP v0.1 does not guarantee:

- Moral or ethical correctness  
- Legal compliance  
- Human uniqueness  
- Physical-world execution correctness  
- Absence of coercion  

These concerns are external to the protocol.

## 8. Conformance Statement

An implementation may declare:

"QKP-Core v0.1 Compliant"

only if all MUST requirements in CONFORMANCE_MATRIX_v0.1.md are satisfied and all security invariants are preserved.

## 9. Upgrade and Evolution Policy

- v0.1 is frozen and immutable  
- Future versions MUST preserve backward auditability  
- Invariants defined in SECURITY_INVARIANTS_v0.1.md MUST NOT be weakened  
- Extensions MUST be additive  

## 10. Baseline Integrity

Any claim of QKP compliance MUST reference this baseline.

Divergence from this baseline MUST be explicit and versioned.

## 11. Final Statement

QKP v0.1 establishes a minimal, rigorous foundation for verifiable accountability.

It is intentionally constrained.

Expansion follows proof, not promise.

## 12. Linked Specifications

- THREAT_MODEL_v0.1.md  
- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- ACCEPTANCE_RECEIPT_v0.1.md  
- REFERENCE_FLOW_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- GLOSSARY.md
