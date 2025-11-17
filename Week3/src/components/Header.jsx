const Header = ({ tab, setTab }) => {
    return (
      <header className=" w-3/4 mx-auto my-6 flex justify-between items-center py-10 px-10  bg-blue-400 rounded-xl">
      
          <h1 className="text-2xl font-semibold">숫자 카드 짝 맞추기</h1>
  
          <div className="flex gap-2">
            <button
              className={`rounded-md border px-3 py-1 text-sm ${
                tab === "game"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setTab("game")}
            >
              게임
            </button>
  
            <button
              className={`rounded-md border px-3 py-1 text-sm ${
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
    )
  };
  
  export default Header;