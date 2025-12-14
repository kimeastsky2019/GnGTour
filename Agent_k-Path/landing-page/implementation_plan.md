# 구현 계획서 (Implementation Plan)

## 목표
`design_guide.txt`의 "Chaos to Order" (사이버펑크) 테마를 준수하고, 영어(`eng_framework.txt`), 러시아어(`Ru_framework.txt`), 태국어(`Tai_framework.txt`)를 지원하는 프리미엄 랜딩 페이지를 구축합니다.

## 사용자 리뷰 필요 사항
- **디자인 테마**: 다크 모드 배경(#0a0a0a)에 네온 시안(#00f3ff) 및 네온 퍼플(#b23aff) 포인트 컬러를 사용하는 사이버펑크 스타일입니다.
- **다국어 처리**: 별도의 복잡한 i18n 라이브러리 대신, `lib/content.ts`에 모든 언어 데이터를 담고 Context API로 관리하여 빠르고 부드러운 언어 전환을 구현할 예정입니다.

## 변경 제안

### 1. 설정 및 기반 작업
#### [MODIFY] [tailwind.config.ts](file:///Users/donghokim/Documents/tour_training/guide/landing-page/tailwind.config.ts)
- 커스텀 색상 추가 (`deep-black`, `neon-cyan`, `neon-purple`)
- 폰트 및 애니메이션 유틸리티 설정

#### [NEW] [lib/content.ts](file:///Users/donghokim/Documents/tour_training/guide/landing-page/lib/content.ts)
- 영어, 러시아어, 태국어 텍스트 데이터 구조화

#### [NEW] [context/LanguageContext.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/context/LanguageContext.tsx)
- 전역 언어 상태 관리

### 2. 컴포넌트 개발 (components/)
모든 컴포넌트는 GSAP 애니메이션과 반응형 디자인이 적용됩니다.

#### [NEW] [components/SmoothScroller.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/SmoothScroller.tsx)
- Lenis를 이용한 부드러운 스크롤 래퍼

#### [NEW] [components/Navbar.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/Navbar.tsx)
- 언어 변경 버튼 및 네비게이션

#### [NEW] [components/Hero.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/Hero.tsx)
- "Chaos to Order" 컨셉의 메인 비주얼, 글리치 효과 텍스트

#### [NEW] [components/Problem.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/Problem.tsx)
- 혼돈스러운 문제 상황을 시각화하는 카드 섹션

#### [NEW] [components/Solution.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/Solution.tsx)
- AI 매칭 프로세스 애니메이션 (스크롤 트리거)

#### [NEW] [components/Programs.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/Programs.tsx)
- 4가지 프로그램 소개 (Golf, Crash Course, IT, K-Beauty)

#### [NEW] [components/Visa.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/Visa.tsx)
- 비자 경로 시각화

#### [NEW] [components/CTA.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/components/CTA.tsx)
- 최종 행동 유도 버튼

### 3. 페이지 조립
#### [MODIFY] [app/page.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/app/page.tsx)
- 전체 컴포넌트 통합 및 레이아웃 구성

#### [MODIFY] [app/layout.tsx](file:///Users/donghokim/Documents/tour_training/guide/landing-page/app/layout.tsx)
- 폰트 설정, 메타데이터, Context Provider 래핑

## 검증 계획
### 자동화 테스트
- 빌드 테스트: `npm run build`로 에러 확인

### 수동 검증
- **디자인 준수**: 다크 모드, 네온 컬러, 애니메이션 동작 확인
- **다국어 전환**: 언어 버튼 클릭 시 텍스트가 즉시 변경되는지 확인
- **반응형**: 모바일, 태블릿, 데스크탑 레이아웃 확인

## Light Theme Refactor
- [ ] Update `globals.css` to use white background (`#ffffff`) and dark text (`#171717`).
- [ ] Define new accent colors for light mode (e.g., a softer cyan/blue, distinct purple).
- [ ] Refactor all components to remove hardcoded dark mode classes (`bg-black`, `text-white`, `border-white/10`).
- [ ] Ensure high contrast and readability.

## AI Image Generation
- [ ] **Hero Section**: Generate a bright, welcoming image representing "Study & Career in Korea".
- [ ] **Problem Section**: Generate an illustration representing "Confusion/Complexity" of the current process.
- [ ] **Solution Section**: Generate an image for "AI Analysis/Matching".
- [ ] **Programs Section**: Generate an image showcasing "Diverse Learning Paths".
- [ ] **Visa Section**: Generate an image for "Visa Success/Approval".
- [ ] **BodyLogic Section**: Generate an image for "AI Understanding Human Context".
- [ ] Integrate these images into their respective components.
