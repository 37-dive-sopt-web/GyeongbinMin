import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  height: '100%',
  fontFamily: 'system-ui, sans-serif',
  fontSize: vars.fontSize.base,
  color: vars.color.text,
  backgroundColor: vars.color.background,
});

globalStyle('#root', {
  minHeight: '100%',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
});

