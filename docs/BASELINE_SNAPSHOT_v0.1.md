# BASELINE_SNAPSHOT v0.1 — QuantumKey Protocol (QKP)

Status: Frozen Snapshot  
Baseline Version: v0.1  
Freeze Date: 2026-01-01  
Repository: quantumkey-protocol  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document is the **canonical snapshot** of the QuantumKey Protocol (QKP) **Baseline v0.1**.

It enumerates **exactly which files and paths** constitute the frozen normative baseline
at the time of the protocol freeze.

This snapshot exists to provide:
- unambiguous auditability
- reproducibility
- long-term reference stability

No new semantics are defined here.

---

## 1. Authority and Precedence

This snapshot is authoritative **only** when read together with:

- `BASELINE_V0.1.md` — semantic definition of the baseline  
- `PROTOCOL_FREEZE_v0.1.md` — formal freeze declaration  
- `VERSIONING.md` — versioning and evolution rules  
- `CHANGELOG.md` — recorded history of changes  

If any ambiguity arises, **the baseline definition and freeze declaration prevail**.

---

## 2. Normative Files (Baseline v0.1)

The following files are **normative** and define the complete protocol surface
for QuantumKey Protocol Baseline v0.1.

### 2.1 Core Baseline Definition

- `docs/BASELINE_V0.1.md`  
- `docs/BASELINE_SNAPSHOT_v0.1.md`  
- `docs/PROTOCOL_FREEZE_v0.1.md`  
- `docs/VERSIONING.md`  
- `CHANGELOG.md`  

---

### 2.2 Normative Protocol Specifications

- `docs/THREAT_MODEL_v0.1.md`  
- `docs/QIE_MINIMAL_PROFILE_v0.1.md`  
- `docs/SEMANTIC_SIGNATURE_v0.1.md`  
- `docs/ACCEPTANCE_RECEIPT_v0.1.md`  
- `docs/REFERENCE_FLOW_v0.1.md`  
- `docs/CONFORMANCE_MATRIX_v0.1.md`  
- `docs/SECURITY_INVARIANTS_v0.1.md`  
- `docs/GLOSSARY.md`  

---

### 2.3 Normative Implementation Guidance

- `docs/IMPLEMENTATION_GUIDE.md`  

---

### 2.4 Normative Examples

The following example files are normative and define canonical artifact shapes
and end-to-end behavior for Baseline v0.1:

- `examples/QIE_EXAMPLE.md`  
- `examples/SEMANTIC_SIGNATURE_EXAMPLE.md`  
- `examples/ACCEPTANCE_RECEIPT_EXAMPLE.md`  
- `examples/END_TO_END_FLOW_EXAMPLE.md`  
- `examples/README.md`  

---

## 3. Non-Normative (Informative) Files

The following files are **explicitly excluded** from the normative baseline.
They provide context, explanation, or presentation only.

### 3.1 Informative Documentation

- `docs/CANONICAL_STATEMENT.md`  
- `docs/architecture.md`  
- `docs/conformance.md`  
- `docs/protocol-spec.md`  
- `docs/roadmap.md`  
- `docs/START_HERE.md`  
- `docs/CONTRIBUTING.md`  

---

### 3.2 Conceptual and Narrative Documents

- `WHITEPAPER.md`  
- `EXECUTIVE_SUMMARY.md`  
- `EXTERNALIZATION.md`  
- `MASTER_DOCUMENT.md`  
- `QuantumKey_Protocol.md`  

---

### 3.3 Web and Presentation Assets

- `index.html`  
- `index.md`  
- `start.html`  
- `script.js`  
- `styles.css`  
- `start.css`  
- `Brand-Guidelines.md`  
- `favicon.svg`  
- `quantumkey-logo.svg`  

---

### 3.4 Architecture Subdocuments

- `docs/architecture/` (entire directory)  
- `docs/summary/` (entire directory)  
- `docs/whitepaper/` (entire directory)  

---

### 3.5 Legacy and Experimental Material

- `legacy/` (entire directory)  
- `ui-baseline/` (entire directory)  

---

## 4. Immutability Statement

All files listed as **normative** in Section 2 are **frozen** as part of Baseline v0.1.

They MUST NOT be modified, reordered, reinterpreted, or replaced without:
- declaring a new baseline version
- updating the snapshot
- recording the change in `CHANGELOG.md`

---

## 5. Relationship to Implementations

Implementations (SDKs, tools, integrations):

- MUST reference this snapshot when claiming Baseline v0.1 compliance  
- MUST NOT redefine or partially substitute normative files  
- MAY extend behavior only through future baseline versions  

The reference SDK (`qkp-sdk`) implements this baseline via explicit mapping documents.

---

## 6. Final Statement

This snapshot defines **what exists**, not what is imagined.

QuantumKey Protocol Baseline v0.1 is now:
- fully specified
- fully enumerable
- fully auditable

Evolution begins only after truth is frozen.
