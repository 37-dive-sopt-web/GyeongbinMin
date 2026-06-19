import { style } from '@vanilla-extract/css';
import { vars } from '../../../app/styles/theme.css';

export const inputStyle = style({
  width: '100%',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid #e2e8f0',
  fontSize: vars.fontSize.base,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  transition: 'border-color 0.2s',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#4FD1C7',
    },
    '&::placeholder': {
      color: '#94a3b8',
    },
  },
});

