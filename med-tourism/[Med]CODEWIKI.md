# Korea Medical Tourism Platform – CodeWiki

## 개요
- Next.js 14(App Router) + React 18로 만든 멀티랭귀지 의료관광 랜딩/대시보드.
- Tailwind CSS로 스타일링, Framer Motion으로 애니메이션.
- `basePath`/`assetPrefix`가 `/med`로 설정돼 있으므로 모든 경로는 `/med` 하위에서 서빙됨.

## 실행/빌드
- 설치: `npm install`
- 개발 서버: `npm run dev` (기본 `http://localhost:3000/med`)
- 프로덕션 빌드/실행: `npm run build` 후 `npm run start`

## 라우팅 구조 (`src/app`)
- `page.tsx` : 메인 랜딩. 다국어 상태 관리 후 각 섹션 컴포넌트로 렌더링.
- `auth/page.tsx` : 환자/의료진 공용 로그인 폼(로컬 번역 사용).
- `doctor/page.tsx` : 의료진 대시보드. `requireRole("doctor")` 후 `/doctor/cases` API 호출.
- `patient/page.tsx` : 환자 대시보드. `requireRole("patient")` 후 `/patient/matches`, `/patient/bookings` 호출.
- `medical-contacts/page.tsx` 및 `en|ru|th/medical-contacts/page.tsx` : 언어별 의료진/병원 정보 뷰.
- `layout.tsx` : 전역 레이아웃, `globals.css` 포함, 기본 `lang="ru"`.

## 주요 컴포넌트
- `components/layout/MainHeader.tsx` : 로고/내비/언어 스위처. `onLocaleChange` 콜백을 사용해 라우팅 또는 상태 변경.
- `components/layout/MainFooter.tsx` : 단순 푸터.
- `components/sections/*` : 랜딩 섹션 모듈(Hero, WhyKorea, Specialties, AIService, Process, GroupVisa, Hospitals, PackagesPreview, Testimonials, FAQ, ContactCTA, ForDoctorsTeaser, AuthGatewayLite). 모두 번역 객체를 props로 받아 렌더링.
- `components/MedicalContactsView.tsx` : 의료진 목록 페이지 핵심. `framer-motion` 애니메이션, 지역/진료과 필터, 언어 변경 시 `next/navigation`으로 해당 로케일 경로로 이동. 데이터는 `src/data/medical_contacts.json`에서 로케일별로 로드.

## 국제화(`src/lib/i18n.ts`, `src/i18n/*.json`)
- 지원 언어: `Locale = "ru" | "ko" | "en" | "th"`.
- `getTranslations(locale)`로 타입 세이프 번역 객체(`Translations` 타입)를 획득. 새 키 추가 시 타입과 모든 JSON을 함께 업데이트.
- 번역 데이터는 `src/i18n/{lang}.json`에 존재하며, 의료진 페이지 관련 키는 `update_i18n.py`로 병합 가능.

## 데이터/유틸
- `src/data/medical_contacts.json` : 로케일별 병원/의료진 목록(한국어 필드명 포함). 필터링은 `region_province`와 진료과 필드로 수행.
- `src/lib/apiClient.ts` : `fetch` 래퍼. `Authorization: Bearer {token}` 헤더 지원, 실패 시 에러 throw.
- `src/lib/auth.ts` : 로컬 스토리지 기반 토큰/역할 헬퍼(`getAuthToken`, `getRole`, `requireRole`). 실제 리다이렉트는 미구현.
- `src/lib/paths.ts` : `/med` `basePath` 대응 이미지 경로 헬퍼 `imagePath`.

## 스타일/설정
- Tailwind 설정: `tailwind.config.js`(`content`는 `./src/**/*.{js,ts,jsx,tsx,mdx}`), 커스텀 색상 `primary`/`secondary`.
- 전역 스타일: `src/app/globals.css`에서 시스템 폰트, 슬레이트 컬러 베이스 설정.
- Next 설정: `next.config.js`에서 `reactStrictMode`와 `images.unoptimized` 설정, `basePath`/`assetPrefix`를 `/med`로 고정.

## 콘텐츠 스크립트(루트 .py)
- `update_i18n.py` : `src/i18n`의 언어별 JSON에 의료진 페이지 문구를 갱신.
- 기타 `check_*.py`, `process_multilingual.py` 등은 스프레드시트/헤더 검증 및 다국어 데이터 가공용으로 배치됨(앱 런타임과는 분리).

## 작업 팁
- 새 언어를 추가하려면 `Locale` 유니온, `dictionaries` 매핑, `src/i18n/{lang}.json` 파일, 그리고 `/[lang]/medical-contacts` 라우트를 모두 추가.
- `/med` basePath 때문에 정적 경로나 외부 링크 작성 시 `src/lib/paths.ts`의 `imagePath` 사용을 고려.
- 의료진 데이터 필드는 한국어 키를 사용하므로 타입 정의(`Contact` 인터페이스)와 JSON 키를 일치시켜야 함.
