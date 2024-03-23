import { useRecoilValue } from "recoil";
import { playerState } from "../store/player";
import { winState } from "../store/win";
import { boxesState } from "../store/boxes";

export function Player() {
  const player = useRecoilValue(playerState);
  const winner = useRecoilValue(winState);
  const boxes = useRecoilValue(boxesState);

  function boxesFull(boxes: string[]) {
    return boxes.every((box) => box !== "");
  }

  return (
    <>
      {!winner[0] && !boxesFull(boxes) && (
        <div className="h-16 w-80 bg-rose-500 rounded-xl text-center text-3xl pt-3 font-semibold shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] shadow-blue-700">
          Current Player: {player}
        </div>
      )}

      {(winner[0] || boxesFull(boxes)) && (
        <div className="h-16 w-80 bg-red-600 rounded-full text-center text-3xl pt-3 font-bold shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] shadow-blue-400">
          GAME OVER!
        </div>
      )}
    </>
  );
}
