# END_TO_END_FLOW_EXAMPLE — QuantumKey Protocol (QKP)

Baseline: v0.1  
Purpose: Normative end-to-end example of a complete QKP accountability flow

This document provides a full, end-to-end example of the QuantumKey Protocol (QKP)
under Baseline v0.1, covering the complete lifecycle:

Intent → Semantic Evaluation → Trust Decision → Audit

No execution or enforcement is performed.

---

## 1. Scenario

A human actor requests a data export operation.

The request is:
- declared via a Quantum Intent Envelope (QIE)
- evaluated by a semantic validator
- explicitly accepted by a trust authority

All steps are cryptographically bound and independently auditable.

---

## 2. Step 1 — Quantum Intent Envelope (QIE)

The actor declares an intent.

Reference:
- `QIE_EXAMPLE.md`

Authoritative bindings:
- `intent_id`
- `semantic_hash`
- issuer identity
- execution_mode

The QIE establishes **what was requested**.

---

## 3. Step 2 — Semantic Evaluation

A semantic validator evaluates the declared intent.

Reference:
- `SEMANTIC_SIGNATURE_EXAMPLE.md`

Authoritative bindings:
- `intent_id`
- `semantic_hash`
- `policy_id`
- validator identity

Semantic evaluation establishes **what the intent means** under a policy.

No trust decision is made at this stage.

---

## 4. Step 3 — Trust Decision (Acceptance Receipt)

A trust authority evaluates the Semantic Signature and issues a trust decision.

Reference:
- `ACCEPTANCE_RECEIPT_EXAMPLE.md`

Authoritative bindings:
- `intent_id`
- `semantic_hash`
- `policy_id`
- execution_mode
- issuer identity

The Acceptance Receipt establishes **who accepted responsibility**.

---

## 5. Causal Binding Summary

The complete causal chain is:

- QIE  
  establishes intent and context

- Semantic Signature  
  binds meaning to intent without mutation

- Acceptance Receipt  
  binds trust to meaning and intent

Each artifact references the previous one.
No step rewrites history.

---

## 6. Audit Procedure

An independent auditor can verify the flow by:

1. Loading the QIE  
2. Recomputing `semantic_hash`  
3. Verifying QIE signature and TTL  
4. Verifying Semantic Signature binding and signature  
5. Verifying Acceptance Receipt binding and signature  
6. Verifying no execution mode escalation occurred  

If all checks pass, the flow is valid under Baseline v0.1.

---

## 7. Security Properties Demonstrated

This end-to-end example demonstrates:

- Separation of facts, semantics, and trust  
- Cryptographic attribution at every stage  
- Replay resistance and time-bounded validity  
- Non-repudiation of trust decisions  
- Independent post-hoc auditability  

---

## 8. What This Example Does Not Show

This example does NOT include:

- Execution result  
- Enforcement mechanism  
- Consensus or governance process  
- Physical-world side effects  

These are explicitly outside protocol scope.

---

## 9. Normative References

- QIE_EXAMPLE.md  
- SEMANTIC_SIGNATURE_EXAMPLE.md  
- ACCEPTANCE_RECEIPT_EXAMPLE.md  

- QIE_MINIMAL_PROFILE_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- ACCEPTANCE_RECEIPT_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md
