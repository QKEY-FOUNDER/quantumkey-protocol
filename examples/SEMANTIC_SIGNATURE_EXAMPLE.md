# SEMANTIC_SIGNATURE_EXAMPLE — QuantumKey Protocol (QKP)

Baseline: v0.1  
Purpose: Normative example of a valid Semantic Signature

This document provides a concrete and verifiable example of a **Semantic Signature**
produced for a valid Quantum Intent Envelope (QIE) under Baseline v0.1.

It demonstrates how meaning is evaluated **without mutating facts**.

---

## 1. Scenario

A semantic validator evaluates the intent declared in `QIE_EXAMPLE.md`.

The validator checks whether the declared intent:
- is semantically well-formed
- matches the declared execution mode
- complies with a semantic policy

This example demonstrates:
- bounded semantic evaluation  
- explicit attribution of meaning  
- non-enforcement by semantics  

---

## 2. Input Reference

The Semantic Signature in this example references:

- QIE example  
  `QIE_EXAMPLE.md`

The semantic evaluation is bound to:
- `intent_id`
- `semantic_hash`

No other data is considered authoritative.

---

## 3. Semantic Policy

Policy identifier used in this example:

- `policy_id`: `semantic-policy:data-export:v0.1`

Policy summary (informative):
- DATA_EXPORT intents must specify:
  - dataset
  - destination
  - format
- STRICT execution requires explicit destination
- No wildcard destinations allowed

Policy logic is **external** to the protocol.

---

## 4. Semantic Signature

```json
{
  "semantic_signature_id": "sem-sig-2026-01-01-0001",
  "intent_id": "intent-2026-01-01-0001",
  "semantic_hash": "0x8c7e5d2a9f41c3b8e0a1f9d77b6d2c44e3a9a8b4f1c9e2d7a6b5c4d3e2f1a0",

  "validator_id": "did:qkp:validator:semantic-node-1",
  "validator_version": "v0.1",
  "policy_id": "semantic-policy:data-export:v0.1",

  "evaluation_result": "ACCEPT",
  "confidence_score": 0.98,

  "evidence_bundle": {
    "checked_fields": [
      "intent_type",
      "intent_payload.dataset",
      "intent_payload.destination",
      "intent_payload.format",
      "execution_mode"
    ],
    "notes": "Intent payload complete and semantically consistent with STRICT execution requirements."
  },

  "issued_at": "2026-01-01T10:16:00Z",
  "expires_at": "2026-01-01T11:16:00Z",

  "signature_scheme": "ed25519",
  "signature": "0x9a7c6e5d4f3b2a1c0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a392817161514"
}

```
## 5. Validation Checklist

This Semantic Signature is valid under Baseline v0.1 if:

- `semantic_hash` matches the referenced QIE  
- `intent_id` matches the referenced QIE  
- `policy_id` is declared and known  
- `issued_at` < current time < `expires_at`  
- `signature` verifies against `validator_id`  

Any failure **MUST** result in rejection.

---

## 6. Security Properties Demonstrated

This example demonstrates:

- Semantic binding without mutation  
- Explicit attribution of semantic judgment  
- Policy-scoped meaning evaluation  
- Time-bounded validity  
- Audit-ready semantic evidence  

---

## 7. What This Example Does Not Show

This example does **NOT** include:

- Acceptance Receipt  
- Trust decision  
- Execution result  

These are demonstrated in subsequent examples.

---

## 8. Related Examples

- QIE_EXAMPLE.md  
- ACCEPTANCE_RECEIPT_EXAMPLE.md  
- END_TO_END_FLOW_EXAMPLE.md  

---

## 9. Normative References

- SEMANTIC_SIGNATURE_v0.1.md  
- QIE_MINIMAL_PROFILE_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md
