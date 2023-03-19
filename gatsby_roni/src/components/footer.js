import * as React from "react"

import {FiGithub } from "@react-icons/all-files/fi/FiGithub";
import {FiLinkedin} from "@react-icons/all-files/fi/FiLinkedin";
import {FiMail} from "@react-icons/all-files/fi/FiMail";



const Footer = () => {

return (
        <div className='bg-[#8b8b00] p-12 text-center text-white'>
            <p className="text-lg" >Built with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
            <p className="text-lg">&copy; {new Date().getFullYear()}  Roni: Developer;</p>
            <div className="flex justify-center mt-4 gap-4 md:hidden">
            <a href='https://github.com/OlliesWorld' target="_blank" rel="noreferrer" aria-label="link to my github profile"><FiGithub className="text-white text-2xl mb-4 hover:text-yellow-600" /></a>
            <a href='https://www.linkedin.com/in/roni-lockwood/' target="_blank" rel="noreferrer" aria-label="link to my Linkedin profile"><FiLinkedin className="text-white text-2xl mb-4 hover:text-yellow-600" /></a>
            <a href='mailto:roniwork@duck.com' target="_blank" rel="noreferrer" aria-label="link to email me"><FiMail className="text-white text-2xl mb-4 hover:text-yellow-600" /></a>
        </div>
        </div>
        )
}
export default Footer
