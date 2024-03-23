export function Reset() {
  function resetGame() {
    window.location.reload();
  }

  return (
    <>
      <div
        className="absolute mt-[-11rem] ml-[25rem] shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] shadow-fuchsia-900 h-10 w-24 bg-fuchsia-600 rounded-2xl text-center text-2xl font-bold cursor-pointer"
        onClick={resetGame}
      >
        Reset
      </div>
    </>
  );
}
