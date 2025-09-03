# README.md for the Server Application

# Blockchain Signature Server

이 프로젝트는 블록체인 기반 전자 서명 시스템의 서버 측 구현입니다. 이 서버는 클라이언트 애플리케이션과 통신하여 서명 생성 및 검증 기능을 제공합니다.

## 기술 스택

- Node.js
- Express
- TypeScript

## 설치

1. 이 저장소를 클론합니다.
   ```bash
   git clone <repository-url>
   ```

2. 서버 디렉토리로 이동합니다.
   ```bash
   cd blockchain-signature/server
   ```

3. 의존성을 설치합니다.
   ```bash
   npm install
   ```

## 실행

서버를 실행하려면 다음 명령어를 사용하세요.

```bash
npm start
```

서버가 실행되면 기본적으로 `http://localhost:3000`에서 접근할 수 있습니다.

## API 엔드포인트

- `POST /api/signature`: 서명을 생성합니다.
- `GET /api/signature/verify`: 서명을 검증합니다.

## 기여

기여를 원하신다면, 이 저장소를 포크한 후 변경 사항을 제안해 주세요.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.