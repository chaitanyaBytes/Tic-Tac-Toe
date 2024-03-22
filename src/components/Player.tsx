import { useState } from "react"

export function Player(){
    const [player, setPlayer] = useState("O");

    return <>
    <div className="h-16 w-80 bg-red-900 rounded-2xl text-center text-3xl pt-3 font-semibold">
        Current Player: {player}
    </div>
    </>
}