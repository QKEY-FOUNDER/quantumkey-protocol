# NGI Zero — Risks, Gaps and Mitigation  
**QuantumKey Protocol (QKP)**

---

## 1. Technical Risks

### R1 — Semantic Verification Maturity
Risk:  
Semantic validation relies on AI models and policy definitions that may evolve or behave unpredictably.

Mitigation:
- All semantic validators are versioned, hashed and referenced explicitly
- Multiple validators can coexist
- Divergence is recorded, not hidden
- Acceptance is policy-based and auditable

This ensures semantic drift is visible and governable.

---

### R2 — Cryptographic Misuse or Integration Errors
Risk:  
Incorrect implementation of canonicalization, hashing or signatures could break security guarantees.

Mitigation:
- Deterministic canonicalization rules
- Conformance tests for every invariant
- Independent reproducibility of hashes and signatures
- Reference vectors published

---

### R3 — Complexity of Accountability Graphs
Risk:  
Large causal graphs and aggregates could become difficult to interpret or process.

Mitigation:
- Hierarchical and windowed aggregation
- Deterministic graph traversal
- Layered verification
- Human-readable audit tools

---

## 2. Adoption Risks

### R4 — High Conceptual Novelty
Risk:  
QKP introduces concepts unfamiliar to most developers (intent, semantic signatures, attested trust).

Mitigation:
- Step-by-step reference flows
- Minimal profiles
- Progressive adoption path
- Clear separation of optional vs mandatory features

---

### R5 — Fragmentation Across Implementations
Risk:  
Different teams may interpret the protocol differently.

Mitigation:
- Normative baseline freeze
- Conformance matrix (C1–C20)
- Reproducible test vectors
- Explicit versioning

---

## 3. Legal and Regulatory Risk

Risk:  
QKP may be misinterpreted as a financial, crypto-asset or investment platform.

Mitigation:
- Explicit regulatory positioning
- Academic anchoring via Zenodo DOI
- No token issuance or network operation
- Clear separation between protocol and deployments

---

## 4. Team Gaps

Current state:
- Strong protocol, cryptography, architecture and systems design
- Limited UX, developer onboarding and formal verification resources

Mitigation:
- NGI funding is used to engage:
  - independent cryptography reviewers
  - developer documentation specialists
  - security auditors

---

## 5. Why This is a Low-Risk, High-Impact Grant

QKP already exists as:
- a complete specification
- a working SDK
- a frozen academic baseline

NGI Zero funding is not used to invent the protocol.
It is used to make it **reproducible, verifiable and usable** by the European public.

This makes QKP an unusually safe and high-leverage investment for NGI.
