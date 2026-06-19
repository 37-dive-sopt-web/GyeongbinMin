import { useState } from 'react';

type MyPageStep = 'lookup' | 'info';

export const useMyPageStep = () => {
  const [step, setStep] = useState<MyPageStep>('lookup');

  const goToLookup = () => {
    setStep('lookup');
  };

  const goToInfo = () => {
    setStep('info');
  };

  return { step, goToLookup, goToInfo };
};

