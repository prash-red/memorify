import entry from "./assets/journal_entry.png";
import back from "./assets/turn-back.png";
import lamp from "./assets/lamp.png";
import oldparchment from "./assets/old-parchment.png";

export const Read = () => {
    return (
        <div className="h-screen w-screen overflow-y-hidden" style={{ backgroundImage: `url(${oldparchment})`}}>
            <button>
                <img src={back} alt="back" className="absolute top-[20vh] left-[30vw] h-[5vh]" />
            </button>
            <div className="flex">
                <h3 className="absolute top-[21vh] left-[35vw]" >Untitled Entry</h3>
                <h3 className="absolute top-[21vh] left-[60vw]" >Timestamp</h3>
                <h3 className="absolute top-[28vh] left-[35vw]" >Content Goes Here...</h3>
                <div>
                    <img src={entry} alt="journal entry" className="h-[98vh] w-[55vw] ml-[23vw]" />
                </div>
                <div>
                    <img src={lamp} alt="lamp" className="mt-[33vh] mr-[15vw] h-[70vh]"/>
                </div>
            </div>
        </div>
    );

}