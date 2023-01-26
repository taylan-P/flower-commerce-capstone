import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingContent from "../components/landing/LandingContent";


export default function Landing() {

    // useEffect(()=>{
    //     fetch(`/carts`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //       },
    //         body: JSON.stringify({
    //           user_id: user.id,
    //         })
    //     })
    // },[]);
    return (
        <>
            <LandingContent />
        </>
    );
}