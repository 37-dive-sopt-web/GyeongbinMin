import { useMemo, useState } from "react";

export function useLevelConfig(initialLevel = 1) {
  const [level, setLevel] = useState(initialLevel);

  const timeLimit = useMemo(() => {
    if (level === 2) return 60;
    if (level === 3) return 100;
    return 45;
  }, [level]);

  return { level, setLevel, timeLimit };
}


