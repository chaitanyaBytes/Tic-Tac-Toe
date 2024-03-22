import { Board } from "./components/board.tsx";
import { Player } from "./components/Player.tsx";

function App() {
  return (
    <>
      <div className="flex justify-center mt-[2%]">
        <Player></Player>
      </div>
      <div className="flex justify-center mt-[8%]">
        <Board></Board>
      </div>
    </>
  );
}

export default App;
