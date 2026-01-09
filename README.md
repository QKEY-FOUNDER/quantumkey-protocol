[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18172464.svg)](https://doi.org/10.5281/zenodo.18172464)

---

# 🌐 QuantumKey Protocol  
### A Unified Architecture for Intent, Identity, Autonomous Agents & Semantic Alignment  
**Version:** 1.0 • **Year:** 2025  
**Author:** Mihail Chiosa  
**Collaborative Intelligence:** Quantum Hammer

> **QuantumKey Protocol (QKP)** is a protocol for **verifiable accountability**
> across autonomous and federated systems.
>
> It replaces implicit trust with **cryptographic evidence**,
> **explicit causality**, and **signed acceptance decisions**.

---

## Scope

The content of this repository defines the **normative protocol artifacts** of QKP.

It contains the authoritative specification, reference flows, security invariants,
and governance boundaries that define what QuantumKey Protocol *is*.

This repository is **not** an implementation — it is the protocol itself.

---

## Canonical Reference Flow (Normative)

QuantumKey Protocol v0.1 defines a **canonical, normative reference flow**
describing the end-to-end lifecycle of an intent — from declaration to audit.

This flow is specified in:

📄 `docs/REFERENCE_FLOW_v0.1.md`

The reference flow is **implementation-independent** and serves as the
authoritative baseline for all executable implementations.

---

## Academic Reference & Citation

**QuantumKey Protocol (QKP)** — Academic Release v0.1 is permanently archived and citable via Zenodo.

**DOI:** https://doi.org/10.5281/zenodo.18172464  

This repository represents the **canonical technical baseline** corresponding to that academic release.

- No protocol semantics have changed since the archival.
- Baseline v0.1 is frozen and authoritative.
- Ongoing work may extend the protocol but does not retroactively modify this baseline.

For academic citation, regulatory reference, or institutional review, always cite the Zenodo record above.

---

## Start here

This repository is the canonical source for the QuantumKey Protocol (QKP).

It intentionally does **not duplicate** the specification, whitepaper, or governance documents.
Instead, it points to the authoritative entry points.

### Canonical entry points

- Public protocol index and navigation  
  `docs/index.md`

- Canonical protocol statement  
  `docs/CANONICAL_STATEMENT.md`

- Full protocol specification  
  `docs/protocol-spec.md`

- Whitepaper (design rationale and vision)  
  `docs/WHITEPAPER.md`

- Conformance definition  
  `docs/conformance.md`

---

## How to Verify the Protocol

This repository defines the **normative specification** of the QuantumKey Protocol.

The canonical executable reference implementation is provided by the QKP SDK:

https://github.com/QKEY-FOUNDER/qkp-sdk

To run the normative reference flow:

```bash
git clone https://github.com/QKEY-FOUNDER/qkp-sdk
cd qkp-sdk
npm install
node examples/reference-flow.js
```
This executable reference flow implements the normative process defined in:  
docs/REFERENCE_FLOW_v0.1.md  

If you can run it and verify the generated artifacts, you understand the protocol.

---

## Design Principles

QuantumKey Protocol is designed around a small set of explicit principles that guide every architectural and governance decision.  
These principles are not slogans — they are enforced structurally by the protocol.

**Verifiability over trust**  
QKP does not assume trust. Every meaningful action must be provable through cryptographic evidence.

**Structure over interpretation**  
Accountability emerges from explicit causal structures, not from informal narratives or mutable logs.

**Cryptography before policy**  
Cryptographic validity is evaluated first. Trust policies are applied only after facts are verified.

**Auditability without surveillance**  
QKP produces audit-grade evidence by construction, without requiring continuous monitoring or invasive observation.

**Federation without centralization**  
Independent systems can coordinate and compose accountability without surrendering sovereignty.

QKP does not decide what should be trusted.  
It provides the evidence required to decide whether something can be trusted.

---

## Protocol Status

QuantumKey Protocol (QKP) includes executable reference flows, conformance definitions, and cryptographically verifiable accountability primitives.

The protocol is frozen at **Baseline v0.1**.

---

## Core References

**Threat Model**  
docs/THREAT_MODEL_v0.1.md  

**QIE Minimal Profile**  
docs/QIE_MINIMAL_PROFILE_v0.1.md  

**Semantic Signature**  
docs/SEMANTIC_SIGNATURE_v0.1.md  

**Acceptance Receipt**  
docs/ACCEPTANCE_RECEIPT_v0.1.md  

**Reference Flow**  
docs/REFERENCE_FLOW_v0.1.md  

**Conformance Matrix**  
docs/CONFORMANCE_MATRIX_v0.1.md  

**Security Invariants**  
docs/SECURITY_INVARIANTS_v0.1.md  

**Baseline Definition**  
docs/BASELINE_V0.1.md  

---

## Authorship & Affiliation

Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

Not affiliated with any similarly named projects (QKey, QSAVE, or others).

---

## Baseline Authority & Versioning

The authority of Baseline v0.1 is formally established through the following documents:

**Baseline definition**  
docs/BASELINE_V0.1.md  

**Protocol freeze declaration**  
docs/PROTOCOL_FREEZE_v0.1.md  

**Versioning rules**  
docs/VERSIONING.md  

**Change history**  
CHANGELOG.md  

Together, these documents define the immutable semantic boundary of QKP v0.1.

---

## Closing Perspective

QuantumKey Protocol is not an opinion about how systems should behave.  
It is a structure that records how systems did behave — and under which declared rules that behavior was accepted or rejected.

By separating:

- intent from execution  
- evidence from interpretation  
- verification from trust  

QKP enables accountability without central authority, governance without opacity, and coordination without implicit assumptions.

This repository is intentionally designed to be:

- **Readable** — concepts before complexity  
- **Executable** — behavior before theory  
- **Verifiable** — evidence before trust  

If you can run the reference flow, inspect the artifacts, and verify the outcomes, you do not need to believe in QuantumKey Protocol.

You can verify it.

That is the protocol’s core promise.
