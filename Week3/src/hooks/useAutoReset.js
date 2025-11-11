import { useCallback, useRef } from "react";

export function useAutoReset() {
  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleReset = useCallback((fn, delayMs = 3000) => {
    clear();
    timerRef.current = setTimeout(() => {
      fn?.();
      clear();
    }, delayMs);
  }, []);

  return { scheduleReset, clear };
}


