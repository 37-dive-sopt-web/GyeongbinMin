import { useState } from "react";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";
import RankingPage from "./pages/RankingPage";

function App() {
  const[tab , setTab] = useState ("game");
  return (
    <div>
      <Header tab={tab} setTab={setTab} />
      {tab === "game" ? <GamePage /> : <RankingPage />}
    </div>
  );
}

export default App;
