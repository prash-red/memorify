import { useNavigate } from "react-router-dom";
import linebreak from "./assets/rustic-line-break.png";
import oldparchment from "./assets/old-parchment.png";

export const Landing = () => {
    const navigate = useNavigate();

    const handleButtonClick = (destination) => { navigate(`/${destination}`) }

    return (
        <div className="h-screen w-screen flex flex-col bg-[#F7F2EC] items-center justify-center" style={{ backgroundImage: `url(${oldparchment})` }}>
            <h1 id="cinzel" className="text-6xl text-[#6A482F] drop-shadow-lg mb-4">MEMORIFY</h1>
            <div className="w-1/2 h-10 mb-3">
                <img src={linebreak} alt="Line Break" className="object-fill w-full h-full"/>
            </div>
    
            <h2 id="cinzel-light" className="text-xl max-w-3xl font-semibold mb-12">
                An innovative way to commemorate and reflect on life's journey, as well as
                everyone  who’s been with us along the way.
            </h2>
            <div className="flex space-x-16 text-lg text-[#DDD0C8]">
                <button id="button-shadow" className="bg-[#61544C] py-2 px-14 font-medium" onClick={() => {handleButtonClick("login")}} >LOG IN</button>
                <button id="button-shadow" className="bg-[#61544C] py-2 px-12 font-medium" onClick={() => {handleButtonClick("signup")}} >SIGN UP</button>
            </div>

        </div>
    
    )
}