import * as React from "react"



const Footer = () => {

return (
        <div className='text-center text-yellow-600'>
            <p className="text-lg" >Built with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
            <p className="text-lg">&copy; {new Date().getFullYear()}  Roni: Developer;</p>
        
        </div>
        )
}
export default Footer
