# Architecture Overview

QuantumKey Protocol (QKP) is structured as a dual-layer system:

## Normative Layer

The normative layer defines protocol meaning, accountability semantics, and verifiable intent.
It represents the source of truth and must remain stable, minimal, and auditable.

Currently normative by intent:
- Markdown documents defining protocol rules, positions, and commitments
- md-renderer.js (normative Markdown interpretation)

## Presentational Layer

The presentational layer is responsible for visualization and user experience.
It may evolve independently without affecting protocol truth.

Currently presentational by intent:
- viewer.html
- CSS stylesheets
- UI-related JavaScript

This separation is intentional and foundational.
The protocol defines truth; the viewer renders it.

# QuantumKey Protocol — Architectural Semantics

This repository follows a dual-layer architecture (Path C):

## 1. Normative Layer
The normative layer defines what is true, valid, and accountable in the protocol.

Characteristics:
- Minimal
- Deterministic
- Verifiable
- Presentation-agnostic

Directory:
- normative/

Notes:
- Normative artifacts define protocol meaning.
- They must remain stable and auditable.
- Rendering and UI are explicitly out of scope.

## 2. Presentational Layer
The presentational layer defines how protocol artifacts are displayed to humans.

Characteristics:
- Non-normative
- Replaceable
- UX-oriented
- May evolve independently

Directory:
- presentational/

Notes:
- Presentational artifacts MUST NOT define truth.
- They may consume normative outputs.
- Multiple viewers may coexist.

## Architectural Principle

> The protocol defines reality.  
> The viewer interprets it.

This separation is intentional and foundational.
