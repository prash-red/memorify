import { useNavigate } from "react-router-dom";
import newparchment from "./assets/new-parchment.png";
import page from "./assets/page-img.JPG";
import back from "./assets/turn-back.png";
import next from "./assets/turn-next.png";
import gallery from "./assets/gallery-icon.png";
import topleft from "./assets/top-left.png";
import topright from "./assets/top-right.png";
import botleft from "./assets/bot-left.png";
import botright from "./assets/bot-right.png";

export const Album = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // navigate("/input")
    }
    
    return (
        <div className="h-screen w-screen flex flex-row" style={{ backgroundImage: `url(${newparchment})` }}>
            <div className="h-full w-1/2 flex flex-col items-center border-r-2 border-[#855048]">
                <div className="h-3/4 w-10/12">
                    <div className="relative h-3/4 w-full bg-white mt-10 p-5">
                        <img src={topleft} alt="corner" className="absolute top-[-10px] left-[-10px] z-10" />
                        <img src={topright} alt="corner" className="absolute top-[-10px] right-[-10px] z-10" />
                        <img src={botleft} alt="corner" className="absolute bottom-[-10px] left-[-10px] z-10" />
                        <img src={botright} alt="corner" className="absolute bottom-[-10px] right-[-10px] z-10" />
                        <img src={page} alt="Entry Image" className="w-full max-h-full h-auto z-0" />
                    </div>

                    <div id="quattro" className="w-full text-left mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>

                <div className="w-10/12 flex flex-row items-center justify-between mt-32">
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <button><img src={back} alt="Previous page" className="h-12"/></button>
                        <button><img src={gallery} alt="Album Gallery" className="h-14"/></button>
                    </div>
                    <h2 id="cinzel-light" className="font-medium text-lg">JOURNAL TITLE</h2>
                </div>
            </div>

            <div className="h-full w-1/2 flex flex-col items-center">
                <div className="h-3/4 w-10/12">
                    <div className="relative h-3/4 w-full bg-white mt-10 p-5">
                        <img src={topleft} alt="corner" className="absolute top-[-10px] left-[-10px] z-10" />
                        <img src={topright} alt="corner" className="absolute top-[-10px] right-[-10px] z-10" />
                        <img src={botleft} alt="corner" className="absolute bottom-[-10px] left-[-10px] z-10" />
                        <img src={botright} alt="corner" className="absolute bottom-[-10px] right-[-10px] z-10" />
                        <img src={page} alt="Entry Image" className="w-full max-h-full h-auto z-0" />
                    </div>

                    <div id="quattro" className="w-full text-left mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>

                <div className="w-10/12 flex flex-row items-center justify-between mt-32">
                    <h2 id="cinzel-light" className="font-medium text-lg">JOURNAL TITLE</h2>
                    <button><img src={next} alt="Previous page" className="h-12"/></button>
                </div>
            </div>
        </div>
    
    )
}