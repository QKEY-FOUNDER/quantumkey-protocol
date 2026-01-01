# IMPLEMENTATION GUIDE — QuantumKey Protocol (QKP)

Version: v0.1  
Status: Aligned with Baseline v0.1  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This guide explains how to implement the QuantumKey Protocol (QKP) **from scratch** using the frozen Baseline v0.1.

It is intended for:
- software engineers
- protocol integrators
- researchers building reference implementations

This guide is **practical, minimal, and normative-aware**.

---

## 1. What You Are Implementing

At Baseline v0.1, QKP consists of **four mandatory artifacts** and **one canonical flow**:

1. Quantum Intent Envelope (QIE)  
2. Semantic Signature  
3. Acceptance Receipt  
4. Conformance & invariants enforcement  
5. Reference Flow (end-to-end)

You are **not** implementing enforcement, governance, or morality.  
You are implementing **verifiable accountability**.

---

## 2. Mandatory Documents (Read First)

Before coding, you MUST read:

- Baseline definition  
  `docs/BASELINE_V0.1.md`

- Threat model  
  `docs/THREAT_MODEL_v0.1.md`

- Security invariants  
  `docs/SECURITY_INVARIANTS_v0.1.md`

- QIE minimal profile  
  `docs/QIE_MINIMAL_PROFILE_v0.1.md`

These define what is allowed and what is forbidden.

---

## 3. Minimal Implementation Stack

A minimal QKP implementation requires:

- Cryptographic signatures (any secure scheme)
- Deterministic hashing
- Canonical serialization (e.g. canonical JSON)
- Clock source (for TTL validation)
- Persistent storage (append-only preferred)

No blockchain is required.

---

## 4. Step 1 — Implement QIE (Quantum Intent Envelope)

### Required Actions

- Define a QIE data structure compliant with `QIE_MINIMAL_PROFILE_v0.1.md`
- Canonicalize the intent payload
- Compute `semantic_hash`
- Sign the envelope
- Enforce TTL and nonce uniqueness

### Validation Rules

Reject the QIE if:
- TTL expired
- Signature invalid
- semantic_hash mismatch
- nonce reused in same context

---

## 5. Step 2 — Implement Semantic Signature

### Required Actions

- Resolve issuer identity
- Load semantic policy
- Evaluate intent meaning
- Produce a Semantic Signature
- Sign the evaluation

### Important Rule

Semantic evaluation:
- MUST NOT mutate intent
- MUST bind to `semantic_hash`
- MAY diverge between validators

Divergence is expected.

---

## 6. Step 3 — Implement Acceptance Receipt

### Required Actions

- Apply trust policy
- Decide ACCEPT / REJECT / CONDITIONAL
- Bind decision to:
  - intent_id
  - semantic_hash
  - policy_id
  - execution_mode
- Sign the receipt

### Critical Rule

Acceptance is a **trust decision**, not execution.

---

## 7. Step 4 — Enforce Execution Mode

Before any execution:

- Verify Acceptance Receipt
- Verify execution_mode
- Reject mode escalation

STRICT execution is forbidden unless explicitly authorized.

---

## 8. Step 5 — Implement Reference Flow

Implement the canonical sequence:

1. Create QIE  
2. Evaluate semantics  
3. Issue Acceptance Receipt  
4. Execute (external)  
5. Audit artifacts  

All artifacts MUST be stored immutably.

---

## 9. Conformance Checklist (v0.1)

Your implementation MUST:

- Pass all QIE validation rules  
- Preserve security invariants  
- Reject invalid or expired artifacts  
- Preserve causal links  
- Allow independent audit replay  

Use:
- `docs/CONFORMANCE_MATRIX_v0.1.md`

---

## 10. What Not to Implement (v0.1)

Do NOT implement:

- Automatic enforcement
- Consensus mechanisms
- Global trust
- Human uniqueness
- Ethical evaluation

These are explicitly out of scope.

---

## 11. Testing Strategy

Recommended tests:

- QIE creation and rejection cases
- Replay attack attempts
- Semantic divergence scenarios
- Receipt misuse attempts
- Audit replay from stored artifacts

Executable proof beats documentation.

---

## 12. Implementation Outcome

If correctly implemented, your system will:

- Prove who declared what
- Prove how meaning was evaluated
- Prove who accepted responsibility
- Allow third-party audit
- Preserve history immutably

---

## 13. Next Steps After Implementation

After a minimal implementation:

- Add optional extensions (future versions)
- Experiment with governance layers
- Integrate with existing systems
- Prepare for Baseline v0.2

---

## 14. Related Documents

- BASELINE_V0.1.md  
- THREAT_MODEL_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- ACCEPTANCE_RECEIPT_v0.1.md  
- REFERENCE_FLOW_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md
