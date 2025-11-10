

const Header = ({ tab, setTab }) => {
    return (
      <header className="w-full flex flex-row justify-between px-6 py-4 bg-green-100 shadow-sm mx-auto">
        <h1 className="text-xl font-semibold">숫자 카드 짝 맞추기</h1>
  
        <div className="flex gap-2">
          <button
            className={`rounded-md border p-2 ${
              tab === "game"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setTab("game")}
          >
            게임
          </button>
  
          <button
            className={`rounded-md border p-2 ${
              tab === "ranking"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setTab("ranking")}
          >
            랭킹
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  