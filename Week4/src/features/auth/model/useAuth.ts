import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/login';
import { useUserStore } from '../../../entities/user';

export const useAuth = () => {
  const navigate = useNavigate();
  const { setUserId } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await login({ username, password });

      if (response.success && response.data) {
        // userId를 문자열로 변환하여 저장
        setUserId(String(response.data.userId));
        navigate('/my-page');
        return { success: true };
      } else {
        setError(response.message || '로그인에 실패했습니다.');
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
          };

          if (serverError.message) {
            setError(serverError.message);
          } else {
            setError('로그인에 실패했습니다.');
          }
        } else {
          setError('로그인에 실패했습니다.');
        }
      } else {
        setError('로그인에 실패했습니다.');
      }

      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    isLoading,
    error,
  };
};

