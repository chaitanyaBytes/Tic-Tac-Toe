type boxProps = {
  boxValue: string;
  onBoxClick: () => void;
};

export function Box({boxValue, onBoxClick}: boxProps) {
  return (
    <div
      className="flex size-24 text-white cursor-pointer justify-center pt-4 text-5xl font-bold border-2 border-pink-400"
      onClick={onBoxClick}
    >
      {boxValue}
    </div>
  );
}