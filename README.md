# My Blog — React 학습용 사이드 프로젝트

메모 + 블로그 형태의 웹앱을 만들며 React를 기초부터 익히는 프로젝트.
백엔드 구현 없이 프론트엔드 학습에 집중하는 구조로 구성.

## 기술 스택

### Frontend
| 영역 | 기술 |
|---|---|
| 코어 | React 19 + Vite + TypeScript |
| 라우팅 | React Router |
| HTTP 통신 | axios |
| 스타일 | Tailwind CSS |

### Backend (BaaS)
| 영역 | 기술 |
|---|---|
| DB / API / 인증 | Supabase (PostgreSQL) |

### 배포
| 영역 | 서비스 |
|---|---|
| 프론트엔드 | Vercel |

### 개발 도구
| 도구 | 용도 |
|---|---|
| Claude Code | 설계, 디버깅, 코드 리뷰 |
| Cursor | 반복 코드 생성 |

> TanStack Query, Zustand 등의 라이브러리는 처음부터 도입하지 않고,
> 직접 불편함을 겪은 뒤 필요할 때 단계적으로 추가한다.
 
 

## 학습 로드맵

- [ ] **1. React 기본기** — 컴포넌트, props, useState, 리스트 렌더링(map), useEffect
  - 더미 데이터로 카드 목록 렌더링부터 시작
- [ ] **2. React Router** — 목록 / 상세 / 작성 페이지 나누기
- [ ] **3. Supabase 연동** — 진짜 DB로 CRUD (조회 / 작성 / 수정 / 삭제)
- [ ] **4. 인증** — Supabase Auth로 로그인 / 회원가입
- [ ] **5. 리팩토링** — TanStack Query 도입해 데이터 페칭 개선
- [ ] **6. 배포** — Vercel 배포 + 환경변수 설정

 