import Card from "./Card";

const GameBoard = ({ cards, flippedCards, matchedCards, onCardClick, disabled }) => {
  const totalCards = cards.length;
  const gridCols =
    totalCards === 36
      ? "grid-cols-6"
      : totalCards === 24
      ? "grid-cols-6"
      : "grid-cols-4";


  return (
    <div className={`grid ${gridCols} gap-2 max-w-2xl mx-auto`}>
      {cards.map((card, index) => {
        const isFlipped = flippedCards.includes(index);
        const isMatched = matchedCards.includes(index);

        return (
          <Card
            key={card.id || index}
            card={card}
            isFlipped={isFlipped}
            isMatched={isMatched}
            onClick={() => onCardClick(index)}
            disabled={disabled || isMatched || isFlipped}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;

