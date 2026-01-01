# VERSIONING — QuantumKey Protocol (QKP)

Version: v1.0  
Status: Active  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the versioning rules of the QuantumKey Protocol (QKP).

Its goal is to ensure:
- semantic stability
- long-term auditability
- safe evolution without historical mutation

Versioning in QKP is **protocol-centric**, not feature-centric.

---

## 1. Versioning Model

QKP follows a **Baseline Versioning Model**.

Each baseline version represents a **frozen, authoritative definition** of the protocol.

A version number is expressed as:

vMAJOR.MINOR

Where:
- **MAJOR** = semantic baseline  
- **MINOR** = additive extensions within the same baseline  

---

## 2. Baseline Versions (MAJOR)

A **baseline version** defines:
- core semantics
- security invariants
- conformance rules
- meaning of protocol artifacts

Once frozen, a baseline:
- MUST NOT change
- MUST remain auditable forever
- MUST be explicitly superseded by a new baseline

### Example

- v0.1 → first frozen baseline  
- v1.0 → future baseline with expanded semantics  

---

## 3. Minor Versions (MINOR)

Minor versions represent **additive, non-breaking extensions** to a baseline.

Minor versions:
- MUST preserve all baseline semantics  
- MUST NOT weaken security invariants  
- MUST NOT invalidate existing artifacts  
- MAY introduce optional fields, policies, or extensions  

### Example

- v0.1 → baseline  
- v0.2 → additive extensions  
- v0.3 → further extensions  

All remain auditable as v0.x.

---

## 4. What Constitutes a Breaking Change

A change is considered **breaking** if it:

- Alters the meaning of an existing artifact  
- Changes semantic interpretation of intents  
- Weakens security invariants  
- Invalidates prior conformance tests  
- Reinterprets previously valid data  

Breaking changes REQUIRE a new MAJOR baseline.

---

## 5. Freeze and Version Authority

A version becomes authoritative only when:

- A baseline document exists  
- A protocol freeze is declared  
- A changelog entry records the freeze  

For v0.1, authority is established by:

- BASELINE_V0.1.md  
- PROTOCOL_FREEZE_v0.1.md  
- CHANGELOG.md  

---

## 6. Relationship to CHANGELOG

- CHANGELOG.md records **what changed**  
- VERSIONING.md defines **how change is allowed**  
- BASELINE documents define **what is frozen**  

No single document overrides the others.  
They form a closed authority loop.

---

## 7. Artifact Versioning

Individual artifacts:
- MUST declare the baseline they belong to  
- MAY include internal version numbers  
- MUST remain interpretable under their original baseline  

Artifacts MUST NOT silently migrate between baselines.

---

## 8. Forward Compatibility

Newer implementations:
- MUST be able to audit older baselines  
- MUST detect baseline mismatches explicitly  
- MUST NOT assume implicit upgrades  

Backward auditability is mandatory.

---

## 9. Invalid Versioning Practices

The following are forbidden:

- Overwriting frozen artifacts  
- Renaming versions retroactively  
- Silent semantic drift  
- Claiming compliance without baseline reference  

If ambiguity arises, the frozen baseline prevails.

---

## 10. Final Statement

Versioning in QKP exists to protect truth over time.

Evolution is permitted.  
History is not.

---

## 11. Related Documents

- BASELINE_V0.1.md  
- PROTOCOL_FREEZE_v0.1.md  
- CHANGELOG.md  
- SECURITY_INVARIANTS_v0.1.md
