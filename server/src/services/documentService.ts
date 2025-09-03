import { keccak256Hash } from "../utils/cryptoUtils";
import { SignReq, VerifyRes } from "../models/index";
import { verifySignature } from "../utils/signatureUtils";

// Spring의 @Service와 유사한 역할
export class DocumentService {
  // 문서 등록
  register(data: string) {
    const docHash = keccak256Hash(data);
    return { docHash };
  }

  // 문서 검증
  verify(req: SignReq): VerifyRes {
    const { data, signature, signerAddress } = req;
    const valid = verifySignature(data, signature, signerAddress);
    return { valid };
  }
}