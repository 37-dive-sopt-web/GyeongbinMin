import { useState, useEffect } from "react";
import GameBoard from "../components/game/GameBoard";
import { buildDeck } from "../utils/shufflecard";

const GamePage = () => {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const deck = buildDeck(level);
    setCards(deck);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameStatus("playing");
    setIsProcessing(false);
  }, [level]);

  const handleCardClick = (index) => {
    if (gameStatus !== "playing" || isProcessing) return;
    if (matchedCards.includes(index) || flippedCards.includes(index)) return;
    if (flippedCards.length >= 2) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsProcessing(true);
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.value === secondCard.value) {
        setMatchedCards((prev) => {
          const newMatched = [...prev, firstIndex, secondIndex];
          const totalPairs = cards.length / 2;
          if (newMatched.length / 2 >= totalPairs) {
            setGameStatus("won");
            setTimeout(() => {
              const deck = buildDeck(level);
              setCards(deck);
              setFlippedCards([]);
              setMatchedCards([]);
              setGameStatus("playing");
              setIsProcessing(false);
            }, 3000);
          }
          return newMatched;
        });
        setFlippedCards([]);
        setIsProcessing(false);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setIsProcessing(false);
        }, 700);
      }
    }
  };

  const handleReset = () => {
    const deck = buildDeck(level);
    setCards(deck);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameStatus("playing");
    setIsProcessing(false);
  };

  return (
    <main className="w-3/4 mx-auto my-6 p-6 bg-blue-400 rounded-xl shadow">
      <div className="flex gap-6">
        <section className="flex-1">
          <h2 className="text-lg font-semibold mb-4">게임 보드</h2>
          {cards.length > 0 && (
            <GameBoard
              cards={cards}
              flippedCards={flippedCards}
              matchedCards={matchedCards}
              onCardClick={handleCardClick}
              disabled={isProcessing || gameStatus !== "playing"}
            />
          )}
        </section>

        <section className="w-80 flex flex-col gap-4">
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition-colors"
            >
              게임 리셋
            </button>
          </div>

          <div className="bg-white rounded-lg p-3 border">
            <select
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full text-lg font-semibold"
            >
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="bg-white rounded-lg p-3 border">
              <div className="text-sm text-gray-600">남은 시간</div>
              <div className="text-xl font-bold">45.00</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="text-sm text-gray-600">성공한 짝</div>
              <div className="text-xl font-bold">0/8</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="text-sm text-gray-600">남은 짝</div>
              <div className="text-xl font-bold">8</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 border">
            <div className="text-sm font-semibold mb-2">안내 메시지</div>
            <div className="text-sm text-gray-700">카드를 눌러 게임을 시작</div>
          </div>

          <div className="bg-white rounded-lg p-3 border">
            <div className="text-sm font-semibold mb-2">최근 히스토리</div>
            <div className="text-sm text-gray-500">아직 뒤집은 카드가 없어요</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GamePage;

