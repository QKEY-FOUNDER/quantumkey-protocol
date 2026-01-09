# QKP_EVIDENCE_SCHEMA_v1.0  
QuantumKey Protocol — Experimental Evidence Format

Version: v1.0  
Date: 2026  
Author: Mihail Chiosa  
Licensed R&D Entity: CHIOSA & CHIOSA LDA (NIPC 514 330 570)  
Academic Anchor: Zenodo DOI 10.5281/zenodo.18172464  

---

## 1. Purpose

This document defines the **canonical machine-readable format** used by the QuantumKey Protocol to publish experimental and scientific evidence.

This schema is consumed by:
- the Evidence Engine
- the Observatory
- SIFIDE and NGI auditors
- TRL evaluators

If a value is not in this schema, it does not exist.

---

## 2. File Location

All QKP evidence is written to:

/evidence/latest.json

This file is the single source of truth for the current scientific state of QKP.

---

## 3. Canonical Structure

The file MUST have the following structure:

{
  "qkp_version": "v0.1",
  "baseline_hash": "<sha256>",
  "zenodo_doi": "10.5281/zenodo.18172464",
  "timestamp": "<ISO-8601 UTC>",
  "git_commit": "<commit hash>",
  "reference_flow": {
    "executed": true,
    "hash": "<sha256>",
    "duration_ms": <number>
  },
  "conformance": {
    "total_tests": 20,
    "passed": <number>,
    "failed": <number>,
    "pass_rate": <float 0–1>
  },
  "reproducibility": {
    "runs": <number>,
    "identical_hashes": <number>,
    "rate": <float 0–1>
  },
  "semantic": {
    "validator_count": <number>,
    "divergence_score": <float 0–1>
  },
  "trl": {
    "current": <integer>,
    "confidence": <float 0–1>
  },
  "artifacts": {
    "qie_hash": "<sha256>",
    "semantic_signature_hash": "<sha256>",
    "acceptance_receipt_hash": "<sha256>",
    "aggregate_hash": "<sha256>"
  }
}

---

## 4. Semantics

Every field must be:
- deterministic
- reproducible
- derivable from protocol execution

Manual editing is forbidden.

---

## 5. Legal and Scientific Meaning

This file constitutes:
- experimental laboratory output
- TRL evidence
- SIFIDE audit trace
- NGI milestone proof

It is the **scientific fingerprint** of QKP at a given time.

---

## 6. Immutability

Each version of latest.json is archived into:

/evidence/YYYY-MM-DD_HH-MM.json

This creates an immutable R&D timeline.

---

## 7. Final Statement

QKP does not claim progress.

It **hashes** it.

This schema turns QuantumKey Protocol into a self-measuring scientific instrument.

---
