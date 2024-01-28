import simpsons from "./assets/simpsons.png"
import marvel from "./assets/marvel.png"
import looney from "./assets/looney.png"
import newparc from "./assets/new-parchment.png"
import oldparchment from "./assets/old-parchment.png";
export const Contacts = () =>{
    return (
        <>
            <div className="flex flex-row h-screen w-screen" style={{ backgroundImage: `url(${oldparchment})` }}>
                <div className="w-[50vw]">
                    <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-5">Enter Contact</h1>
                </div>
                <div className="w-[50vw]">
                    <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-5">Select an art style</h1>
                    <button><img src={simpsons} alt="simpsons" className="h-[43vh]"/></button>
                    <button className="relative" style={{ top: '10rem' }}><img src={marvel} alt="marvel" className="h-[43vh]"/></button>
                    <button><img src={looney} alt="looney" className="h-[43vh] mr-[18vw]"/></button>
                </div>


            </div>

        </>
    );
}