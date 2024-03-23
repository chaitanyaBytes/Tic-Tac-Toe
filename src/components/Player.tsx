import { useRecoilValue } from "recoil";
import { playerState } from "../store/player";
import { winState } from "../store/win";
import { boxesState } from "../store/boxes";

export function Player() {
  const player = useRecoilValue(playerState);
  const winner = useRecoilValue(winState);
  const boxes = useRecoilValue(boxesState);

  function boxesFull(boxes: string[]) {
    for (let i = 0; i < boxes.length; i++) {
      if (!boxes[i]) {
        return false;
      }
    }
    return true;
  }

  return (
    <>
      {!winner[0] && !boxesFull(boxes) && (
        <div className="h-16 w-80 bg-sky-500 rounded-xl text-center text-3xl pt-3 font-semibold shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1)] shadow-pink-700">
          Current Player: {player}
        </div>
      )}

      {(winner[0] || boxesFull(boxes)) && (
        <div className="h-16 w-80 bg-red-700 rounded-full text-center text-3xl pt-3 font-bold">
          GAME OVER!
        </div>
      )}
    </>
  );
}
