import type { ReactNode } from 'react';
import '../styles';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return children;
};

