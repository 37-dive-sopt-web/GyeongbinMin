import { useState } from 'react';
import { getUserById } from '../api/getUserById';

type UserData = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
};

export const useUserLookup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const lookupUser = async (userId: string) => {
    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await getUserById(userId);

      if (response.success && response.data) {
        setUserData(response.data);
        return { success: true, data: response.data };
      } else {
        setError(response.message || '회원 조회에 실패했습니다.');
        return { success: false };
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error?.response?.data?.message || '회원 조회에 실패했습니다.');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    lookupUser,
    isLoading,
    error,
    userData,
  };
};

