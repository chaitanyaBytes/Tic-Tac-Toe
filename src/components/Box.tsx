import { useState } from "react";

export function Box() {
  const [display, setDisplay] = useState(" ");

  function handleClick() {
    if (display == " ") {
      setDisplay("O");
    }
  }

  return (
    <div
      className="flex size-24 text-white cursor-pointer justify-center pt-4 text-5xl font-bold"
      onClick={handleClick}
    >
      {display}
    </div>
  );
}

export function Box1() {
  const [display, setDisplay] = useState(" ");

  function handleClick() {
    if (display == " ") {
      setDisplay("O");
    }
  }

  return (
    <div
      className="flex size-24 border-y-2 border-pink-700 cursor-pointer text-white justify-center pt-4 text-5xl font-bold"
      onClick={handleClick}
    >
      {display}
    </div>
  );
}

export function Box2() {
  const [display, setDisplay] = useState(" ");

  function handleClick() {
    if (display == " ") {
      setDisplay("O");
    }
  }

  return (
    <div
      className="flex size-24 border-x-2 border-pink-700 cursor-pointer justify-center pt-4 text-5xl font-bold"
      onClick={handleClick}
    >{display}</div>
  );
}

export function Box3() {
  const [display, setDisplay] = useState(" ");

  function handleClick() {
    if (display == " ") {
      setDisplay("O");
    }
  }

  return (
    <div
      className="flex size-24 border-2 border-pink-700 cursor-pointer justify-center pt-4 text-5xl font-bold"
      onClick={handleClick}
    >{display}</div>
  );
}
