import { Router } from "express";
import { SignController } from "../controllers/signController";

// Spring의 @RestController의 @RequestMapping과 유사한 역할
const router = Router();

// 등록 (문서 원본을 해시로 고정)
router.post("/documents", SignController.register);

// 검증 (문서와 서명이 일치하는지 확인)
router.post("/verify", SignController.verify);

// 서명 (블록체인에 서명 기록)
router.post("/signatures", SignController.sign);

export default router;
