// QuantumKey Protocol — Genesis Anchor (immutable)
export const QKP_GENESIS_HASH =
  "1fae7f558175b57ae58fc0da2b4b6c2d1cdfc18da8a81fe2e2b2b36186a0b2fa";

export function assertGenesisAnchor() {
  if (!QKP_GENESIS_HASH || QKP_GENESIS_HASH.length !== 64) {
    throw new Error("QKP Genesis Anchor missing or invalid");
  }
  return QKP_GENESIS_HASH;
}
