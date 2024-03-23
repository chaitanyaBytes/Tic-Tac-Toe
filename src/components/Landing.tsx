import { useNavigate } from "react-router-dom";

export function Landing() {
    const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center mt-[60%] md:mt-[20%]">
        <div className="flex justify-center place-items-center h-[5rem] w-[20rem] bg-black shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1)] shadow-pink-700 rounded-3xl text-white">
          <div className="text-3xl font-bold cursor-pointer" onClick={() => navigate('/Game')}>TAP TO PLAY</div>
        </div>
      </div>
    </>
  );
}
