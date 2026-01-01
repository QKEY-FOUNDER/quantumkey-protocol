# GLOSSARY — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

This glossary defines the canonical meaning of terms used throughout the QuantumKey Protocol (QKP).

All terms in this document are normative unless explicitly stated otherwise.

## Acceptance Receipt

A cryptographically signed artifact that records an explicit trust decision (ACCEPT, REJECT, or CONDITIONAL) for a given intent under a specific policy and execution mode.

Acceptance Receipts record responsibility.
They do not enforce execution.

## Actor

An entity capable of issuing intents or decisions within QKP.

Actors are identified by DID-QKEY and classified as HID, AID, CID, or SID.

## AID (Agent Identifier)

An identifier representing an autonomous or semi-autonomous agent.

AIDs are typically time-bound, have limited scope, and MUST NOT be treated as moral authorities.

## Auditability

The property that all protocol-relevant decisions and actions can be independently verified after the fact using cryptographic evidence.

Auditability does not imply surveillance.

## Canonicalization

The deterministic normalization of data structures prior to hashing or signing, ensuring identical semantic inputs always produce identical cryptographic outputs.

## Causal Chain

A verifiable sequence of artifacts where each artifact references its direct predecessor, forming a cryptographic graph of intent, evaluation, and decision.

## CID (Contract Identifier)

An identifier representing a smart contract or deterministic program acting within QKP.

## Confidence Score

A normalized value (0.0–1.0) representing a semantic validator’s confidence in its evaluation.

Confidence is not truth.

## Conformance

The degree to which an implementation satisfies the MUST requirements defined in the Conformance Matrix.

## Context

The execution environment and situational scope in which an intent is declared and evaluated.

Context limits validity and prevents replay.

## DID-QKEY

The decentralized identifier format used by QKP to represent actors.

DID-QKEY resolves to cryptographic keys and capability metadata.

## Execution Mode

A declared constraint on how an intent may be executed.

Defined modes are SIMULATION, SOFT, and STRICT.

## Federation

A model in which multiple independent verifiers apply their own policies to shared facts without requiring centralized authority or global consensus.

## HID (Human Identifier)

An identifier representing a human participant.

HIDs are required for ultimate accountability and governance decisions.

## Intent

A declarative statement of what an actor requests or authorizes to occur.

Intents are facts, not commands.

## Intent Envelope (QIE)

A structured, signed container that binds intent, context, identity, and cryptographic proof.

## Nonce

A cryptographically random value used once to prevent replay attacks.

## Policy

A rule set applied by a verifier to evaluate semantic meaning and decide trust.

Policies are local and sovereign.

## Replay Resistance

The property that prevents reuse of a valid artifact outside its intended context or time window.

## Semantic Hash

A deterministic hash representing the normalized meaning of an intent.

It binds semantic evaluation to declared meaning.

## Semantic Signature

A cryptographically signed evaluation of an intent’s semantic meaning under a specific policy and validator.

Semantic Signatures do not enforce execution.

## Semantic Validator

An entity (human, algorithmic, or hybrid) that evaluates intent semantics under a declared policy and produces a Semantic Signature.

## SID (System Identifier)

An identifier representing a deterministic system or infrastructure component.

## Trust Decision

An explicit declaration by an accountable actor that an intent is accepted, rejected, or conditionally accepted.

Trust decisions are recorded via Acceptance Receipts.

## TTL (Time To Live)

A declared validity duration after which an artifact is no longer valid.

## Verifiable Accountability

The core principle of QKP: responsibility, intent, and trust decisions must be cryptographically provable and independently auditable.

## Versioning

The mechanism by which protocol artifacts evolve while preserving backward verification.

## What This Glossary Is Not

This glossary does not define:
- moral truth  
- legal authority  
- physical-world causation  

It defines only protocol semantics.
