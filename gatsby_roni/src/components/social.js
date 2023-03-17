import React from "react";

import {FiGithub } from "@react-icons/all-files/fi/FiGithub";
import {FiLinkedin} from "@react-icons/all-files/fi/FiLinkedin";
import {FiMail} from "@react-icons/all-files/fi/FiMail";
import { Link } from "gatsby";

export default function Social() {
    return (
        <>
        <div className="md:sticky flex gap-4 md:block top-5 w-20 p-8">
            <a href='https://github.com/OlliesWorld' target="_blank" rel="noreferrer" aria-label="link to my github profile"><FiGithub className="text-white text-2xl mb-4 hover:text-yellow-600" /></a>
            <a href='https://www.linkedin.com/in/roni-lockwood/' target="_blank" rel="noreferrer" aria-label="link to my Linkedin profile"><FiLinkedin className="text-white text-2xl mb-4 hover:text-yellow-600" /></a>
            <a href='mailto:roniwork@duck.com' target="_blank" rel="noreferrer" aria-label="link to email me"><FiMail className="text-white text-2xl mb-4 hover:text-yellow-600" /></a>
        </div>
        <div className="first-div">
        <div className="second-div">
            <div className="border-b-solid border-2 w-12"></div>
            <Link to="/#top" className="rotate-name  text-xl text-white"> Roni's Portfolio</Link>
        </div>
        </div>
        </>
    )
}