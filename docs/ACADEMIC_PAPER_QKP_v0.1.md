# QuantumKey Protocol (QKP): A Framework for Verifiable Accountability  
## Academic Positioning Paper — Baseline v0.1

**Author:** Mihail Chiosa  
**Affiliation:** Independent Research / QuantumKey Protocol  
**Date:** 2026-01-01  
**Protocol Baseline:** v0.1 (Frozen)  

---

## Abstract

Autonomous and federated systems increasingly require mechanisms that go beyond
implicit trust, post-hoc logging, and opaque governance. This paper introduces
the **QuantumKey Protocol (QKP)**, a protocol-level framework for **verifiable
accountability**. QKP defines how intent, semantic interpretation, trust decisions,
and auditability can be represented as explicit, cryptographically bound artifacts.
We present the motivation, design principles, and structure of QKP, describe the
frozen Baseline v0.1, and discuss its regulatory positioning under the EU Markets
in Crypto-Assets Regulation (MiCA). QKP is presented as a normative protocol
specification rather than a service or financial instrument, enabling adoption
in research and practice without implicit regulatory exposure.

---

## 1. Introduction

As distributed systems, autonomous agents, and cross-organizational workflows
become more prevalent, the question of **who decided what, when, and under which
assumptions** becomes critical. Traditional approaches rely on logs, centralized
authorities, or retrospective audits, which often fail to provide non-repudiable
and semantically precise accountability.

QuantumKey Protocol (QKP) addresses this gap by introducing a protocol-level
approach to accountability. Rather than enforcing behavior, QKP focuses on making
decisions **explicit, attributable, and auditable**. The protocol separates facts
from interpretation and interpretation from trust, enabling independent review
and governance without centralized control.

---

## 2. Related Work

Research on accountability in distributed systems spans several domains,
including audit logs, governance frameworks, distributed ledgers, and access
control systems. Prior work often conflates execution with authorization or
assumes trusted intermediaries.

QKP differs by:
- treating **intent** as a first-class artifact,
- explicitly modeling **semantic evaluation**,
- separating **trust decisions** from execution,
- enabling auditability without requiring consensus or custody.

This positions QKP closer to protocol specifications and reference architectures
than to operational platforms.

---

## 3. Overview of the QuantumKey Protocol

QKP is defined as a **normative protocol specification** composed of structured
artifacts and rules. At a high level, QKP introduces:

- **Quantum Intent Envelopes (QIE):** explicit declarations of intent.
- **Semantic Signatures:** bounded evaluations of meaning under declared policies.
- **Acceptance Receipts:** explicit trust decisions tied to intent and semantics.
- **Reference Flow:** a canonical sequence from intent to audit.
- **Security Invariants:** properties that must always hold.

QKP does not execute transactions, custody assets, or enforce outcomes. Its role
is to make accountability verifiable.

---

## 4. Baseline v0.1 and Protocol Freeze

All claims in this paper refer exclusively to **QuantumKey Protocol Baseline v0.1**,
which was formally frozen on **2026-01-01**.

Baseline v0.1 is defined by:
- a fixed set of normative documents,
- explicit security invariants,
- canonical examples,
- and a snapshot enumerating all normative files.

No semantic changes are permitted within this baseline. This freeze enables
reproducibility, long-term reference, and academic citation.

---

## 5. Normative Artifacts

Baseline v0.1 includes the following core artifacts:

- **Threat Model:** defines adversaries and mitigation boundaries.
- **QIE Minimal Profile:** specifies mandatory intent fields.
- **Semantic Signature Specification:** defines semantic evaluation artifacts.
- **Acceptance Receipt Specification:** defines trust decision artifacts.
- **Reference Flow:** defines the end-to-end lifecycle.
- **Conformance Matrix:** defines MUST/SHOULD requirements.
- **Security Invariants:** defines non-negotiable properties.

Together, these artifacts define the complete protocol surface.

---

## 6. Examples and Auditability

QKP provides **normative examples** that demonstrate valid protocol usage,
including:
- intent declaration,
- semantic evaluation,
- trust decision,
- and end-to-end audit replay.

These examples are designed to be copy-paste safe and independently auditable.
They serve as executable documentation for both implementers and reviewers.

---

## 7. Regulatory Positioning (MiCA)

Under the EU Markets in Crypto-Assets Regulation (MiCA), regulatory obligations
apply to issuers of crypto-assets and providers of crypto-asset services.
QKP, as a protocol specification, does not perform such activities.

QKP:
- does not issue crypto-assets,
- does not provide custody or execution,
- does not act as a Crypto-Asset Service Provider (CASP).

Its regulatory position is documented separately and monitored continuously.
This separation enables research and integration without implicit regulatory claims.

---

## 8. Limitations and Non-Goals

QKP intentionally does not address:
- execution or enforcement,
- economic incentives,
- consensus mechanisms,
- human uniqueness or identity proof,
- ethical or legal adjudication.

These concerns are left to higher-level systems or governance processes.

---

## 9. Conclusion

QuantumKey Protocol (QKP) proposes a structured approach to accountability in
autonomous and federated systems. By making intent, interpretation, and trust
explicit and auditable, QKP provides a foundation for governance without
centralization. Baseline v0.1 establishes a stable, frozen reference suitable for
academic citation, experimentation, and future extension. QKP demonstrates that
accountability can be treated as a protocol concern rather than an afterthought.

---

## References

1. Regulation (EU) 2023/1114 (Markets in Crypto-Assets Regulation — MiCA).  
2. Implementing Regulation (EU) 2025/304.  
3. ESMA Regulatory Technical Standards and Guidelines (2025).  
4. QuantumKey Protocol Baseline v0.1 Documentation, 2026.
