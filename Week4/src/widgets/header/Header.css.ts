import { style } from '@vanilla-extract/css';
import { vars } from '../../app/styles/theme.css';

/* 전체 헤더 영역 */
export const headerStyle = style({
  backgroundColor: '#2563eb', // 더 실제 이미지와 동일한 민트색
  width: '100%',
  padding: '2.5rem 2rem',    
  minHeight: '140px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


export const headerContentStyle = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});


export const headerLeftStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.5rem',
});


export const headerTitleStyle = style({
  fontSize: '2rem',
  fontWeight: 800,
  margin: 0,
  color: '#ffffff',
});

/* "안녕하세요, ㅇㅇ님" */
export const headerGreetingStyle = style({
  fontSize: '1.1rem',
  margin: 0,
  color: '#ffffff',
  opacity: 0.9,
});

/* 오른쪽 네비게이션 */
export const headerRightStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.5rem', // 메뉴 간격 넓게 (이미지와 동일)
});

/* 메뉴 아이템 기본 */
export const navLinkStyle = style({
  background: 'none',
  border: 'none',
  padding: 0,
  fontSize: '1.1rem',
  color: '#ffffff',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },
});

/* 현재 active 메뉴 스타일 */
export const navLinkActiveStyle = style([
  navLinkStyle,
  {
    fontWeight: 700,
    borderBottom: '2px solid #ffffff',
    paddingBottom: '2px',
  },
]);

/* 모바일 버튼 (필요 없으면 제거 가능) */
export const menuButtonStyle = style({
  display: 'none',
});

/* 모바일 메뉴 (옵션) */
export const mobileMenuStyle = style({
  display: 'none',
});

export const mobileMenuOpenStyle = style({});
