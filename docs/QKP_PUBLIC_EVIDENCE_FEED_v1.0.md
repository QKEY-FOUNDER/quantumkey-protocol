# QKP Public Evidence Feed — v1.0  
QuantumKey Protocol (QKP)

Version: v1.0  
Year: 2026  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

---

## 1. Purpose

This document defines the public, verifiable evidence feed of the QuantumKey Protocol (QKP).

Its role is to expose, in a cryptographically verifiable and machine-readable way, the **live scientific and technical state** of the protocol, including:

- Reproducibility of the reference flow  
- Conformance to normative specifications  
- Technology Readiness Level (TRL)  
- Experimental activity  
- Baseline integrity  

This feed exists to allow **any external party** (auditors, funders, regulators, researchers) to verify the status of QKP without trusting any authority.

---

## 2. What Counts as Evidence

The following artifacts are considered **normative evidence generators**:

### 2.1 Executable Protocol Flow
- `qkp-sdk/examples/reference-flow.js`

Produces:
- Signed intents
- Claims
- Causal graphs
- Aggregates
- Acceptance receipts

This is the **canonical experiment** of QKP.

---

### 2.2 Conformance Test Suite
- `qkp-sdk/examples/conformance-c1.js` … `conformance-c20.js`

Each test corresponds to a requirement in:
- `docs/CONFORMANCE_MATRIX_v0.1.md`

These scripts validate whether the SDK conforms to the protocol specification.

---

### 2.3 Evidence Generator
- `qkp-sdk/evidence/generateEvidence.js`

This script:
- Executes reference-flow.js
- Executes all conformance tests
- Computes all scores
- Emits a canonical evidence object

---

## 3. Evidence Object — QKP_EVIDENCE_SNAPSHOT

All evidence is aggregated into a single canonical structure called:

**QKP_EVIDENCE_SNAPSHOT**

It contains:

- Timestamp  
- SDK version hash  
- Baseline hash  
- Reference-flow hash  
- Conformance test results  
- TRL scores  
- SIFIDE eligibility metrics  
- Cryptographic signatures  

This object is deterministic:  
the same inputs always produce the same snapshot hash.

---

## 4. Metrics Exposed

The Evidence Feed publishes the following core metrics:

### 4.1 Reproducibility Score

Defined as:

(number of successful reference-flow executions)  
÷  
(total executions)

Measured across:
- local runs
- CI runs
- independent verifiers

---

### 4.2 Conformance Score

Derived from:
- conformance-c1 … conformance-c20

Each test corresponds to a protocol invariant.

Score =  
(passed tests) ÷ (total tests)

---

### 4.3 TRL Score

Computed using:
- `TRL_MAPPING_QKP_v1.0.md`

Each successful conformance and reference-flow run advances the protocol from:

TRL 2 → 3 → 4 → 5 …

based on reproducibility, completeness, and cross-run stability.

---

### 4.4 Experimental Activity Index

Measures:
- number of executions
- diversity of environments
- frequency of runs

Used to demonstrate active R&D for SIFIDE and NGI.

---

## 5. Cryptographic Anchoring

Each QKP_EVIDENCE_SNAPSHOT is:

- Canonicalized
- Hashed
- Signed by the Evidence Engine key

The following are included:

- Snapshot hash  
- Baseline v0.1 hash  
- SDK commit hash  

This makes it impossible to falsify scientific state retroactively.

---

## 6. Publication Format

The public feed exposes:

- `latest.json` — the most recent snapshot  
- `history/` — all previous signed snapshots  

These files can be served via:
- GitHub Pages
- Zenodo
- Any static web host

They require **no backend** and are fully verifiable offline.

---

## 7. Relationship to the Observatory

The Evidence Feed is the data layer.

The **QKP Observatory** (defined in `QKP_OBSERVATORY_SPEC_v1.0.md`) is the visualization and monitoring layer.

The Observatory reads only:
- QKP_EVIDENCE_SNAPSHOT objects

It never talks to the SDK directly.

---

## 8. Scientific and Regulatory Meaning

This feed allows third parties to verify:

- That QKP is alive
- That it is reproducible
- That it conforms to its own spec
- That it advances in TRL
- That experimental R&D is ongoing

This satisfies:
- ANI SIFIDE technical evidence
- NGI Zero reproducibility
- Academic auditability
- Regulatory transparency

---

## 9. What This Feed Is Not

This feed does NOT expose:

- User data  
- Private keys  
- Commercial operations  
- Financial activity  

It exposes only:
**verifiable scientific and technical state.**

---

## 10. Final Statement

The QKP Public Evidence Feed makes QuantumKey Protocol observable without permission.

Anyone may:
- download the snapshots
- verify the hashes
- reproduce the experiments
- compute the scores

Trust is replaced by measurement.  
Belief is replaced by evidence.

This is the scientific surface of QKP.
