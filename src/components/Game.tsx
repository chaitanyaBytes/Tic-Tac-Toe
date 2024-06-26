import { Board } from "./board.tsx";
import { Player } from "./Player.tsx";
import { WinnerCard } from "./WinnerCard.tsx";
import { Reset } from "./Reset.tsx";

export function Game() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[15%] md:mt-[2%]">
        <Player></Player>
      </div>
      <div className="my-[20%] md:my-[6%]">
        <Board></Board>
        <Reset></Reset>
      </div>
      <div className="mt-[12%] md:mt-[0%]">
        <WinnerCard></WinnerCard>
      </div>
    </div>
  );
}
