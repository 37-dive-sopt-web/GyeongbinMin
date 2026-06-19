import { useState } from 'react';
import { updateUserProfile } from '../api/updateUserProfile';

export const useUserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProfile = async (userId: string, userData: { name?: string; email?: string; age?: number }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await updateUserProfile(userId, userData);

      if (response.success && response.data) {
        return { success: true, data: response.data };
      } else {
        setError(response.message || '프로필 수정에 실패했습니다.');
        return { success: false };
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error?.response?.data?.message || '프로필 수정에 실패했습니다.');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProfile,
    isLoading,
    error,
  };
};

