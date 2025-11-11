import { useCallback, useEffect, useRef, useState } from "react";

// Countdown timer hook with fractional seconds support
// stepSeconds: e.g., 0.1 for 100ms ticks
export function useCountdown(initialSeconds = 45, stepSeconds = 0.1, onFinish) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const latestOnFinish = useRef(onFinish);

  useEffect(() => {
    latestOnFinish.current = onFinish;
  }, [onFinish]);

  // Reset when initialSeconds changes
  useEffect(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(false);
  }, [initialSeconds]);

  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const tickMs = Math.max(10, Math.round(stepSeconds * 1000));

  useEffect(() => {
    if (!isRunning) {
      clear();
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = Math.max(0, +(prev - stepSeconds).toFixed(1));
        if (next <= 0) {
          // stop and fire finish
          clear();
          setIsRunning(false);
          if (latestOnFinish.current) latestOnFinish.current();
        }
        return next;
      });
    }, tickMs);
    return clear;
  }, [isRunning, tickMs, stepSeconds]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => {
    clear();
    setIsRunning(false);
  }, []);
  const reset = useCallback(
    (nextInitialSeconds = initialSeconds) => {
      clear();
      setTimeLeft(nextInitialSeconds);
      setIsRunning(false);
    },
    [initialSeconds]
  );

  return { timeLeft, isRunning, start, pause, reset, setTimeLeft, setIsRunning };
}


