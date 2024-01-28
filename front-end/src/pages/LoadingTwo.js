import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react"
import loadingAnimation from "./assets/loadingAnimation.json"
import newparchment from "./assets/new-parchment.png";
import { useEffect } from "react";

export const LoadingTwo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Set a timeout to navigate after 60 seconds 
        const timeoutId = setTimeout(() => {
            navigate('/album'); 
        }, 15000);

        // Clear the timeout if the component unmounts to avoid memory leaks
        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    return (
        <div className="h-screen w-screen flex items-center justify-center" style={{ backgroundImage: `url(${newparchment})` }}>
            <Lottie animationData={loadingAnimation}/>
        </div>
    )
}