import { useCallback, useState } from "react";

export function useMatchEngine() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const reset = useCallback(() => {
    setFlippedCards([]);
    setMatchedCards([]);
    setIsProcessing(false);
  }, []);

  const handleClick = useCallback(
    (index, cards, onPairResult, onAllMatched) => {
      if (isProcessing) return;
      if (matchedCards.includes(index) || flippedCards.includes(index)) return;
      if (flippedCards.length >= 2) return;

      const newFlipped = [...flippedCards, index];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setIsProcessing(true);
        const [aIdx, bIdx] = newFlipped;
        const a = cards[aIdx];
        const b = cards[bIdx];
        const success = a.value === b.value;

        if (success) {
          if (onPairResult) onPairResult(a.value, b.value, true);
          setMatchedCards((prev) => {
            const next = [...prev, aIdx, bIdx];
            if (onAllMatched && next.length / 2 >= cards.length / 2) onAllMatched();
            return next;
          });
          setFlippedCards([]);
          setIsProcessing(false);
        } else {
          if (onPairResult) onPairResult(a.value, b.value, false);
          setTimeout(() => {
            setFlippedCards([]);
            setIsProcessing(false);
          }, 700);
        }
      }
    },
    [flippedCards, matchedCards, isProcessing]
  );

  return {
    flippedCards,
    matchedCards,
    isProcessing,
    handleClick,
    reset,
  };
}


