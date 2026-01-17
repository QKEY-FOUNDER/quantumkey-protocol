// QuantumKey Protocol — Local Observatory Ledger (v0)

import { registerEvidence } from "../../evidence/engine/evidence-engine.js";

const localLedger = [];

export function observeEvidence(evidence) {
  const record = registerEvidence(evidence);

  const observableEntry = {
    index: localLedger.length,
    genesis_hash: record.genesis_hash,
    evidence_type: evidence.evidence_type,
    recorded_at_utc: record.recorded_at_utc
  };

  localLedger.push(observableEntry);

  return observableEntry;
}

export function getLocalLedger() {
  return [...localLedger];
}
