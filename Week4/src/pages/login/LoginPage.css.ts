import { style } from '@vanilla-extract/css';
import { vars } from '../../app/styles/theme.css';

export const loginPageStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ffffff',
});

export const formStyle = style({
  width: '45rem',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.background,
  padding: vars.spacing.xl,
});

export const titleStyle = style({
  fontSize: '2rem',
  fontWeight: 800,
  marginBottom: '1.8rem',
  color: vars.color.text,
});

export const formContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputGroupStyle = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2.5rem',
});

export const labelStyle = style({
  fontSize: '1.4rem',
  color: vars.color.text,
  fontStyle: 'bold',
  fontWeight: 600,
  marginBottom: '0.5rem',
});

export const linkStyle = style({
  color: '#000000',
  fontSize: '1.4rem',
  fontWeight: 800,
  width: '100%',
  textAlign: 'center',
  marginTop: '0.5rem',
  textDecoration: 'none',
});

export const passwordWrapperStyle = style({
  position: 'relative',
});

export const passwordToggleButtonStyle = style({
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.25rem',
});

export const submitButtonStyle = style({
  width: '100%',
  marginBottom: '1rem',
  backgroundColor: '#3b82f6',
  color: '#fff',
  padding: '0.875rem',
  borderRadius: '0.5rem',
  fontSize: vars.fontSize.base,
  fontStyle: 'bold',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#2563eb',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const signupButtonStyle = style({
  width: '100%',
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: '0.875rem',
  borderRadius: '0.5rem',
  fontSize: vars.fontSize.base,
  fontStyle: 'bold',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#f8f9fa',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const errorStyle = style({
  padding: vars.spacing.sm,
  marginBottom: vars.spacing.md,
  backgroundColor: '#fee2e2',
  color: vars.color.error,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  textAlign: 'center',
});

