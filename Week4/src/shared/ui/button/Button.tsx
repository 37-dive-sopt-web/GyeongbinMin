import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonStyle } from './Button.css.ts';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button className={className ? `${buttonStyle[variant]} ${className}` : buttonStyle[variant]} {...props}>
      {children}
    </button>
  );
};

