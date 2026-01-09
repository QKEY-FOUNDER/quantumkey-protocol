---
title: "QuantumKey Protocol (QKP)"
---

# QuantumKey Protocol (QKP)

**A protocol for verifiable accountability across autonomous and federated systems**

**Baseline:** v0.1 (frozen)  
**Year:** 2025  
**Author:** Mihail Chiosa  
**Collaborative Intelligence:** Quantum Hammer  

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18172464.svg)](https://doi.org/10.5281/zenodo.18172464)

---

## What is QuantumKey Protocol?

QuantumKey Protocol (QKP) is a protocol for **verifiable accountability**.

It defines how:
- intent is declared,
- actions are executed,
- and trust decisions are made

in a way that is:
- cryptographically provable,
- causally traceable,
- and independently auditable.

QKP replaces implicit trust with:
- canonical data structures,
- cryptographic signatures,
- explicit causality,
- and signed acceptance decisions.

It does not assume trust.  
It makes trust **verifiable**.

---

## Academic Reference (Canonical)

The authoritative academic baseline of QKP is archived and citable via Zenodo:

**QuantumKey Protocol (QKP) — Academic Release v0.1**  
DOI: https://doi.org/10.5281/zenodo.18172464  

This website and repository represent the **canonical technical baseline** corresponding to that academic release.

- Baseline v0.1 is frozen and authoritative.
- No protocol semantics have changed since archival.
- All institutional or academic references MUST cite the Zenodo DOI above.

---

## Canonical Reference Flow

The QuantumKey Protocol defines a **normative end-to-end reference flow** describing how an intent moves through:

1. Declaration  
2. Semantic evaluation  
3. Trust decision  
4. Execution  
5. Audit  

This flow is formally specified in:

📄 `docs/REFERENCE_FLOW_v0.1.md`

All implementations MUST conform to this flow.

---

## How to Verify QKP

This site and repository define the **normative protocol**.

The canonical executable reference implementation is provided by the QKP SDK:

https://github.com/QKEY-FOUNDER/qkp-sdk

To execute the normative reference flow:

```bash
git clone https://github.com/QKEY-FOUNDER/qkp-sdk
cd qkp-sdk
npm install
node examples/reference-flow.js
```
This implements the flow defined in docs/REFERENCE_FLOW_v0.1.md.  
If you can run it and verify the generated artifacts, you understand the protocol.

## Canonical Entry Points

**Documentation hub**  
docs/index.md  

**Canonical protocol statement**  
docs/CANONICAL_STATEMENT.md  

**Normative protocol specification**  
docs/protocol-spec.md  

**Whitepaper (design rationale)**  
docs/WHITEPAPER.md  

**Conformance definition**  
docs/conformance.md  

---

## Protocol Status

QuantumKey Protocol (QKP) includes:
- a frozen protocol baseline  
- a threat model  
- a minimal intent format (QIE)  
- semantic signatures  
- acceptance receipts  
- a full conformance matrix  
- security invariants  

The protocol is frozen at **Baseline v0.1**.

---

## Scope and Nature

QuantumKey Protocol is:
- a protocol specification  
- an academic and engineering reference  
- a verifiable accountability architecture  

It is not:
- a financial product  
- a crypto-asset  
- a network  
- a deployed system  
- a service  

Any future systems derived from QKP must be evaluated independently.

---

## Final Note

QuantumKey Protocol does not ask to be believed.  
It asks to be verified.

If you can inspect the documents, run the reference flow, and validate the outputs, the protocol speaks for itself.
