import { useRecoilValue } from "recoil";
import { winState } from "../store/win";
import { boxesState } from "../store/boxes";

export function WinnerCard() {
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
      {winner[0] && (
        <div className="h-16 w-80 bg-pink-400 rounded-2xl text-center text-3xl pt-3 font-bold">
          WINNER IS {winner}!
        </div>
      )}

      {!winner[0] && boxesFull(boxes) && (
        <div className="h-16 w-60 bg-pink-400 rounded-2xl text-center text-3xl pt-3 font-semibold">
          Game Draw
        </div>
      )}
    </>
  );
}
