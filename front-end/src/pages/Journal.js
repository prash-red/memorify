import { useNavigate } from "react-router-dom";
import entry from './assets/journal_entry.png';
import quill from "./assets/quill.png";
import oldparchment from "./assets/old-parchment.png";

export const Journal = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // navigate("/input")
    }
    return (
        <div className="h-screen w-screen" style={{ backgroundImage: `url(${oldparchment})` }}>
            <div className="flex">
                <div className="relative">
                    <div className="relative">
                        <input
                            type="text"
                            id="artStyle"
                            placeholder="Untitled Entry"
                            className="w-[15vw] ml-4 p-2 absolute top-[20vh] left-[10vw] bg-transparent outline-none"
                        />
                        <input
                            type="text"
                            id="artStyle"
                            placeholder="TimeStamp"
                            className="w-[15vw] ml-4 p-2 absolute top-[20vh] left-[30vw] bg-transparent text-right outline-none"
                        />
                        <input
                            type="text"
                            id="entry"
                            placeholder="Enter your journal entry here."
                            className="w-[33vw] h-[55vh] ml-4 p-2 absolute top-[27vh] left-[8vw] bg-transparent overflow-auto"
                        />

                        <img src={entry} alt="journal entry" className="h-screen w-[55vw] p-5" />
                    </div>

                    <img src={quill} alt="quill" className="absolute bottom-0 left-[41vw]" />
                </div>

                <div className="flex flex-col h-screen">
                    <div className="p-10 text-left">
                        <h1 id="cinzel" className="text-4xl text-[#6A482F] drop-shadow-lg m-4 pt-10">JOURNAL ENTRY</h1>
                        <h2 className="w-[23vw] ml-4 tracking-wide">Enter your journal entry in the parchment to capture and preserve your thoughts and memories.</h2>
                        <h2 id="cinzel" className="text-2xl text-[#323232] drop-shadow-lg m-4 pt-2">SELECT AN ART STYLE :</h2>
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    id="artStyle"*/}
                        {/*    placeholder="Eg:Black & White Comic, Superhero Comic etc."*/}
                        {/*    className="text-2xl w-[40vw] ml-4 p-2"*/}
                        {/*/>*/}
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
                        </div>
                        <button
                            id="button-shadow"
                            className="bg-[#61544C] font-medium text-[#DDD0C8] py-2 px-14 mt-12"
                            onClick={() => { handleButtonClick("login") }}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>


            </div>


            </div>

    )
}