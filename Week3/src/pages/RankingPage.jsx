import { useRanking } from "../hooks";
import RankingTable from "../components/ranking/RankingTable";

const RankingPage = () => {
  const { rankings, clearRankings } = useRanking();

  return (
    <main className="w-3/4 mx-auto my-6 p-6 bg-blue-400 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">랭킹</h2>
      <div className="bg-white rounded-lg p-6 border">
        <RankingTable rankings={rankings} onClear={clearRankings} />
      </div>
    </main>
  );
};

export default RankingPage;

