---
title: "QuantumKey Protocol (QKP)"
---

# QuantumKey Protocol (QKP)

QKP is a protocol for verifiable accountability across autonomous and federated systems.
**It makes intent, execution, and trust decisions independently verifiable.**

This page is a **minimal public index** for the QuantumKey Protocol.  
It does **not** duplicate the specification or the whitepaper.  
It points to **canonical sources of truth**.

---

> **QuantumKey Protocol (QKP)** is a protocol for **verifiable accountability** across autonomous and federated systems.
>
> It replaces implicit trust with **cryptographic evidence**, **explicit causality**, and **signed acceptance decisions**.
>
> ▶ **Run the protocol now:**  
> `node examples/reference-flow.js`

---

## Protocol Status & Credibility

QuantumKey Protocol (QKP) has reached **protocol maturity**.

This repository represents a **stable, frozen, and verifiable reference** of the protocol.

---

### ✅ Current Status

- **Protocol version:** v1.0 (frozen)
- **Core primitives:** fully specified and implemented
- **Conformance coverage:** C1–C20 passing
- **Breaking changes:** not permitted outside explicit version upgrades

The protocol is designed to be extended **without mutating its core semantics**.

---

### 🔒 Protocol Freeze & Versioning

The v1.0 protocol freeze is formally declared and documented:

- Protocol freeze declaration  
  `docs/PROTOCOL_FREEZE_v1.0.md`

- Versioning rules and guarantees  
  `docs/VERSIONING.md`

This ensures long-term stability for adopters and implementers.

---

### 🧪 Verifiability & Conformance

QKP does not rely on claims of correctness.  
It provides **executable proof**.

- Conformance specification  
  `docs/conformance.md`

- Executable conformance tests  
  `examples/conformance-c*.js`

Every core concept is mapped to a **testable, verifiable artifact**.

---

## Choose your path

QuantumKey Protocol can be approached from different perspectives.  
Select the path that best matches your intent.

---

### 👩‍💻 Builders & Engineers

If you want to **see QKP in action** and build with it:

- Run the executable reference flow  
  `examples/reference-flow.js`

- Follow the annotated walkthrough  
  `examples/REFERENCE_FLOW.md`

- Explore the core SDK primitives  
  `src/graph/` · `src/identity/` · `src/claims/` · `src/execution/` · `src/policy/`

---

### 🧠 Researchers & Architects

If you want to **understand why QKP exists and how it is designed**:

- Read the whitepaper  
  `docs/WHITEPAPER.md`

- Study the normative protocol specification  
  `docs/protocol-spec.md`

- Review the technical cross-reference map  
  Appendix B — `docs/WHITEPAPER.md`

---

### 🛡️ Governance Designers & Auditors

If you want to **evaluate trust, accountability, and governance separation**:

- Review conformance coverage  
  `docs/conformance.md`

- Inspect the acceptance and attestation layer  
  `src/policy/`

- Examine end-to-end trust cases  
  `examples/conformance-c19.js`  
  `examples/conformance-c20.js`

---

### 🏛️ Governance & Stewardship

QKP governance is **minimal, explicit, and non-centralized**.

- Governance snapshot (v1.0)  
  `docs/GOVERNANCE_SNAPSHOT_v1.0.md`

- Contribution and stewardship model  
  `docs/CONTRIBUTING.md`

Stewardship is **earned through verifiable contribution**, not assigned by authority.

---

### 🌍 Adoption Readiness

QKP is ready for:

- Research and academic use
- SDK integration and experimentation
- Governance and policy design
- Federated and cross-organizational systems

Launch readiness is documented here:

- Launch readiness checklist  
  `docs/LAUNCH_READINESS.md`

---

## How to Adopt QuantumKey Protocol

QuantumKey Protocol can be adopted at different levels, depending on your role and intent.

Choose the entry point that matches **what you want to build or evaluate**.

---

### 🧠 Protocol-Level Adoption (Conceptual & Normative)

Use this path if you want to:

- Understand the protocol as a **formal system**
- Evaluate trust, accountability, and governance models
- Reference QKP in research, policy, or architecture design

Start here:

- Canonical protocol statement  
  `docs/CANONICAL_STATEMENT.md`

- Full protocol specification  
  `docs/protocol-spec.md`

- Whitepaper (conceptual foundation)  
  `docs/WHITEPAPER.md`

This path is **implementation-agnostic**.

---

### 🛠️ SDK-Level Adoption (Practical & Executable)

Use this path if you want to:

- Integrate QKP into software
- Execute accountability flows
- Experiment with chains, aggregation, and trust evaluation

Start here:

- SDK entry point  
  `qkp-sdk/README.md`

- Executable reference flow  
  `qkp-sdk/examples/reference-flow.js`

- Annotated walkthrough  
  `qkp-sdk/examples/REFERENCE_FLOW.md`

This path is **code-first and testable**.

---

### 🌍 Public & Ecosystem Adoption

Use this path if you want to:

- Present QKP publicly
- Explain the protocol to non-technical audiences
- Reference QKP as an external system

Start here:

- Public website  
  `/index.html`

- Externalization narrative  
  `docs/EXTERNALIZATION.md`

- Brand and messaging guidelines  
  `Brand-Guidelines.md`

This path focuses on **clarity and positioning**, not implementation detail.

---

### 🔑 One Protocol, Multiple Surfaces

All adoption paths refer to the **same canonical protocol**.

- No duplicated truth
- No diverging semantics
- No hidden assumptions

QuantumKey Protocol is designed to be:  
**readable, executable, and verifiable** — at every level.

---

## 🔑 Canonical Sources of Truth

The QuantumKey Protocol is intentionally defined across **three distinct public surfaces**, each with a clear and non-overlapping role.

---

### 1. Canonical Layer — What *is* true

**`docs/CANONICAL_STATEMENT.md`**

This document defines the **non-negotiable public truth** of the protocol.

It is authoritative for:
- What the protocol *is*
- What it explicitly *is not*
- The invariants that MUST NOT diverge

If there is ambiguity, this document prevails.

---

### 2. Conceptual Layer — Why it exists

**`docs/WHITEPAPER.md`**

Explains:
- The problem space QKP addresses
- The architectural and philosophical foundations
- The rationale behind the design

It provides **understanding**, not authority.  
It MUST align with the Canonical Statement.

---

### 3. Operational Layer — How it works

**`qkp-sdk/`**

The SDK is the **executable surface** of the protocol.

It contains:
- Reference implementations
- Conformance tests (C1–C20)
- An executable reference flow

The SDK demonstrates how the canonical protocol behaves in practice.  
It MUST conform to the specification and canonical definitions.

---

All other documents, pages, and websites **point to these three layers**.  
None of them redefine the protocol.

---

## What to do next

If you want to verify QuantumKey Protocol:

- Run the executable reference flow  
  `examples/reference-flow.js`

If you want to understand its design:

- Read the Whitepaper  
  `docs/WHITEPAPER.md`

If you want to evaluate trust and governance:

- Review conformance and acceptance  
  `docs/conformance.md`

No registration.  
No permission.  
Only verification.


---

## Canonical statement

Read the canonical public statement:

- `docs/CANONICAL_STATEMENT.md`

---

## Read the protocol

- Whitepaper: `docs/WHITEPAPER.md`  
- Protocol specification (normative): `docs/protocol-spec.md`  
- Conformance matrix: `docs/conformance.md`  
- Canonical vocabulary: `docs/VOCABULARY.md`

---

## Implementation

The reference implementation and executable proofs live in:

- QKP SDK repository (`qkp-sdk`)

---

## Version

- Protocol freeze: v1.0  
- Governance snapshot: v1.0  
- Versioning rules: `docs/VERSIONING.md`

---

Trust is no longer implicit.  
It is preserved through structure.
