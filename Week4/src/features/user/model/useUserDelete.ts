import { useState } from 'react';
import { deleteUser } from '../api/deleteUser';

export const useUserDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUserAccount = async (userId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await deleteUser(userId);

      if (response.success) {
        return { success: true };
      } else {
        setError(response.message || '회원 탈퇴에 실패했습니다.');
        return { success: false };
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error?.response?.data?.message || '회원 탈퇴에 실패했습니다.');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteUserAccount,
    isLoading,
    error,
  };
};

