import { useNavigate } from "react-router-dom";
import entry from "./assets/journal_entry.png";
import back from "./assets/turn-back.png"
import lamp from "./assets/lamp.png"
import oldparchment from "./assets/old-parchment.png"

export const Read = (props) => {

    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen overflow-y-hidden" style={{ backgroundImage: `url(${oldparchment})`}}>
            <button onClick={() => navigate("/album")}>
                <img src={back} alt="back" className="absolute top-[20vh] left-[35vw] h-[5vh]" />
            </button>
            <div className="flex">
                <h3 className="absolute top-[21vh] left-[47vw]" >{props.title}</h3>
                {/*<h3 className="absolute top-[21vh] left-[60vw]" >{props.date}</h3>*/}
                <h3 className="absolute top-[28vh] left-[33vw] h-[80vh] w-[35vw]" >{props.content}</h3>
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