import { useState, useEffect } from 'react';

const USER_ID_KEY = 'userId';

export const useUserStore = () => {
  const [userId, setUserIdState] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(USER_ID_KEY);
    if (stored) {
      setUserIdState(stored);
    }
  }, []);

  const setUserId = (id: string | null) => {
    if (id) {
      localStorage.setItem(USER_ID_KEY, id);
    } else {
      localStorage.removeItem(USER_ID_KEY);
    }
    setUserIdState(id);
  };

  return { userId, setUserId };
};

