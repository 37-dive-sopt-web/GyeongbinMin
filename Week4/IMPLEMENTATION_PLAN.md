# Week4 과제 구현 계획

## 현재 상태
- ✅ axios, vanilla-extract, react-router-dom 설치 완료
- ✅ apiClient 설정 완료
- ✅ FSD 폴더 구조 완료
- ⏳ 공통 컴포넌트 및 타입 정의 필요
- ⏳ 페이지 및 기능 구현 필요

---

## 1단계: 공통 컴포넌트 및 타입 정의

### 1.1 공통 UI 컴포넌트
- [ ] `src/shared/ui/Button.tsx` - 버튼 컴포넌트 (variant: primary, secondary)
- [ ] `src/shared/ui/Input.tsx` - 입력 컴포넌트
- [ ] vanilla-extract로 스타일링

### 1.2 엔티티 타입 정의
- [ ] `src/entities/user/model/types.ts` - User 타입 정의
- [ ] `src/entities/user/model/useUserStore.ts` - userId 관리 훅

### 1.3 라우팅 설정
- [ ] `src/app/router/AppRouter.tsx` - 라우터 설정
- [ ] `src/App.tsx` - AppRouter 연결

---

## 2단계: 로그인 기능 구현

### 2.1 API 함수
- [ ] `src/features/auth/api/login.ts` - 로그인 API 호출

### 2.2 커스텀 훅
- [ ] `src/features/auth/model/useAuth.ts` - 로그인 로직 관리

### 2.3 페이지 컴포넌트
- [ ] `src/pages/login/LoginPage.tsx`
  - 로그인 타이틀
  - 아이디 입력 Input
  - 비밀번호 입력 Input
  - 회원가입 페이지 이동 버튼
  - 로그인 버튼 (hover transition)
  - 로그인 성공 시 마이페이지 이동 및 userId 저장
  - 로그인 실패 처리 UI

---

## 3단계: 회원가입 기능 구현

### 3.1 API 함수
- [ ] `src/features/signup/api/signup.ts` - 회원가입 API 호출

### 3.2 커스텀 훅
- [ ] `src/features/signup/model/useSignup.ts` - 회원가입 상태 관리 (단계별)

### 3.3 UI 컴포넌트
- [ ] `src/features/signup/ui/UsernameStep.tsx` - 아이디 입력 단계
  - 아이디 입력 Input
  - 다음 버튼 (비어있으면 비활성화)
  - 50글자 제한 검증 (심화)
- [ ] `src/features/signup/ui/PasswordStep.tsx` - 비밀번호 입력 단계
  - 비밀번호 입력 Input
  - 비밀번호 확인 Input
  - 비밀번호 보이기 토글 버튼 (심화)
  - 비밀번호 검증 (8~64자, 대소문자/숫자/특수문자 각 1자 이상, 공백 불허) (심화)
  - 비밀번호 불일치 에러 메시지 (심화)
  - 다음 버튼 (비어있거나 불일치 시 비활성화)
- [ ] `src/features/signup/ui/InfoStep.tsx` - 이름/이메일/나이 입력 단계
  - 이름 입력 Input
  - 이메일 입력 Input
  - 나이 입력 Input
  - 회원가입 버튼 (비어있으면 비활성화)
  - 회원가입 실패 시 alert
  - 회원가입 성공 시 alert (이름 출력) 및 로그인 페이지 이동

### 3.4 페이지 컴포넌트
- [ ] `src/pages/signup/SignupPage.tsx`
  - 회원가입 타이틀
  - 단계별 UI 컴포넌트 렌더링
  - 로그인 페이지 이동 버튼

---

## 4단계: 마이페이지 기능 구현

### 4.1 헤더 위젯
- [ ] `src/widgets/header/Header.tsx`
  - 좌측: 본인 이름 출력
  - 탭: 내 정보, 회원 조회, 로그아웃, 회원탈퇴
  - 반응형: 화면 작아지면 메뉴바 표시 (심화)
  - 메뉴바 클릭 시 애니메이션으로 메뉴 표시 (심화)

### 4.2 사용자 관리 기능

#### 4.2.1 내 정보 수정
- [ ] `src/features/user/api/updateUserProfile.ts` - 프로필 수정 API
- [ ] `src/features/user/model/useUserProfile.ts` - 프로필 수정 훅
- [ ] `src/pages/my-page/MyInfoPage.tsx`
  - 새 이름, 이메일, 나이 입력 Input
  - 저장 버튼
  - 저장 오류 시 alert
  - 저장 성공 시 화면 갱신 및 alert

#### 4.2.2 회원 조회
- [ ] `src/features/user/api/getUserById.ts` - 회원 조회 API
- [ ] `src/features/user/model/useUserLookup.ts` - 회원 조회 훅
- [ ] `src/features/user/ui/UserLookupResult.tsx` - 조회 결과 UI
- [ ] `src/pages/my-page/UserLookupPage.tsx`
  - 회원 ID 입력 Input (숫자)
  - 확인 버튼 (비어있으면 비활성화)
  - 조회 성공 시 상세 정보 출력

#### 4.2.3 로그아웃
- [ ] `src/features/auth/api/logout.ts` - 로그아웃 처리
- [ ] 로그아웃 버튼 클릭 시 userId 삭제 및 로그인 페이지 이동

#### 4.2.4 회원 탈퇴
- [ ] `src/features/user/api/deleteUser.ts` - 회원 탈퇴 API
- [ ] `src/features/user/model/useUserDelete.ts` - 회원 탈퇴 훅
- [ ] `src/pages/my-page/UserDeletePage.tsx`
  - 회원탈퇴 버튼
  - 확인 모달 (createPortal 사용 - 심화)
  - 탈퇴 실패 시 alert
  - 탈퇴 성공 시 alert 및 로그인 페이지 이동

### 4.3 마이페이지 메인
- [ ] `src/pages/my-page/MyPage.tsx`
  - Header 위젯
  - 라우팅으로 각 탭 페이지 렌더링

---

## 5단계: 라우팅 및 통합

### 5.1 라우터 설정
- [ ] `src/app/router/AppRouter.tsx`
  - `/login` - LoginPage
  - `/signup` - SignupPage
  - `/my-page` - MyPage (PrivateRoute)
  - 기본 경로는 `/login`으로 리다이렉트

### 5.2 App.tsx 수정
- [ ] AppRouter 연결

---

## 6단계: 스타일링 및 UX 개선

### 6.1 기본 스타일
- [ ] 각 페이지 레이아웃 스타일링
- [ ] 폼 스타일링
- [ ] 버튼 hover 효과 (transition)

### 6.2 에러 처리
- [ ] 에러 메시지 UI 스타일링
- [ ] 로딩 상태 표시

### 6.3 반응형 (심화)
- [ ] Header 반응형 메뉴 구현
- [ ] 메뉴 애니메이션 효과

---

## 7단계: 타입 안정성 및 검증

### 7.1 타입 정의
- [ ] API 응답 타입 정의
- [ ] Form 데이터 타입 정의
- [ ] any 타입 제거 (심화)

### 7.2 검증 로직
- [ ] 아이디 50글자 제한 (심화)
- [ ] 비밀번호 정책 검증 (심화)
- [ ] 이메일 형식 검증
- [ ] 나이 숫자 검증

---

## 8단계: 테스트 및 최종 점검

### 8.1 기능 테스트
- [ ] 로그인 플로우 테스트
- [ ] 회원가입 플로우 테스트
- [ ] 마이페이지 기능 테스트
- [ ] 라우팅 테스트

### 8.2 UI/UX 점검
- [ ] 모든 버튼 hover 효과 확인
- [ ] 에러 메시지 표시 확인
- [ ] 반응형 동작 확인

### 8.3 코드 품질
- [ ] any 타입 사용 여부 확인
- [ ] 불필요한 주석 제거
- [ ] 코드 정리

---

## 구현 순서 권장사항

1. **공통 기반 구축** (1단계)
2. **로그인 기능** (2단계) - 가장 기본 기능
3. **회원가입 기능** (3단계) - 로그인 전 필요
4. **마이페이지 기본 구조** (4.1, 4.3)
5. **마이페이지 기능들** (4.2) - 내 정보 → 조회 → 로그아웃 → 탈퇴 순서
6. **라우팅 통합** (5단계)
7. **스타일링 및 개선** (6단계)
8. **타입 안정성** (7단계)
9. **최종 점검** (8단계)

---

## 주요 고려사항

- FSD 아키텍처 준수
- any 타입 사용 금지 (심화)
- vanilla-extract로 스타일링
- axios로 API 통신
- localStorage로 userId 관리
- react-router-dom으로 라우팅
- createPortal로 모달 구현 (심화)

