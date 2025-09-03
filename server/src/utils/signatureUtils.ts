import { ecrecover, pubToAddress, toBuffer, hashPersonalMessage } from "ethereumjs-util";

// Keccak256 해시 함수
export function verifySignature(message: string, signatureHex: string, expectedAddress: string): boolean {
  const messageBuffer = Buffer.from(message);
  const msgHash = hashPersonalMessage(messageBuffer); // EIP-191
  const sig = Buffer.from(signatureHex.slice(2), "hex");

  const r = sig.slice(0, 32);
  const s = sig.slice(32, 64);
  const v = sig[64];

  const pubKey = ecrecover(msgHash, v, r, s);
  const addrBuffer = pubToAddress(pubKey);
  const recovered = "0x" + addrBuffer.toString("hex");

  return recovered.toLowerCase() === expectedAddress.toLowerCase();
}
