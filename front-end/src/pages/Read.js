import entry from "./assets/journal_entry.png";
import back from "./assets/turn-back.png"
import viewEntry from "./assets/read.png";
import lamp from "./assets/lamp.png"
export const Read = () => {
    return (<div className="relative bg-[#69472E]">
        <button><img src={back}  alt="back" className="absolute top-[20vh] left-[15vw] h-[5vh]"/></button>
       <div className="flex flex-col">
        {/*<h3*/}
        {/*    className="w-[15vw] ml-4 p-2 absolute top-[20vh] left-[15vw] bg-transparent outline-none"*/}
        {/*>Untitled Entry</h3>*/}
        {/*<h3 className="w-[15vw] ml-4 p-2 absolute top-[20vh] left-[65vw] bg-transparent text-right outline-none"*/}
        {/*> DATE</h3>*/}
        {/*<h3>Content goes here</h3>*/}
           <div>
        <img src={entry} alt="journal entry" className="h-[97vh] w-[55vw]" />
           </div>
           <div>
        <img src={lamp} alt="lamp" />
           </div>
       </div>
    </div>);
}