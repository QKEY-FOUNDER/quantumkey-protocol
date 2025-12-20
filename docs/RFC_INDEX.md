# QuantumKey Protocol — RFC-style Documentation Index

**Protocol:** QuantumKey Protocol (QKP)  
**Version:** v1.0  
**Status:** Normative Index  
**Repository:** quantumkey-protocol

---

## Purpose

This document provides a **linear, RFC-style reading order** for the QuantumKey Protocol.

It is intended for readers who want to understand QKP as a **formal protocol**, with clear separation between:

- Definitions
- Invariants
- Semantics
- Conformance
- Governance boundaries

This index does not redefine the protocol.  
It orders existing canonical documents into a coherent reference flow.

---

## RFC Reading Order

### 1. Abstract & Problem Definition

- Whitepaper — Executive Summary  
  `docs/WHITEPAPER.md`

- Problem Statement & Core Insight  
  `docs/WHITEPAPER.md` (Section 1)

---

### 2. Terminology & Canonical Vocabulary

- Canonical Vocabulary (normative)  
  `docs/VOCABULARY.md`

All terms used in the protocol MUST be interpreted according to this document.

---

### 3. Protocol Overview

- Architectural overview  
  `docs/WHITEPAPER.md` (Sections 2–3)

This section explains the conceptual layers of QKP.

---

### 4. Normative Protocol Specification

- Canonical protocol specification  
  `docs/protocol-spec.md`

This document defines:
- Canonical data structures
- Cryptographic requirements
- Causal and aggregation semantics
- Trust separation model

---

### 5. Conformance & Invariants

- Conformance matrix and rules  
  `docs/conformance.md`

- Executable conformance cases (C1–C20)  
  Referenced in `docs/conformance.md`

Conformance defines protocol correctness.

---

### 6. Executable Reference Behavior

- Executable reference flow  
  `examples/reference-flow.js` (in qkp-sdk)

- Annotated walkthrough  
  `examples/REFERENCE_FLOW.md` (in qkp-sdk)

These files demonstrate protocol behavior end-to-end.

---

### 7. Governance & Evolution

- Protocol freeze declaration  
  `docs/PROTOCOL_FREEZE_v1.0.md`

- Governance snapshot  
  `docs/GOVERNANCE_SNAPSHOT_v1.0.md`

- Versioning and evolution rules  
  `docs/VERSIONING.md`

These documents define how the protocol evolves over time.

---

### 8. Public Statement

- Canonical public statement  
  `docs/CANONICAL_STATEMENT.md`

This document provides the authoritative external description of QKP.

---

## How to Use This Index

- Engineers SHOULD follow sections 2 → 6
- Researchers SHOULD follow sections 1 → 5
- Auditors SHOULD focus on sections 4 → 7
- Institutions SHOULD read sections 1, 7, and 8

---

## Statement

This index defines the **canonical RFC-style view** of QuantumKey Protocol v1.0.

Any future protocol version MUST update this index accordingly.

---

Trust is preserved by structure, not assumption.
