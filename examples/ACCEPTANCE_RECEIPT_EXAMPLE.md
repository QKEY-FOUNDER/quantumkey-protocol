# ACCEPTANCE_RECEIPT_EXAMPLE — QuantumKey Protocol (QKP)

Baseline: v0.1  
Purpose: Normative example of a valid Acceptance Receipt

This document provides a concrete and verifiable example of an **Acceptance Receipt**
issued for a valid Semantic Signature under Baseline v0.1.

It demonstrates how **trust decisions** are recorded without mutating facts or enforcing execution.

---

## 1. Scenario

A trust authority evaluates a Semantic Signature produced for a valid QIE and issues
an explicit trust decision.

This example demonstrates:
- explicit trust attribution  
- policy-bound acceptance  
- non-repudiation of decisions  
- separation between trust and execution  

---

## 2. Input References

This Acceptance Receipt references:

- Quantum Intent Envelope  
  `QIE_EXAMPLE.md`

- Semantic Signature  
  `SEMANTIC_SIGNATURE_EXAMPLE.md`

The trust decision binds strictly to:
- `intent_id`
- `semantic_hash`
- `policy_id`

---

## 3. Trust Policy

Policy identifier used in this example:

- `policy_id`: `trust-policy:data-export:v0.1`

Policy summary (informative):
- ACCEPT requires a valid Semantic Signature
- confidence_score >= 0.95
- STRICT execution explicitly allowed

Policy logic is **external** to the protocol.

---

## 4. Acceptance Receipt

```json
{
  "receipt_id": "accept-2026-01-01-0001",
  "intent_id": "intent-2026-01-01-0001",
  "semantic_hash": "0x8c7e5d2a9f41c3b8e0a1f9d77b6d2c44e3a9a8b4f1c9e2d7a6b5c4d3e2f1a0",

  "issuer_did": "did:qkp:authority:trust-node-1",
  "issuer_role": "TRUST_AUTHORITY",
  "policy_id": "trust-policy:data-export:v0.1",

  "decision": "ACCEPT",
  "decision_reason": "Semantic evaluation valid with sufficient confidence for STRICT execution.",

  "referenced_semantic_signatures": [
    "sem-sig-2026-01-01-0001"
  ],

  "execution_mode": "STRICT",

  "issued_at": "2026-01-01T10:17:00Z",
  "expires_at": "2026-01-01T12:17:00Z",

  "signature_scheme": "ed25519",
  "signature": "0x4b3a29181716151413121110f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2"
}
```

## 5. Validation Checklist

This Acceptance Receipt is valid under Baseline v0.1 if:

- `intent_id` matches the referenced QIE  
- `semantic_hash` matches the referenced QIE  
- all referenced Semantic Signatures are valid  
- `policy_id` is declared and known  
- `issued_at` < current time < `expires_at`  
- `signature` verifies against `issuer_did`  
- `execution_mode` is not escalated  

Any failure **MUST** result in rejection.

---

## 6. Security Properties Demonstrated

This example demonstrates:

- Explicit trust attribution  
- Non-repudiation of trust decisions  
- Policy-scoped acceptance  
- Time-bounded trust validity  
- Audit-ready trust evidence  

---

## 7. What This Example Does Not Show

This example does **NOT** include:

- Execution result  
- Enforcement mechanism  
- Post-execution verification  

These are outside protocol scope.

---

## 8. Related Examples

- QIE_EXAMPLE.md  
- SEMANTIC_SIGNATURE_EXAMPLE.md  
- END_TO_END_FLOW_EXAMPLE.md  

---

## 9. Normative References

- ACCEPTANCE_RECEIPT_v0.1.md  
- SEMANTIC_SIGNATURE_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md

---
