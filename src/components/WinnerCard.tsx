import { useRecoilValue } from "recoil";
import { winState } from "../store/win";

export function WinnerCard(){
    const winner = useRecoilValue(winState);

    return <>
    {winner[1]} && <div className="h-16 w-80 bg-pink-400 rounded-2xl text-center text-3xl pt-3 font-semibold">
        Winner is: {winner}
    </div>
    </>
}