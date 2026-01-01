# Examples — QuantumKey Protocol (QKP)

Baseline: v0.1  
Purpose: Canonical, normative examples for implementers and auditors

This directory contains the canonical example set for QKP Baseline v0.1.

These examples are designed to be:
- copy-paste friendly
- independently auditable
- implementation-agnostic

They demonstrate the end-to-end accountability flow:

Intent → Semantics → Trust → Audit

No execution or enforcement is performed.

---

## Canonical Example Set (Baseline v0.1)

1. QIE Example (Intent Declaration)  
   `QIE_EXAMPLE.md`

2. Semantic Signature Example (Meaning Evaluation)  
   `SEMANTIC_SIGNATURE_EXAMPLE.md`

3. Acceptance Receipt Example (Trust Decision)  
   `ACCEPTANCE_RECEIPT_EXAMPLE.md`

4. End-to-End Flow Example (Complete Chain)  
   `END_TO_END_FLOW_EXAMPLE.md`

---

## Recommended Reading Order

If you are implementing QKP:

1. `QIE_EXAMPLE.md`  
2. `SEMANTIC_SIGNATURE_EXAMPLE.md`  
3. `ACCEPTANCE_RECEIPT_EXAMPLE.md`  
4. `END_TO_END_FLOW_EXAMPLE.md`

If you are auditing QKP:

1. `END_TO_END_FLOW_EXAMPLE.md`  
2. `ACCEPTANCE_RECEIPT_EXAMPLE.md`  
3. `SEMANTIC_SIGNATURE_EXAMPLE.md`  
4. `QIE_EXAMPLE.md`

---

## Audit Checklist (Quick)

An independent auditor should be able to:

- recompute and validate `semantic_hash`  
- verify all signatures  
- verify time windows (TTL / expiration)  
- verify binding consistency (`intent_id`, `semantic_hash`, `policy_id`)  
- confirm no execution mode escalation

Any failure MUST result in rejection.

---

## Normative References

The examples in this directory are aligned with:

- `docs/BASELINE_V0.1.md`  
- `docs/QIE_MINIMAL_PROFILE_v0.1.md`  
- `docs/SEMANTIC_SIGNATURE_v0.1.md`  
- `docs/ACCEPTANCE_RECEIPT_v0.1.md`  
- `docs/SECURITY_INVARIANTS_v0.1.md`  
- `docs/CONFORMANCE_MATRIX_v0.1.md`  
- `docs/THREAT_MODEL_v0.1.md`  

---

## Non-Goals

These examples do not define:

- governance processes  
- enforcement or execution  
- human uniqueness  
- legal or ethical authority  

They define only protocol-level verifiable accountability artifacts.
