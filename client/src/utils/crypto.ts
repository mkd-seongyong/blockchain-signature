// 브라우저 Web Crypto API를 활용한 서명/검증 유틸

export async function generateKeyPair() {
  return await crypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" },
    true,
    ["sign", "verify"]
  );
}

export async function signData(privateKey: CryptoKey, data: string) {
  const enc = new TextEncoder();
  const signature = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    privateKey,
    enc.encode(data)
  );
  return arrayBufferToHex(signature);
}

export async function verifySignature(publicKey: CryptoKey, data: string, signatureHex: string) {
  const enc = new TextEncoder();
  const signature = hexToArrayBuffer(signatureHex);
  return await crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" },
    publicKey,
    signature,
    enc.encode(data)
  );
}

function arrayBufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToArrayBuffer(hex: string) {
  const bytes = new Uint8Array(hex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
  return bytes.buffer;
}
