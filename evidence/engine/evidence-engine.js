// QuantumKey Protocol — Evidence Engine (Bootstrap v0)

import { QKP_GENESIS_HASH, assertGenesisAnchor } from "../../js/qkp-anchor.js";

const evidenceLedger = [];

export function registerEvidence(evidence) {
  // Enforce Genesis Anchor presence
  assertGenesisAnchor();

  if (!evidence || typeof evidence !== "object") {
    throw new Error("Invalid evidence object");
  }

  if (
    !evidence.genesis_anchor ||
    evidence.genesis_anchor.hash_sha256 !== QKP_GENESIS_HASH
  ) {
    throw new Error("Evidence not bound to QKP Genesis Anchor");
  }

  const record = {
    evidence,
    recorded_at_utc: new Date().toISOString(),
    genesis_hash: QKP_GENESIS_HASH
  };

  evidenceLedger.push(record);

  return record;
}

export function getEvidenceLedger() {
  return [...evidenceLedger];
}
