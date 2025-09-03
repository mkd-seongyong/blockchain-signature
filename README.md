# README.md

# 블록체인 전자서명 프로젝트

이 프로젝트는 블록체인 기술을 활용한 전자서명 시스템을 구현하는 것을 목표로 합니다. 클라이언트와 서버로 구성되어 있으며, 사용자가 전자서명을 생성하고 검증할 수 있는 기능을 제공합니다.

## 프로젝트 구조

```
blockchain-signature
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── SignatureForm.tsx
│   │   │   └── TransactionList.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   └── Verify.tsx
│   │   ├── utils
│   │   │   └── crypto.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── server
│   ├── src
│   │   ├── controllers
│   │   │   └── signatureController.ts
│   │   ├── routes
│   │   │   └── api.ts
│   │   ├── services
│   │   │   └── blockchainService.ts
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## 클라이언트

- **SignatureForm.tsx**: 전자 서명을 입력받는 폼 컴포넌트
- **TransactionList.tsx**: 블록체인 거래 목록을 표시하는 컴포넌트
- **Home.tsx**: 애플리케이션의 홈 페이지
- **Verify.tsx**: 서명을 검증하는 페이지
- **crypto.ts**: 암호화 관련 유틸리티 함수

## 서버

- **signatureController.ts**: 서명 관련 요청을 처리하는 컨트롤러
- **api.ts**: API 라우트 정의
- **blockchainService.ts**: 블록체인과 상호작용하는 서비스 로직
- **app.ts**: 서버 애플리케이션의 진입점

## 시작하기

1. 클라이언트와 서버 디렉토리에서 각각 `npm install`을 실행하여 의존성을 설치합니다.
2. 클라이언트 디렉토리에서 `npm start`를 실행하여 클라이언트 애플리케이션을 시작합니다.
3. 서버 디렉토리에서 `npm start`를 실행하여 서버 애플리케이션을 시작합니다.

## 기여

기여를 원하시면 이 저장소를 포크하고 풀 리퀘스트를 제출해 주세요.