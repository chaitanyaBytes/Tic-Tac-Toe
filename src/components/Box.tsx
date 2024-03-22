import { useState } from "react";
import { playerState } from "../store/player";
import { useRecoilState } from "recoil";
import { winState } from "../store/win";

export function Box() {
  const [player, setPlayer] = useRecoilState(playerState);
  const [display, setDisplay] = useState(" ");
  const [won, isWon] = useRecoilState(winState);

  function handleClick() {
    if (!won) {
      if (display == " " && player == "O") {
        setDisplay("O");
        setPlayer("X");
      } else if (display == " " && player == "X") {
        setDisplay("X");
        setPlayer("O");
      }

      
    } 
  }

  return (
    <div
      className="flex size-24 text-white cursor-pointer justify-center pt-4 text-5xl font-bold border-2 border-pink-700"
      onClick={handleClick}
    >
      {display}
    </div>
  );
}

// export function Box1() {
//   const [player, setPlayer] = useRecoilState(playerState);
//   const [display, setDisplay] = useState(" ");

//   function handleClick() {
//     if (display == " " && player == "O") {
//       setDisplay("O");
//       setPlayer("X");
//     }
//     else if(display == " " && player == "X"){
//       setDisplay("X");
//       setPlayer("O");
//     }
//   }

//   return (
//     <div
//       className="flex size-24 border-y-2 border-pink-700 cursor-pointer text-white justify-center pt-4 text-5xl font-bold"
//       onClick={handleClick}
//     >
//       {display}
//     </div>
//   );
// }

// export function Box2() {
//   const [player, setPlayer] = useRecoilState(playerState);
//   const [display, setDisplay] = useState(" ");

//   function handleClick() {
//     if (display == " " && player == "O") {
//       setDisplay("O");
//       setPlayer("X");
//     }
//     else if(display == " " && player == "X"){
//       setDisplay("X");
//       setPlayer("O");
//     }
//   }

//   return (
//     <div
//       className="flex size-24 border-x-2 border-pink-700 cursor-pointer justify-center pt-4 text-5xl font-bold"
//       onClick={handleClick}
//     >{display}</div>
//   );
// }

// export function Box3() {
//   const [player, setPlayer] = useRecoilState(playerState);
//   const [display, setDisplay] = useState(" ");

//   function handleClick() {
//     if (display == " " && player == "O") {
//       setDisplay("O");
//       setPlayer("X");
//     }
//     else if(display == " " && player == "X"){
//       setDisplay("X");
//       setPlayer("O");
//     }
//   }

//   return (
//     <div
//       className="flex size-24 border-2 border-pink-700 cursor-pointer justify-center pt-4 text-5xl font-bold"
//       onClick={handleClick}
//     >{display}</div>
//   );
// }
