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
import write from "./assets/write.png";
import scroll from "./assets/scroll.png";

import { useState } from "react";

export const Album = () => {
    const navigate = useNavigate();

    const [leftScrolls, setLeftScrolls] = useState([{"Title": "DAY 1", "Text": "Content"}, {"Title": "DAY 2", "Text": "Content"}])
    const [rightScrolls, setRightScrolls] = useState([{"Title": "DAY 1", "Text": "Content"}, {"Title": "DAY 2", "Text": "Content"}])

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

                    <div id="quattro" className="w-full h-1/3 text-xl text-left mt-10 flex flex-row">
                        <div className="w-1/2 h-full flex flex-col justify-between">
                            <div className="w-full h-full flex flex-col">
                                <span>John Doe </span>
                                <span>john.doe@google.com</span>
                            </div>

                            <div className="flex flex-row items-end space-x-4">
                                <button><img src={back} alt="Previous page" className="h-12"/></button>
                                <button onClick={() => {navigate("/journal")}}><img src={write} alt="New Journal" className="h-20"/></button>
                            </div>
                        </div>

                        <div className="w-1/2 h-full flex flex-col items-center overflow-y-auto">
                            {leftScrolls.map((s) => {
                                return(
                                <button className="relative">
                                    <img src={scroll} alt="Rolled up scroll" />
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#6A482F]">{s.Title}</span>
                                </button>
                                );
                            })}
                        </div>

                    </div>
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

                    <div id="quattro" className="w-full h-1/3 text-xl text-left mt-10 flex flex-row">
                        <div className="w-1/2 h-full flex flex-col items-center overflow-y-auto">
                            {rightScrolls.map((s) => {
                                return(
                                <button className="relative">
                                    <img src={scroll} alt="Rolled up scroll" />
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#6A482F]">{s.Title}</span>
                                </button>
                                );
                            })}
                        </div>

                        <div className="w-1/2 h-full flex flex-col justify-between">
                            <div className="w-full h-full flex flex-col text-right">
                                <span>John Doe </span>
                                <span>john.doe@google.com</span>
                            </div>

                            <div className="flex flex-row items-end justify-end space-x-4">
                                <button><img src={next} alt="Previous page" className="h-12"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}