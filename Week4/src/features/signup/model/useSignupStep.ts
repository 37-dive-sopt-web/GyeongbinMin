import { useState } from 'react';

type SignupStep = 'username' | 'password' | 'info';

export const useSignupStep = () => {
  const [step, setStep] = useState<SignupStep>('username');

  const nextStep = () => {
    if (step === 'username') {
      setStep('password');
    } else if (step === 'password') {
      setStep('info');
    }
  };

  const prevStep = () => {
    if (step === 'password') {
      setStep('username');
    } else if (step === 'info') {
      setStep('password');
    }
  };

  const resetStep = () => {
    setStep('username');
  };

  return { step, nextStep, prevStep, resetStep };
};

