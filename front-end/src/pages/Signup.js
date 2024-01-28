import newparchment from "./assets/new-parchment.png";
import {useState} from "react";

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:8000/auth/users/",
                {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        repassword
                    }),
                });

            if (response.ok) {
                // Handle successful signup
                console.log('Signup successful');
            } else {
                // Handle signup error
                console.error('Signup failed');
            }

        } catch (error) {
            console.error('Error during signup:', error);
        }

    };


    return (
        <>
            <div className="h-screen w-screen bg-[#F7F2EC] flex flex-col items-center justify-center"
                 style={{backgroundImage: `url(${newparchment})`}}>
                <h1 id="cinzel" className="text-6xl text-[#6A482F] drop-shadow-lg mb-4">
                    Sign Up
                </h1>
                <div className="flex flex-col items-center justify-center m-4">
                    <div className="mb-8 flex w-full items-center justify-between">
                        <label id="playfair" className="mb-2 text-[#6A482F] text-2xl">
                            EMAIL
                        </label>
                        <input type="text" id="email" className="ml-9 text-2xl" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-8 flex w-full items-center justify-between">
                        <label id="playfair" className="mb-2 text-[#6A482F] text-2xl">
                            USERNAME
                        </label>
                        <input type="text" id="username" className="ml-7 text-2xl" value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="mb-8 flex w-full items-center justify-between">
                        <label id="playfair" className="mb-2 text-[#6A482F] text-2xl">
                            PASSWORD
                        </label>
                        <input type="text" id="password" className="ml-7 text-2xl" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>


                    <div className="mb-4 flex w-full items-center justify-between">
                        <label id="playfair" className="mb-2 text-[#6A482F] text-2xl">
                            RE-TYPE PASSWORD
                        </label>
                        <input type="password" id="password" className="ml-9 text-2xl" value={repassword}
                               onChange={(e) => setRepassword(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-16 text-lg text-[#DDD0C8] mt-10">
                        <button id="button-shadow" className="bg-[#61544C] py-2 px-14 font-medium"
                                onClick={handleSignup}>SIGN UP
                        </button>
                        {/*<button id="button-shadow" className="bg-[#61544C] py-2 px-12 font-medium">SIGN UP</button>*/}
                    </div>
                </div>


            </div>
        </>


    );


}
