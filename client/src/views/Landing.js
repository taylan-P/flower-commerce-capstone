import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingContent from "../components/landing/LandingContent";


export default function Landing({onRender , user}) {
    // const navigate = useNavigate();
    // // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     fetch("/me").then((response) => {
    //         if (response.ok) {
    //             response.json().then((user) => onRender(user));
    //         }
    //     });
    // }, []);

    // if (!user) navigate("/signup")

    return (
        <>
            {/* <Navbar /> */}
            <div>
                Welcome to the landing page
            </div>
        </>
    );
}