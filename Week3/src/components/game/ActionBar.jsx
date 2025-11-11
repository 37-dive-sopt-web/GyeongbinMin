const ActionBar = ({ onReset }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onReset}
        className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition-colors"
      >
        게임 리셋
      </button>
    </div>
  );
};

export default ActionBar;


