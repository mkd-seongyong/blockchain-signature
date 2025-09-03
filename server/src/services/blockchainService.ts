import { SignReq, SignRes } from "../models";

// Spring의 @Service와 유사한 역할
export class BlockchainService {
  // 서명 기록
  async recordSignature(req: SignReq): Promise<SignRes> {
    // TODO: Web3js를 이용해 온체인 제출
    // 예제에서는 모의 txHash 반환
    return { txHash: "0xFAKE_TX_HASH" };
  }
}


// web3.js를 이용한 실제 블록체인 연동 예시
// (Infura 등 외부 노드 서비스 필요)
// import Web3 from "web3";
// import { SignReq, SignRes } from "../models";

// export class BlockchainService {
//   private web3: Web3;
//   private account: any;
   
//     // Infura 또는 로컬 노드 URL
//     this.web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

//     // 테스트용 계정 (개발 환경에서는 .env로 관리 권장)
//     this.account = this.web3.eth.accounts.privateKeyToAccount("0x4c0883a69102937d6231471b5dbb6204fe512961708279f3c3e5e9e6e5f9e3a4");
//     this.web3.eth.accounts.wallet.add(this.account);
//     this.web3.eth.defaultAccount = this.account.address;
//   }

//   async recordSignature(req: SignReq): Promise<SignRes> {
//     try {
//       const dataToSign = JSON.stringify(req); // 또는 필요한 데이터만 추출

//       // 트랜잭션 생성
//       const tx = {
//         from: this.account.address,
//         to: this.account.address, // 자기 자신에게 보내는 트랜잭션 (데이터 저장 목적)
//         value: "0x0",
//         data: this.web3.utils.toHex(dataToSign),
//         gas: 200000,
//       };

//       const receipt = await this.web3.eth.sendTransaction(tx);

//       return { txHash: receipt.transactionHash.toString() };
//     } catch (error) {
//       console.error("트랜잭션 실패:", error);
//       throw new Error("Blockchain transaction failed");
//     }
//   }
// }
