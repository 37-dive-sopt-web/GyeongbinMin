import { style } from '@vanilla-extract/css';
import { vars } from '../../app/styles/theme.css';

export const loginPageStyle = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f0',
  padding: vars.spacing.md,
});

export const formStyle = style({
  width: '100%',
  maxWidth: '25rem',
  backgroundColor: vars.color.background,
  padding: vars.spacing.xl,
  borderRadius: vars.borderRadius.lg,
});

export const titleStyle = style({
  fontSize: vars.fontSize.xl,
  fontStyle: 'bold',
  color: vars.color.text,
  marginBottom: vars.spacing.xl,
  textAlign: 'center',
});

export const inputGroupStyle = style({
  marginBottom: vars.spacing.lg,
  selectors: {
    '& label': {
      display: 'block',
      fontSize: vars.fontSize.base,
      color: vars.color.text,
      marginBottom: vars.spacing.sm,
      fontStyle: 'bold',
    },
  },
});

export const linkStyle = style({
  display: 'block',
  textAlign: 'center',
  marginTop: vars.spacing.lg,
  color: vars.color.primary,
  textDecoration: 'none',
  fontSize: vars.fontSize.base,
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
  marginTop: vars.spacing.lg,
});

