# 메모 + 블로그 사이드 프로젝트

React + Spring Boot 기반 개인 학습용 프로젝트. 프론트엔드 학습에 비중을 두고, Claude Code / Cursor 등 AI 도구를 활용한 개발(바이브 코딩)도 함께 연습.

## 기술 스택

### Frontend
- React 19 + Vite + TypeScript
- React Router v6
- TanStack Query v5 (서버 상태)
- Zustand (클라이언트 상태)
- Tailwind CSS
- React Hook Form + Zod
- @uiw/react-md-editor (마크다운 에디터)
- vite-plugin-pwa (PWA)

### Backend
- Spring Boot 3.x + Java 17
- Spring Data JPA
- Spring Security + JWT
- Swagger (OpenAPI)
- PostgreSQL
- Spring AI (요약/태그 추천 등 AI 기능)

### 배포
- Frontend: Vercel
- Backend: Railway
 

## Backend 설정

### 사전 준비
- JDK 17 이상 설치 필요
  ```bash
  java -version
  ```

### 프로젝트 생성
- Spring Initializr (start.spring.io) 또는 Claude Code로 생성
- 설정값:
  - Project: Gradle 또는 Maven
  - Language: Java
  - Packaging: **Jar**
  - Java: 21
  - Dependencies: Spring Web, Spring Data JPA, Spring Security, PostgreSQL Driver, Lombok


## 개발 도구

- **Claude Code**: 아키텍처 설계, 디버깅, 코드 리뷰
- **Cursor**: 반복적인 CRUD 보일러플레이트 생성
- **Spring AI**: 서비스 내 AI 기능 구현 (요약, 태그 추천 등)