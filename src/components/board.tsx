import { useEffect, useState } from "react";
import { Box } from "./Box";
import { playerState } from "../store/player";
import { useRecoilState, useSetRecoilState } from "recoil";
import { winState } from "../store/win";

export function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [player, setPlayer] = useRecoilState(playerState);
  const setWinner = useSetRecoilState(winState);

  useEffect(() => {
    const winner = calculateWinner(boxes);
    if (winner) {
      console.log("winner is ", winner);
      setWinner([true,winner]);
    }
  }, [boxes, setWinner]);

  function calculateWinner(boxes: string[]) {
    const winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [1, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCases.length; i++) {
      const [a, b, c]: number[] = winCases[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        console.log(boxes[a]);
        return boxes[a];
      }
    }
  }

  function handleClick(i: number) {
    if(calculateWinner(boxes)){
      return;
    }
    const nextBoxes = boxes.slice();
    if (boxes[i] == "" && player == "O") {
      nextBoxes[i] = "O";
      setPlayer("X");
    } else if (boxes[i] == "" && player == "X") {
      nextBoxes[i] = "X";
      setPlayer("O");
    }
    setBoxes(nextBoxes);
    console.log(boxes);
  }

  return (
    <>
      <div className="size-[20rem] bg-black shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1)] shadow-pink-700 rounded-3xl text-white p-4">
        <div className="flex flex-wrap">
          {boxes.map((box, i) => (
            <Box key={i} boxValue={box} onBoxClick={() => handleClick(i)}></Box>
          ))}
        </div>
      </div>
    </>
  );
}
