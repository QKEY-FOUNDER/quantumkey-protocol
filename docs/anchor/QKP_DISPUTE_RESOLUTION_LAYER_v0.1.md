# QuantumKey Protocol — Dispute Resolution Layer v0.1

This document defines the Dispute Resolution Layer (DRL) of the QuantumKey Protocol (QKP).

The DRL specifies how contested claims, executions, and state checkpoints
are challenged, verified, and ultimately resolved through Ethereum L1.

It is a normative protocol layer.
Any system claiming QKP compatibility MUST implement its semantics.

---

## 1. Purpose

The Dispute Resolution Layer exists to ensure that:

• False statements have economic and cryptographic consequences  
• Honest behavior is defensible against adversarial systems  
• L2 execution environments cannot override L1 truth  

Without this layer, QKP would be a ledger of claims.
With it, QKP becomes a system of enforceable reality.

---

## 2. Ontological Position

In QKP, truth is not decided by:

• majority vote  
• reputation  
• authority  
• social consensus  

Truth is decided by:
**cryptographic evidence anchored in Ethereum L1.**

The Dispute Resolution Layer connects:
fast, fallible execution (L2)
to
slow, absolute adjudication (Ethereum).

---

## 3. What Can Be Disputed

The following objects are disputable:

• A published Intention  
• A reported Execution Result  
• A State Checkpoint  
• A Claim of compliance with an Intention  

Disputes always refer to:
a hash anchored in Ethereum.

No off-chain assertion is valid without an on-chain reference.

---

## 4. Dispute Trigger

Any QKP Identity may open a dispute by submitting:

• the disputed hash  
• a claim of invalidity  
• a cryptographic bond (stake)

The Dispute Contract records:

• disputant identity  
• target hash  
• timestamp  
• bond amount  

This creates a **Dispute Record** anchored in Ethereum.

---

## 5. Burden of Proof

The entity that published the disputed hash MUST respond by providing:

• the original signed data  
• execution traces (if applicable)  
• cryptographic proofs  
• any required intermediate artifacts  

Failure to respond before the dispute window expires
is considered an admission of fault.

---

## 6. Evidence Evaluation

Evidence is evaluated deterministically using:

• hash matching  
• signature validation  
• protocol rules defined in:
  - QKP-INT v0.1
  - QKP Anchor Layer
  - QKP State Model

No human interpretation is required.

If hashes, signatures, or rules do not align, the claim fails.

---

## 7. Resolution Outcomes

A dispute MUST resolve to one of:

### VALID
The challenged statement is correct.

The disputant loses their bond.

### INVALID
The challenged statement is false or unverifiable.

The publisher of the statement is penalized.

### UNPROVABLE
Required evidence was not provided.

Treated as INVALID.

---

## 8. Economic Consequences

When a statement is ruled INVALID:

• The publisher’s stake is slashed  
• The disputant receives a reward  
• The false state is cryptographically marked as invalid  

This ensures:
lying is expensive  
truth is profitable  

---

## 9. State Finality

Once a dispute is resolved:

• the verdict is anchored in Ethereum  
• the corresponding state is frozen  
• it becomes part of the immutable QKP history  

No future computation may contradict it.

---

## 10. L2 Integration Rule

L2 systems executing QKP logic MUST:

• accept Ethereum dispute verdicts  
• roll back or override invalidated states  
• propagate corrections  

Failure to do so makes the L2 non-compliant with QKP.

---

## 11. Protocol Invariant

At all times:

> If two systems disagree, the one anchored in Ethereum is correct.

This is not a governance rule.
It is a law of the protocol.

---

## 12. Why This Exists

The Dispute Resolution Layer ensures that:

• Power follows proof  
• Truth beats speed  
• Law beats chaos  

QKP is not built to be fast.
It is built to be impossible to lie to.

This layer is what makes that true.
