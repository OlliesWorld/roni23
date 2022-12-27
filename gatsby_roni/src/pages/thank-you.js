import React from "react";
import { Link } from "gatsby";


export default function Thanks() {
    return (
        <div className="bg-yellow-600 h-screen">
            <Link to="/" className="text-purple-800 font-bold ml-24 text-2xl">Go Back </Link> 
            <h2 className="text-8xl w-1/2 m-auto py-48">Thank you for sending a message! <br/>I will get back to you ASAP!!</h2>
        </div>
    )
}