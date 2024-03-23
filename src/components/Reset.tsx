import { useSetRecoilState } from "recoil";
import { boxesState } from "../store/boxes";
import { playerState } from "../store/player";
import { winState } from "../store/win";

export function Reset() {
  const setBoxes = useSetRecoilState(boxesState);
  const setPlayer = useSetRecoilState(playerState);
  const setWinner = useSetRecoilState(winState);

  function resetGame() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setBoxes((boxes) => boxes.map((box) => (box = "")));
    setPlayer("O");
    setWinner([false,""]);
  }

  return (
    <>
      <div
        className="absolute mt-[3rem] ml-[7rem] md:mt-[-11rem] md:ml-[25rem] shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] shadow-fuchsia-900 h-10 w-24 bg-fuchsia-600 rounded-2xl text-center text-2xl font-bold cursor-pointer"
        onClick={resetGame}
      >
        Reset
      </div>
    </>
  );
}
