import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // navigate("/input")
    }
    return (
        <div className="h-screen w-screen flex flex-col bg-[#F7F2EC] items-center justify-center">
            <h1 className="text-6xl text-[#6A482F]">MEMORIFY</h1>
            <h2 className="text-xl max-w-3xl">
                Capture your cherished moments with our innovative photo album experience 
                and explore the magic of reliving your memories in a unique and engaging way!
            </h2>
            <div className="flex space-x-16 text-xl">
                <button>LOG IN</button>
                <button>SIGN UP</button>
            </div>
        </div>
    
    )
}