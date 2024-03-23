import { useRecoilValue } from "recoil";
import { winState } from "../store/win";
import { boxesState } from "../store/boxes";

export function WinnerCard() {
  const winner = useRecoilValue(winState);
  const boxes = useRecoilValue(boxesState);

  function boxesFull(boxes: string[]) {
    return boxes.every((box) => box !== "");
  }

  return (
    <>
      {winner[0] && (
        <div className="h-16 w-44 bg-rose-500 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] shadow-blue-700 rounded-2xl text-center text-3xl pt-3 font-bold">
          {winner} WINS !!
        </div>
      )}

      {!winner[0] && boxesFull(boxes) && (
        <div className="h-16 w-60 bg-rose-500 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] shadow-blue-700 rounded-2xl text-center text-3xl pt-3 font-bold">
          GAME DRAW !!
        </div>
      )}
    </>
  );
}
