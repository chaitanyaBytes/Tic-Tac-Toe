import { RecoilRoot } from "recoil";
import { Board } from "./components/board.tsx";
import { Player } from "./components/Player.tsx";
import { WinnerCard } from "./components/WinnerCard.tsx";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="flex flex-col items-center">
          <div className="mt-[2%]">
            <Player></Player>
          </div>
          <div className="my-[6%]">
            <Board></Board>
          </div>
          <div className="mb-[2%]">
            <WinnerCard></WinnerCard>
          </div>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
