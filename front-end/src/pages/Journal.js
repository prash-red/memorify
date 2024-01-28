import { useNavigate } from "react-router-dom";
import entry from './assets/journal_entry.png';
import quill from "./assets/quill.png";
import oldparchment from "./assets/old-parchment.png";
import { useState } from "react";

export const Journal = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // navigate("/input")
    }

    const [content, setContent] = useState("");
    const handleChange = (e) => {
        setContent(e.target.value);
      };


    return (
        <div className="h-screen w-screen" style={{ backgroundImage: `url(${oldparchment})` }}>
            <div className="flex">
                <div className="relative">
                    <div className="relative">
                        <textarea id="quattro" value={content} onChange={handleChange} placeholder="Start writing here..."
                        className="w-[37vw] h-[60vh] ml-4 p-2 absolute top-[19vh] left-[8vw] bg-transparent overflow-auto whitespace-normal outline-none">
                        </textarea>

                        <img src={entry} alt="journal entry" className="h-screen w-[55vw] p-5" />
                    </div>

                    <img src={quill} alt="quill" className="absolute bottom-0 left-[43vw]" />
                </div>

                <div className="flex flex-col h-screen">
                    <div className="p-10 text-left">
                        <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-4 pt-10">JOURNAL ENTRY</h1>
                        <h2 id="cinzel-light" className="w-[23vw] ml-4 tracking-wide text-lg font-semibold">Write your journal entry on the virtual parchment to transform your thoughts into lasting memories! </h2>
                        
                        <button
                            id="button-shadow"
                            className="bg-[#61544C] font-semibold text-lg text-[#DDD0C8] py-2 px-14 mt-12 ml-4"
                            onClick={() => { console.log(content) }}
                        >
                            SAVE
                        </button>

                        {/* <h2 id="cinzel" className="text-2xl text-[#323232] drop-shadow-lg m-4 pt-2">SELECT AN ART STYLE :</h2>
                        
                        <div className="flex flex-col space-y-5">
                            <button
                                id="button-shadow"
                                className="bg-[#61544C] font-medium text-[#DDD0C8] py-2 px-14 rounded-2xl"
                                onClick={() => { handleButtonClick("login") }}
                            >
                                Style 1
                            </button>

                            <button
                                id="button-shadow"
                                className="bg-[#61544C] font-medium text-[#DDD0C8] py-2 px-14 rounded-2xl"
                                onClick={() => { handleButtonClick("login") }}
                            >
                                Style 2
                            </button>

                            <button
                                id="button-shadow"
                                className="bg-[#61544C] font-medium text-[#DDD0C8] py-2 px-14 rounded-2xl"
                                onClick={() => { handleButtonClick("login") }}
                            >
                                Style 3
                            </button>
                        </div> */}
                    </div>
                </div>


            </div>


            </div>

    )
}