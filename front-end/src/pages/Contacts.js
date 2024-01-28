import simpsons from "./assets/simpsons.png"
import marvel from "./assets/marvel.png"
import looney from "./assets/looney.png"
import newparc from "./assets/new-parchment.png"
import oldparchment from "./assets/old-parchment.png";
import {useState} from "react";
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
    return (
        <>
            <div className="flex flex-row h-screen w-screen" style={{ backgroundImage: `url(${oldparchment})` }}>
                <div className="w-[50vw] flex flex-col items-center justify-center">
                    <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-5">Enter Contact</h1>
                    <div className="h-5/6 w-9/12 bg-contain bg-no-repeat flex flex-col overflow-y-auto px-12 pt-20 pb-96" style={{ backgroundImage: `url(${list})` }}>

                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                NAME
                            </label>
                            <input id="cinzel-light" type="text"className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>

                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                NAME
                            </label>
                            <input id="cinzel-light" type="text"className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>
                        
                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                NAME
                            </label>
                            <input id="cinzel-light" type="text"className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>

                        <div className="mb-4 flex w-full items-center justify-between">
                            <label id="playfair" className="text-[#6A482F] text-2xl">
                                NAME
                            </label>
                            <input id="cinzel-light" type="text"className="ml-9 text-2xl bg-transparent border-b-2 border-[#855048] outline-none"/>
                        </div>


                        

                    </div>
                    {/* <img src={list} alt="Contacts List" className="h-5/6" /> */}
                </div>
                <div className="w-[50vw]">
                    <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-5">Select an art style</h1>
                    <button onClick={handleSimpsons} className="relative" style={{ left:'6rem' }}>
                        <img
                            src={simpsons}
                            alt="simpsons"
                            className={artStyle === "The Simpsons" ? "h-[45vh]" : "h-[38vh]" || artStyle==="Looney Tunes" ? "h-[38vh] mt-0": ""}

                        />
                    </button>
                    <button onClick={handleMarvel} className="relative" style={{ top: '10rem', left:'10rem' }}><img src={marvel} alt="marvel" className={artStyle === "Marvel" ? "h-[45vh]" : "h-[38vh]"}/></button>
                    <button onClick={handleLooney} className="relative" style={{ top: '18rem', right:'20rem' }}><img src={looney} alt="looney" className={artStyle === "Looney Tunes" ? "h-[45vh]" : "h-[38vh]"} /></button>
                </div>


            </div>

        </>
    );
}