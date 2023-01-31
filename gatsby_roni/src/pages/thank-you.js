import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

export default function Thanks() {
    return (
        <div className="bg-[#8b8b00]s h-screen">
            <Link to="/" className="text-purple-800 font-bold ml-24 text-2xl">Go Back </Link> 
            <div className="md:flex w-3/4"> 
            <StaticImage  alt="ollie and i" src="../images/smile.png" width={500} height={500} objectFit="contain" loading="lazy" />
                <h2 className="text-5xl md:text-8xl md:w-1/2 ml-8 md:mx-auto md:py-48">Thank you for sending a message! <br/>I will get back to you ASAP!!</h2>
                
            </div>
        </div>
    )
}