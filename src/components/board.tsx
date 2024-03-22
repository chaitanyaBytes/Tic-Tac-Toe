import { Box } from "./Box";

export function Board() {
  return (
    <>
      <div className="size-[20rem] bg-black shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1)] shadow-pink-700 rounded-3xl text-white p-4">
        <div className="flex flex-wrap">
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </div>
      </div>
    </>
  );
}
