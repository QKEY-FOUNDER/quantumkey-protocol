# QuantumKey Protocol — Reputation & History Layer v0.1

This document defines the Reputation and History Layer (RHL) of the QuantumKey Protocol (QKP).

The RHL establishes how identities accumulate history,
how trust emerges from provable behavior,
and how the past becomes an immutable part of future decisions.

This layer is normative.

---

## 1. Purpose

The Reputation & History Layer exists to ensure that:

• identities have memory  
• behavior has consequences  
• trust becomes computable  

Without this layer, QKP could prove isolated truths.
With it, QKP proves who has been consistently truthful over time.

---

## 2. What Reputation Means in QKP

In QKP, reputation is not:
• social opinion  
• popularity  
• off-chain ratings  

Reputation is:
**the cryptographically provable history of actions, disputes, and outcomes
associated with a QKP identity.**

---

## 3. Reputation Sources

An identity’s reputation is derived exclusively from:

• published intentions  
• executed outcomes  
• disputes won or lost  
• slashing events  
• validated checkpoints  

Every reputation event is anchored in Ethereum.

Nothing else counts.

---

## 4. Reputation Record

For every QKP Identity, the protocol defines a Reputation Record:

ReputationRecord {
  qkp_id
  total_intentions
  successful_executions
  failed_executions
  disputes_won
  disputes_lost
  slashed_amount
  total_stake
  last_updated_block
}

This record is derived from on-chain events and is verifiable by anyone.

---

## 5. Immutability of History

Past behavior can never be deleted, hidden, or rewritten.

Key rotations do not reset reputation.
New wallets do not erase history.

Identity is continuous.

---

## 6. How Reputation Is Used

Reputation may be used by:

• L2 execution layers  
• governance modules  
• staking and slashing logic  
• agent selection  
• delegation systems  

However, QKP itself does not judge what is “good”.

It only provides the evidence.

---

## 7. Reputation Is Not Forgivable by Default

QKP does not allow:
• reputation resets  
• history erasure  
• “starting fresh”  

Redemption must be earned through:
• new honest actions  
• successful executions  
• dispute victories  

Time alone does not heal lies.

---

## 8. Economic Link

Reputation is bound to stake.

A high-reputation identity with low stake is weak.
A high-stake identity with bad reputation is dangerous.

Only the combination is powerful.

---

## 9. Protocol Invariant

At all times:

> Who you are in QKP is what you have proven over time.

Nothing else.

---

## 10. Why This Exists

This layer ensures QKP does not become:
• a playground for sybils  
• a casino of fake agents  
• a theatre of governance  

It becomes:
a system where identity, memory, and consequence are inseparable.

This is how civilizations form.
