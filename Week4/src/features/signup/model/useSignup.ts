import { useState } from 'react';
import { signup } from '../api/signup';
import type { User } from '../../../entities/user';
import { useSignupStep } from './useSignupStep';
import { useSignupForm } from './useSignupForm';

export const useSignup = () => {
  const { step, nextStep, prevStep, resetStep } = useSignupStep();
  const { data, validationErrors, updateData, setServerErrors, resetForm } = useSignupForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canProceedToNextStep = (): boolean => {
    if (step === 'username') {
      return data.username.trim().length > 0 && !validationErrors.username;
    } else if (step === 'password') {
      return (
        data.password.length > 0 &&
        data.passwordConfirm.length > 0 &&
        !validationErrors.password &&
        !validationErrors.passwordConfirm
      );
    }
    return false;
  };

  const handleNextStep = () => {
    if (!canProceedToNextStep()) return;
    nextStep();
  };

  const handleSignup = async () => {
    setIsLoading(true);
    setError(null);
    setServerErrors({});

    try {
      const userData: Pick<User, 'username' | 'password' | 'name' | 'email' | 'age'> = {
        username: data.username,
        password: data.password,
        name: data.name,
        email: data.email,
        age: Number(data.age),
      };

      const response = await signup(userData);

      if (response.success && response.data) {
        return { success: true, name: response.data.name };
      } else {
        setError(response.message || '회원가입에 실패했습니다.');
        return { success: false };
      }
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const response = (err as { response?: { data?: unknown } }).response;
        const errorData = response?.data;

        if (errorData && typeof errorData === 'object') {
          const serverError = errorData as {
            message?: string;
            code?: string;
            data?: {
              errors?: Array<{ field: string; reason: string }>;
            };
          };

          if (serverError.data?.errors) {
            const fieldErrors: Record<string, string> = {};
            serverError.data.errors.forEach((error) => {
              fieldErrors[error.field] = error.reason;
            });
            setServerErrors(fieldErrors);
          }

          if (serverError.message) {
            setError(serverError.message);
          } else {
            setError('회원가입에 실패했습니다.');
          }
        } else {
          setError('회원가입에 실패했습니다.');
        }
      } else {
        setError('회원가입에 실패했습니다.');
      }

      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    resetStep();
    resetForm();
    setError(null);
  };

  return {
    step,
    data,
    isLoading,
    error,
    validationErrors,
    updateData,
    nextStep: handleNextStep,
    prevStep,
    handleSignup,
    reset,
    canProceedToNextStep,
  };
};

