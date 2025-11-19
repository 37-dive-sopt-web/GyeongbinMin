import { ReactNode } from 'react';
import '../shared/ui';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return children;
};

