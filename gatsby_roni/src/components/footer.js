import * as React from "react"



const Footer = () => {

return (
        <div className='text-center text-yellow-600'>
            <p className="text-lg" >Built with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
            <p className="text-lg">&copy; {new Date().getFullYear()}  Roni: Developer;</p>
        <a className="text-sm text-purple-500" href="https://roni23.sanity.studio/" alt="secret link" target="_blank" rel="noreferrer">admin</a>
        </div>
        )
}
export default Footer
