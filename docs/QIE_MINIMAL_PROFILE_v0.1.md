# QIE_MINIMAL_PROFILE v0.1 — QuantumKey Protocol (QKP)

Version: v0.1  
Year: 2025  
Author: Mihail Chiosa  
Collaborative Intelligence: Quantum Hammer  

## 0. Purpose

This document defines the minimal, mandatory profile of the Quantum Intent Envelope (QIE) required for secure, interoperable, and auditable implementations of the QuantumKey Protocol (QKP).

The goal of this profile is to ensure that any developer can implement a compliant QIE in a single day, while preserving cryptographic accountability guarantees.

## 1. Design Goals

- Minimal surface area  
- Deterministic verification  
- Explicit intent and context  
- Strong replay resistance  
- Clear execution semantics  

## 2. Scope

This profile specifies:
- Mandatory fields  
- Mandatory validation rules  
- Mandatory execution semantics  

Anything not listed here is considered optional or out of scope for v0.1.

## 3. Mandatory Fields

Every QIE compliant with the minimal profile MUST include the following fields.

### 3.1 Envelope Metadata

- qie_version  
- intent_id  
- created_at  
- expires_at  
- nonce  

### 3.2 Actor Identity

- issuer_did  
- issuer_type (HID | AID | CID | SID)  

### 3.3 Intent Declaration

- intent_type  
- intent_payload  
- semantic_hash  

### 3.4 Execution Context

- execution_mode (SIMULATION | SOFT | STRICT)  
- context_id  
- parent_intent_id (optional but strongly recommended)  

### 3.5 Cryptographic Proof

- signature  
- signature_scheme  
- public_key_reference  

## 4. Mandatory Field Semantics

### intent_id
A globally unique identifier for the intent envelope.

### created_at / expires_at
Defines the valid execution window of the intent.
An expired QIE MUST be rejected.

### nonce
A cryptographically strong random value.
Used to prevent replay attacks.

### semantic_hash
A deterministic hash of the normalized semantic intent.
It MUST be computed after canonicalization.

### execution_mode

- SIMULATION: No real-world or irreversible effects allowed  
- SOFT: Effects allowed but reversible  
- STRICT: Effects allowed and irreversible  

Policies MAY restrict which modes are acceptable.

## 5. Mandatory Validation Rules

A QIE MUST be rejected if:

- expires_at < current_time  
- signature is invalid
