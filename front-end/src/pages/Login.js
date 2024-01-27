import newparchment from "./assets/new-parchment.png";

export const Login = () => {
    return (
        <>
            <div className="h-screen w-screen bg-[#F7F2EC] flex flex-col items-center justify-center" style={{ backgroundImage: `url(${newparchment})`}}> 
                <h1 id="cinzel" className="text-6xl text-[#6A482F] drop-shadow-lg mb-4">
                    LogIn
                </h1>
                <div className="flex flex-col items-center justify-center m-4">
                    <div className="mb-8 flex w-full items-center justify-between">
                        <label id="playfair" className="mb-2 text-[#6A482F] text-2xl">
                            EMAIL
                        </label>
                        <input type="text" id="email" className="ml-9 text-2xl" />
                    </div>


                    <div className="mb-4 flex items-center">
                        <label id="playfair" className="mb-2 text-[#6A482F] text-2xl">
                            PASSWORD
                        </label>
                        <input type="password" id="password" className="ml-9 text-2xl" />
                    </div>
                    <div className="flex space-x-16 text-lg text-[#DDD0C8] mt-10">
                        <button id="button-shadow" className="bg-[#61544C] py-2 px-14 font-medium">LOG IN</button>
                        {/*<button id="button-shadow" className="bg-[#61544C] py-2 px-12 font-medium">SIGN UP</button>*/}
                    </div>
                </div>


            </div>
        </>


    );




}
