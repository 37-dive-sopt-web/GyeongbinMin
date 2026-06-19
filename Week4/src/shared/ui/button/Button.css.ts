import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../app/styles/theme.css';

const base = {
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.base,
  fontStyle: 'bold',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s',
  selectors: {
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
};

export const buttonStyle = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.primary,
      color: '#fff',
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: '#2563eb',
        },
      },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: vars.color.secondary,
      color: '#fff',
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: '#475569',
        },
      },
    },
  ],
});

