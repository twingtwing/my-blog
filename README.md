# My Blog — React 학습용 사이드 프로젝트

메모 + 블로그 형태의 웹앱을 만들며 React를 기초부터 익히는 프로젝트.
백엔드 구현 없이 프론트엔드 학습에 집중.

## 기술 스택

### Frontend
- React 19 + Vite + TypeScript
- React Router
- axios
- Tailwind CSS

### Backend (BaaS)
- Supabase (PostgreSQL — DB / API / 인증)

### 배포
- Vercel

### 개발 도구
- Claude Code — 설계, 디버깅, 코드 리뷰
- Cursor — 반복 코드 생성

> TanStack Query, Zustand 등은 처음부터 도입하지 않고,
> 직접 불편함을 겪은 뒤 필요할 때 단계적으로 추가한다.

## 학습 로드맵

- [ ] React 기본기 — 컴포넌트, props, useState, 리스트 렌더링(map), useEffect
- [ ] React Router — 목록 / 상세 / 작성 페이지 나누기
- [ ] Supabase 연동 — 진짜 DB로 CRUD
- [ ] 인증 — Supabase Auth로 로그인 / 회원가입
- [ ] 리팩토링 — TanStack Query 도입
- [ ] 배포 — Vercel 배포 + 환경변수 설정

## 핵심 기능

- 글 목록 / 상세 조회
- 글 작성 / 수정 / 삭제
- 로그인 / 회원가입