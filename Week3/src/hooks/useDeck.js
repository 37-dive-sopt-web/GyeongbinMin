import { useEffect, useState } from "react";
import { buildDeck } from "../utils/shuffleCard";

export function useDeck(level) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(buildDeck(level));
  }, [level]);

  const regenerate = () => {
    setCards(buildDeck(level));
  };

  return { cards, setCards, regenerate };
}
