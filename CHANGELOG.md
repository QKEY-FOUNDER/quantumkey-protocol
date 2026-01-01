# CHANGELOG — QuantumKey Protocol (QKP)

All notable changes to the QuantumKey Protocol (QKP) will be documented in this file.

The format follows a structured, protocol-centric approach rather than feature marketing.
Changes are grouped by **protocol meaning**, not implementation detail.

---

## [v0.1] — Baseline Freeze  
**Status:** Frozen  
**Date:** 2025-01-XX  

This release establishes the **first frozen baseline** of the QuantumKey Protocol.

It defines the minimal, complete, and verifiable protocol surface required for:
- intent declaration
- semantic evaluation
- explicit trust decisions
- mode-aware execution
- independent audit

No breaking changes are permitted within this baseline.

---

### Added — Normative Protocol Artifacts

- THREAT_MODEL_v0.1.md  
  Formal threat model defining adversaries, attack surfaces, mitigations, and non-goals.

- QIE_MINIMAL_PROFILE_v0.1.md  
  Minimal mandatory profile for Quantum Intent Envelopes, implementable in one day.

- SEMANTIC_SIGNATURE_v0.1.md  
  Formal definition of bounded, attributable semantic evaluation.

- ACCEPTANCE_RECEIPT_v0.1.md  
  Explicit, signed trust decision artifact separating facts from acceptance.

- REFERENCE_FLOW_v0.1.md  
  Canonical end-to-end protocol lifecycle: intent → semantic → trust → execution → audit.

- CONFORMANCE_MATRIX_v0.1.md  
  MUST / SHOULD / MAY requirements for QKP-Core v0.1 compliance.

- SECURITY_INVARIANTS_v0.1.md  
  Non-negotiable safety properties that MUST hold across all implementations.

- GLOSSARY.md  
  Canonical vocabulary defining protocol terms and eliminating semantic ambiguity.

- BASELINE_V0.1.md  
  Formal declaration of what constitutes QKP v0.1 and what is out of scope.

---

### Defined — Protocol Guarantees (v0.1)

- Cryptographically verifiable intent immutability  
- Explicit attribution of actions and trust decisions  
- Replay resistance via TTL, nonce, and context binding  
- Separation of facts, semantics, and trust  
- Mode-aware execution (SIMULATION / SOFT / STRICT)  
- Independent post-hoc audit without centralized authority  

---

### Explicit Non-Guarantees

QKP v0.1 does NOT guarantee:

- Moral or ethical correctness  
- Legal compliance  
- Human uniqueness  
- Physical-world execution correctness  
- Absence of coercion or social attack  

These concerns are intentionally external to the protocol.

---

### Compatibility and Upgrade Policy

- v0.1 is frozen and immutable  
- Future versions MUST preserve backward auditability  
- Security invariants MUST NOT be weakened  
- Extensions MUST be additive and explicitly versioned  

---

## [Unreleased]

Planned for future versions (not part of v0.1):

- Protocol version v0.2 (extensions only)  
- Governance evolution beyond baseline snapshot  
- Optional enforcement hooks  
- Cross-policy and cross-domain interoperability  
- Formalization of human uniqueness mechanisms  

No timelines are committed.

---

Trust is no longer implicit.  
It is versioned.
