import React, { useState } from "react";
import { generateKeyPair, signData, verifySignature } from "../utils/crypto";
import { registerDocument } from "../api/document";
import { sendTransaction } from "../api/transaction";

const SignButton: React.FC = () => {
  const [result, setResult] = useState<string>("");

  // 브라우저용 ArrayBuffer → Hex 변환
  const arrayBufferToHex = (buffer: ArrayBuffer) => {
    const byteArray = new Uint8Array(buffer);
    return Array.from(byteArray)
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleSignAndSend = async () => {
    try {
      // 1️⃣ 문서 등록
      const payload = JSON.stringify({ user: "Alice", amount: 100 });
      const docHash = await registerDocument(payload);
      console.log("등록된 문서 해시:", docHash);

      // 2️⃣ 키 쌍 생성 (CryptoKey)
      const { publicKey, privateKey } = await generateKeyPair();

      // 3️⃣ 문서 해시로 서명
      const signature = await signData(privateKey, docHash);

      // 4️⃣ 서명 검증 (로컬)
      const isValid = await verifySignature(publicKey, docHash, signature);
      console.log("서명:", signature);
      console.log("서명 검증:", isValid);

      // 5️⃣ publicKey를 문자열로 변환 (브라우저 호환)
      const exportedPublicKey = await crypto.subtle.exportKey("spki", publicKey);
      const publicKeyStr = arrayBufferToHex(exportedPublicKey);

      // 6️⃣ 서버로 서명 전송
      const response = await sendTransaction(docHash, signature, publicKeyStr);

      // 7️⃣ 결과 출력
      setResult(
        JSON.stringify(
          {
            docHash,
            signature,
            signerAddress: publicKeyStr,
            isValid,
            serverResponse: response
          },
          null,
          2
        )
      );
    } catch (err: any) {
      setResult(err.message);
    }
  };

  return (
    <div>
      <button
        onClick={handleSignAndSend}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        문서 등록 → 서명 → 서버 전송
      </button>

      {result && <pre className="mt-4 p-2 bg-gray-100 rounded">{result}</pre>}
    </div>
  );
};

export default SignButton;
