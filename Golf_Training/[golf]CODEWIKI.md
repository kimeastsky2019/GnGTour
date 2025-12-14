# CODEWIKI

## 개요
- Vite + React 기반의 정적 랜딩 페이지 모노레포; `/`는 GnG International(일반 B2B) 랜딩, `/golf`는 정원대학교 골프 유학/취업 프로그램 랜딩.
- 골프 페이지는 다국어 지원(러시아어 기본, 영어·태국어)과 섹션 단위 스크롤 내비게이션을 제공하며, 주요 CTAs는 Google Apps Script로 연결돼 문의 정보를 수집한다.

## 실행 방법
- 의존성 설치: `npm install`
- 개발 서버: `npm run dev`
- 프로덕션 번들: `npm run build` (산출물은 `dist/`)
- 미리보기: `npm run preview`

## 주요 기술 스택
- React 19, React Router 7 (`src/App.jsx` 라우팅)
- 스타일: 글로벌 CSS(`src/index.css`) + 컴포넌트 내부의 인라인 스타일
- 애니메이션: framer-motion(섹션 페이드/슬라이드 인)
- 아이콘: lucide-react

## 폴더 구조(요약)
- `src/main.jsx`: 엔트리, `StrictMode`로 `App` 렌더링
- `src/App.jsx`: `Router` 설정(`/`, `/golf`)
- `src/pages/InternationalHome.jsx`: 일반 랜딩(헤더/Hero/Platform/Footer)
- `src/pages/GolfHome.jsx`: 골프 프로그램 랜딩; `LanguageProvider`로 감싸고 섹션 컴포넌트들을 순서대로 배치
- `src/components/`: 공용 섹션 컴포넌트들
  - `Layout.jsx`: 일반 헤더/푸터 (스크롤 시 배경 변화)
  - `Hero.jsx`, `Platform.jsx`: `/`에서 사용
  - `golf/`: 골프 전용 헤더/푸터/히어로
- `src/i18n/`: 다국어 컨텍스트와 번역 리소스
- `public/`: 정적 자산(로고, 히어로/프로그램 배경 이미지 등)

## 라우팅과 주요 화면
- `/`: `InternationalHome`가 단일 섹션 형태로 렌더링 (`Header` → `Hero` → `Platform` → `Footer`).
- `/golf`: `GolfHome`가 다수의 스크롤 섹션을 렌더링.
  - 내비게이션 앵커: `#program`, `#benefits`, `#faq`, `#consultation`.
  - 섹션 구성: `GolfHero` → `Problem` → `Program` → `Target` → `Benefit` → `University` → `Visa` → `Curriculum` → `Pricing` → `Stories` → `FAQ` → `CTA` → `GolfFooter`.

## 다국어 시스템
- `LanguageProvider` (`src/i18n/LanguageContext.jsx`): 기본 언어 `ru`, `localStorage('lang')`에 사용자 선택을 저장. `useI18n()` 훅으로 `{ language, setLanguage, t, languages }` 제공.
- 번역 소스: `src/i18n/translations.js`에 러시아어/영어/태국어 텍스트와 언어 메타(`languages` 배열) 정의.
- 언어 스위처: `GolfHeader`에서 `languages` 배열을 렌더링하며, 버튼 클릭 시 `setLanguage` 호출.
- 새 언어 추가 시: `languages` 배열에 코드/라벨 추가 → `translations` 객체에 동일한 코드 키로 전체 섹션 텍스트 작성.

## 주요 섹션 컴포넌트(골프)
- `GolfHero` (`src/components/golf/GolfHero.jsx`): 배지·타이틀·서브카피·3가지 특징; 배경 블러 이미지 오버레이 사용.
- `Problem` / `Program` / `Target` / `Benefit`: `useI18n`으로 텍스트 로드, framer-motion으로 진입 애니메이션 처리.
- `University`, `Visa`, `Curriculum`, `Pricing`, `Stories`, `FAQ`: 번역 데이터에 기반한 카드/타임라인/FAQ 아코디언 스타일 레이아웃.
- `CTA` (`src/components/CTA.jsx`): 문의 폼. `SHEET_ENDPOINT`(Google Apps Script)로 JSON POST; 실패 시 `no-cors` FormData로 재시도. 상태(`idle|submitting|success|error`)를 관리하고 성공/실패 메시지를 번역 텍스트로 표시.
- `GolfFooter`: 번역된 저작권 문구 + 한국어/러시아어 사업자 등록 정보 블록.

## 스타일 가이드
- 글로벌 변수와 폰트 설정: `src/index.css` (기본 primary/secondary 팔레트, `Inter` 기반).
- 골프 테마: `.golf-theme` 루트 클래스에서 팔레트와 폰트를 덮어씀(딥그린/골드/민트, `Space Grotesk`·`Manrope`).
- 공통 유틸: `.container`, `.section`, `.section-title`, `.section-subtitle`, `.btn`, `.grid-3`, `.card` 등.
- 다수의 컴포넌트가 자체 `<style>` 블록을 포함하므로, 스타일 수정 시 해당 컴포넌트를 직접 확인해야 함.

## 데이터/외부 연동
- Google Apps Script 엔드포인트: `SHEET_ENDPOINT` 상수로 하드코딩. 배포·스프레드시트 변경 시 URL 갱신 필요.
- 사용자 입력 필드: 이름/국가/나이/언어/트랙/메신저/이메일. 제출 시 `submittedAt` ISO 문자열을 함께 전송.

## 개발 시 유의사항
- 섹션 앵커(`id="program"`, `id="benefits"`, `id="faq"`, `id="consultation"`)는 헤더 내비게이션과 연결되어 있으므로 제거/변경 시 내비게이션도 함께 수정.
- 기본 언어가 `ru`이므로 새 텍스트를 추가할 때 모든 언어 키가 누락되지 않도록 확인.
- `/` 페이지는 기본 템플릿 수준만 구현되어 있으므로, 두 페이지의 스타일/컴포넌트 구조가 다름을 염두에 두고 수정.
