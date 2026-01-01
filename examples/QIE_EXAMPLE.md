# QIE_EXAMPLE — QuantumKey Protocol (QKP)

Baseline: v0.1  
Purpose: Normative example of a valid Quantum Intent Envelope (QIE)

This document provides a concrete, minimal, and valid example of a QIE compliant with `QIE_MINIMAL_PROFILE_v0.1.md`.

It is intended for:
- implementers
- auditors
- test authors

---

## 1. Scenario

A human actor (HID) declares an intent to authorize a data export operation under STRICT execution mode.

This example demonstrates:
- intent declaration
- semantic binding
- replay protection
- cryptographic attribution

---


## 2. Quantum Intent Envelope (QIE)

```json
{
  "qie_version": "v0.1",
  "intent_id": "intent-2026-01-01-0001",
  "created_at": "2026-01-01T10:15:00Z",
  "expires_at": "2026-01-01T10:45:00Z",
  "nonce": "b7f3a9c2e41d8a9f",

  "issuer_did": "did:qkp:human:mchiosa",
  "issuer_type": "HID",

  "intent_type": "DATA_EXPORT",
  "intent_payload": {
    "dataset": "user_activity_logs",
    "destination": "s3://audit-bucket/export-001",
    "format": "csv"
  },

  "semantic_hash": "0x8c7e5d2a9f41c3b8e0a1f9d77b6d2c44e3a9a8b4f1c9e2d7a6b5c4d3e2f1a0",

  "execution_mode": "STRICT",
  "context_id": "context-audit-2026-01",
  "parent_intent_id": null,

  "signature_scheme": "ed25519",
  "public_key_reference": "did:qkp:human:mchiosa#key-1",
  "signature": "0x5f2a9c8e7d6b4a3c2f1e9d8c7b6a5e4d3c2b1a0f9e8d7c6b5a4f3e2d1c0"
}

```

## 3. Canonicalization Notes

Before computing `semantic_hash`:

- JSON keys are ordered lexicographically  
- Whitespace is normalized  
- Unicode is normalized (NFC)  
- Numeric values use canonical formats  

The `semantic_hash` is computed **after** canonicalization.

---

## 4. Validation Checklist

This QIE is valid under Baseline v0.1 if:

- `expires_at` > current time  
- `nonce` has not been seen in the same `context_id`  
- `semantic_hash` matches the canonicalized intent  
- `signature` verifies against `public_key_reference`  
- `execution_mode` is allowed by policy  

Any failure **MUST** result in rejection.

---

## 5. Security Properties Demonstrated

This example demonstrates:

- Intent immutability  
- Replay resistance (TTL + nonce)  
- Explicit actor attribution  
- Mode-aware authorization  
- Audit-ready structure  

---

## 6. What This Example Does Not Show

This example does **NOT** include:

- Semantic Signature  
- Acceptance Receipt  
- Execution result  

These are shown in subsequent examples.

---

## 7. Related Examples

- SEMANTIC_SIGNATURE_EXAMPLE.md  
- ACCEPTANCE_RECEIPT_EXAMPLE.md  
- END_TO_END_FLOW_EXAMPLE.md  

---

## 8. Normative References

- QIE_MINIMAL_PROFILE_v0.1.md  
- SECURITY_INVARIANTS_v0.1.md  
- THREAT_MODEL_v0.1.md  
- CONFORMANCE_MATRIX_v0.1.md

---
