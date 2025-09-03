import { Request, Response } from "express";
import { DocumentService } from "../services/documentService";
import { BlockchainService } from "../services/blockchainService";

const documentService = new DocumentService();
const blockchainService = new BlockchainService();

// Spring의 @RestController와 유사한 역할
export class SignController {
  // 문서 등록
  static register(req: Request, res: Response) {
    const { data } = req.body;
    if (!data) return res.status(400).json({ error: "Missing data" });
    const result = documentService.register(data);
    res.json(result);
  }

  // 문서 검증
  static verify(req: Request, res: Response) {
    const { data, signature, signerAddress } = req.body;
    if (!data || !signature || !signerAddress)
      return res.status(400).json({ error: "Missing parameters" });

    const result = documentService.verify({ data, signature, signerAddress });
    res.json(result);
  }

  // 서명 기록
  static async sign(req: Request, res: Response) {
    const { data, signature, signerAddress } = req.body;
    if (!data || !signature || !signerAddress)
      return res.status(400).json({ error: "Missing parameters" });

    const result = await blockchainService.recordSignature({ data, signature, signerAddress });
    res.json(result);
  }
}
