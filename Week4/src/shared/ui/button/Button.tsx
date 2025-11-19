import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonStyle } from './Button.css.ts';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={buttonStyle[variant]} {...props}>
      {children}
    </button>
  );
};

