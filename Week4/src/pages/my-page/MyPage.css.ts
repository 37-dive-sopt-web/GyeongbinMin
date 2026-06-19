import { style } from '@vanilla-extract/css';
import { vars } from '../../app/styles/theme.css';

/* 전체 컨테이너 */
export const myPageContainerStyle = style({
  minHeight: '100vh',
  backgroundColor: '#ffffff',
});

/* 상단 헤더 */
export const headerSectionStyle = style({
  width: '100%',
  backgroundColor: '#7CE3CC',
  padding: '2rem 0',
  textAlign: 'center',
  color: '#ffffff',
});

export const headerTitleStyle = style({
  fontSize: '2rem',
  fontWeight: 800,
});

export const headerSubtitleStyle = style({
  marginTop: '0.5rem',
  fontSize: '1rem',
  opacity: 0.9,
});

/* 콘텐츠 영역 */
export const myInfoPageStyle = style({
  width: '100%',
  maxWidth: '600px',
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

/* 제목 */
export const myInfoTitleStyle = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  textAlign: 'left',
  width: '100%',
  marginBottom: '1rem',
});

/* 폼 전체 */
export const formStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

/* 폼 그룹 */
export const inputGroupStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

/* 라벨 */
export const labelStyle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#000000',
});

/* 인풋 */
export const inputFieldStyle = style({
  padding: '0.9rem 1rem',
  border: '1px solid #cfcfcf',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  backgroundColor: '#ffffff',
});

/* readOnly용 */
export const readOnlyFieldStyle = style({
  padding: '0.9rem 1rem',
  fontWeight: 700,
  borderRadius: '0.5rem',
  fontSize: '1rem',
  backgroundColor: '#ffffff',
});

/* 저장 버튼 */
export const saveButtonStyle = style({
  width: '100%',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '0.9rem 1rem',
  borderRadius: '0.5rem',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: '0.2s',
  selectors: {
    '&:hover': {
      backgroundColor: '#86efac',
    },
  },
});

/* 회원 조회 페이지 */
export const lookupPageStyle = style({
  width: '100%',
  maxWidth: '600px',
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const lookupTitleStyle = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  textAlign: 'left',
  width: '100%',
  marginBottom: '1rem',
});

export const lookupButtonStyle = style({
  width: '100%',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '0.9rem 1rem',
  borderRadius: '0.5rem',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: '0.2s',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#1d4ed8',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const resultContainerStyle = style({
  marginTop: '2rem',
  padding: '1.5rem',
  backgroundColor: '#f8fafc',
  borderRadius: '0.5rem',
  border: '1px solid #e2e8f0',
});

export const resultTitleStyle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#000000',
});

export const resultItemStyle = style({
  display: 'flex',
  gap: '1rem',
  marginBottom: '0.75rem',
  padding: '0.75rem 0',
  borderBottom: '1px solid #e2e8f0',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const resultLabelStyle = style({
  fontWeight: 600,
  color: '#000000',
  minWidth: '100px',
});

export const resultValueStyle = style({
  color: '#000000',
});

/* 회원 탈퇴 페이지 */
export const deletePageStyle = style({
  width: '100%',
  maxWidth: '600px',
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const deleteTitleStyle = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  textAlign: 'left',
  width: '100%',
  marginBottom: '1rem',
});

export const deleteButtonStyle = style({
  width: '100%',
  backgroundColor: '#ef4444',
  color: '#ffffff',
  padding: '0.9rem 1rem',
  borderRadius: '0.5rem',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: '0.2s',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#dc2626',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const modalOverlayStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const modalStyle = style({
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  padding: '2rem',
  maxWidth: '400px',
  width: '90%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

export const modalTitleStyle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#000000',
});

export const modalContentStyle = style({
  fontSize: '1rem',
  color: '#000000',
  marginBottom: '2rem',
});

export const modalButtonGroupStyle = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-end',
});

export const modalConfirmButtonStyle = style({
  backgroundColor: '#ef4444',
  color: '#fff',
  padding: '0.5rem 1.5rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#dc2626',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const modalCancelButtonStyle = style({
  backgroundColor: '#64748b',
  color: '#fff',
  padding: '0.5rem 1.5rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#475569',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});
