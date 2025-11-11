import { useState, useEffect } from "react";

const STORAGE_KEY = "cardGameRankings";

export function useRanking() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRankings(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse rankings:", e);
      }
    }
  }, []);

  const saveRanking = (level, clearTime) => {
    const newRecord = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      level,
      clearTime: parseFloat(clearTime.toFixed(2)),
    };

    const updated = [...rankings, newRecord].sort((a, b) => a.clearTime - b.clearTime);
    setRankings(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearRankings = () => {
    setRankings([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    rankings,
    saveRanking,
    clearRankings,
  };
}
