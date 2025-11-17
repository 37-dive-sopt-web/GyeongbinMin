const LevelSelect = ({ level, onChange }) => {
  return (
    <div className="bg-white rounded-lg p-3 border">
      <select
        value={level}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full text-lg font-semibold"
      >
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
      </select>
    </div>
  );
};

export default LevelSelect;
