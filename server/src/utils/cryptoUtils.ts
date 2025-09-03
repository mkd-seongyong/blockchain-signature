import crypto from "crypto";
import { keccak256 } from "js-sha3";

/**
 * 파일 내용을 SHA-256으로 해싱
 * @param data 문자열 또는 버퍼
 * @returns 0x로 시작하는 16진수 문자열
 */
export function sha256Hash(data: string | Buffer): string {
  const bufferData = typeof data === "string" ? Buffer.from(data) : data;
  const hash = crypto.createHash("sha256").update(bufferData).digest("hex");
  return "0x" + hash;
}

/**
 * Keccak256 해시 생성 (Ethereum 온체인용)
 * @param data 문자열 또는 버퍼
 * @returns 0x로 시작하는 16진수 문자열
 */
export function keccak256Hash(data: string | Buffer): string {
  const bufferData = typeof data === "string" ? Buffer.from(data) : data;
  const hash = keccak256(bufferData);
  return "0x" + hash;
}
