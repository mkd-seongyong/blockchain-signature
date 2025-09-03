// docRegisterReq.ts
export interface DocRegisterReq {
  data: string;
}

// docRegisterRes.ts
export interface DocRegisterRes {
  docHash: string;
}

// signReq.ts
export interface SignReq {
  data: string;
  signature: string;
  signerAddress: string;
}

// signRes.ts
export interface SignRes {
  txHash: string;
}

// verifyReq.ts
export interface VerifyReq {
  data: string;
  signature: string;
  signerAddress: string;
}

// verifyRes.ts
export interface VerifyRes {
  valid: boolean;
}
