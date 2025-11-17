const Card = ({ card, isFlipped, isMatched, onClick, disabled }) => {
  return (
    <div
      className={`aspect-square rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer transition-all ${
        isFlipped || isMatched
          ? "bg-white text-gray-800"
          : "bg-blue-300 text-white hover:bg-blue-400"
      } ${isMatched ? "opacity-60" : ""} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      onClick={onClick}
    >
      {isFlipped || isMatched ? card.value : "?"}
    </div>
  );
};

export default Card;

