import { useNavigate } from "react-router-dom";
import linebreak from "./rustic-line-break.png";

export const Landing = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // navigate("/input")
    }
    return (
        <div className="h-screen w-screen flex flex-col bg-[#F7F2EC] items-center justify-center">
            <h1 id="cinzel" className="text-6xl text-[#6A482F] drop-shadow-lg mb-4">MEMORIFY</h1>
            <div className="w-1/2 h-10 mb-3">
                <img src={linebreak} alt="Line Break" className="object-fill w-full h-full"/>
            </div>
    
            <h2 id="playfair" className="text-xl max-w-3xl font-medium mb-12">
                Capture your cherished moments with our innovative photo album experience 
                and explore the magic of reliving your memories in a unique and engaging way!
            </h2>
            <div className="flex space-x-16 text-lg text-[#DDD0C8]">
                <button id="button-shadow" className="bg-[#61544C] py-2 px-14 font-medium">LOG IN</button>
                <button id="button-shadow" className="bg-[#61544C] py-2 px-12 font-medium">SIGN UP</button>
            </div>
        </div>
    
    )
}