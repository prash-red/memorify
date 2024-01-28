import simpsons from "./assets/simpsons.png"
import marvel from "./assets/marvel.png"
import looney from "./assets/looney.png"
import newparc from "./assets/new-parchment.png"
import list from "./assets/contact-list.png"
import oldparchment from "./assets/old-parchment.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Contacts = () =>{
    const [artStyle, setArtStyle] = useState('The Simpsons');
    const handleSimpsons = ()=>{
        setArtStyle('The Simpsons')
    }
    const handleMarvel = () =>{
        setArtStyle('Marvel')
    }
    const handleLooney = () =>{
        setArtStyle('Looney Tunes')
    }
    const navigate = useNavigate();

    const handleButtonClick = (destination) => { navigate(`/${destination}`) }
    return (
        <>
            <div className="flex flex-row h-screen w-screen" style={{ backgroundImage: `url(${oldparchment})` }}>
                <div className="w-[50vw] flex flex-col items-center justify-center">
                    <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-5">Enter Contact</h1>
                    <div className="h-5/6 w-9/12 bg-contain bg-no-repeat flex flex-col overflow-y-auto px-12 pt-20 pb-96" style={{ backgroundImage: `url(${list})` }}>

                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                JON
                            </label>
                            <input id="cinzel-light" type="text" className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>

                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                PRASHANTH
                            </label>
                            <input id="cinzel-light" type="text" className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>

                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                SARAH
                            </label>
                            <input id="cinzel-light" type="text" className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>

                        {/*<div className="mb-4 flex w-full items-center justify-between">*/}
                        {/*    <label id="playfair" className="text-[#6A482F] text-2xl">*/}
                        {/*        NAME*/}
                        {/*    </label>*/}
                        {/*    <input id="cinzel-light" type="text"className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>*/}
                        {/*</div>*/}


                        

                    </div>
                    {/* <img src={list} alt="Contacts List" className="h-5/6" /> */}
                </div>
                <div className="w-[50vw]">
                    <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-5">Select an art style</h1>
                    <div className="flex flex-row">


                            <div className="flex justify-end">
                                <button onClick={handleSimpsons}>
                                    <img
                                        src={simpsons}
                                        alt="simpsons"
                                        className={artStyle === "The Simpsons" ? "h-[45vh]" : "h-[38vh]"}
                                    />
                                </button>
                                <button onClick={handleLooney}>
                                    <img
                                        src={looney}
                                        alt="looney"
                                        className={artStyle === "Looney Tunes" ? "h-[45vh]" : "h-[38vh]"}
                                    />
                                </button>
                            </div>



                            <div className="flex justify-center">
                                <button onClick={handleMarvel}>
                                    <img
                                        src={marvel}
                                        alt="marvel"
                                        className={artStyle === "Marvel" ? "h-[45vh]" : "h-[38vh]"}
                                    />
                                </button>
                            </div>
                    </div>
                    <button id="button-shadow" className="bg-[#61544C] py-2 px-14 font-medium mt-[30vh] ml-[55vh] text-[#DDD0C8]" onClick={()=>handleButtonClick('album')} >Next</button>
                </div>




            </div>

        </>
    );
}