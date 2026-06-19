import { useState } from 'react';
import { validateUsername, validatePassword, validatePasswordMatch } from '../../../shared/lib/validation';

type SignupData = {
  username: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
};

export const useSignupForm = () => {
  const [data, setData] = useState<SignupData>({
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    age: '',
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const updateData = (field: keyof SignupData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));

    if (field === 'username') {
      const usernameError = validateUsername(value);
      setValidationErrors((prev) => ({
        ...prev,
        username: usernameError || '',
      }));
    } else if (field === 'password') {
      const passwordError = validatePassword(value);
      const matchError = validatePasswordMatch(value, data.passwordConfirm);
      setValidationErrors((prev) => ({
        ...prev,
        password: passwordError || '',
        passwordConfirm: matchError || '',
      }));
    } else if (field === 'passwordConfirm') {
      const matchError = validatePasswordMatch(data.password, value);
      setValidationErrors((prev) => ({
        ...prev,
        passwordConfirm: matchError || '',
      }));
    }
  };

  const setServerErrors = (errors: Record<string, string>) => {
    setValidationErrors((prev) => ({ ...prev, ...errors }));
  };

  const resetForm = () => {
    setData({
      username: '',
      password: '',
      passwordConfirm: '',
      name: '',
      email: '',
      age: '',
    });
    setValidationErrors({});
  };

  return {
    data,
    validationErrors,
    updateData,
    setServerErrors,
    resetForm,
  };
};

