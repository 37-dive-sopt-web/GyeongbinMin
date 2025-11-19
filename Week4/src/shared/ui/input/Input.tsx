import type { InputHTMLAttributes } from 'react';
import { inputStyle } from './Input.css.ts';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={className ? `${inputStyle} ${className}` : inputStyle} {...props} />;
};

