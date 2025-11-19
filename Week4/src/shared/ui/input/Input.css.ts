import { style } from '@vanilla-extract/css';
import { vars } from '../../../app/styles/theme.css';

export const inputStyle = style({
  width: '100%',
  padding: vars.spacing.sm,
  borderRadius: vars.borderRadius.md,
  border: `1px solid ${vars.color.secondary}`,
  fontSize: vars.fontSize.base,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.primary,
    },
  },
});

