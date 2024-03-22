import { useRecoilValue } from "recoil";
import { playerState } from "../store/player";

export function Player(){
    const player = useRecoilValue(playerState);

    return <>
    <div className="h-16 w-80 bg-pink-400 rounded-2xl text-center text-3xl pt-3 font-semibold">
        Current Player: {player}
    </div>
    </>
}