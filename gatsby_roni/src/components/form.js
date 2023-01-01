import React, { useState } from "react"
import { navigate } from 'gatsby'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setMessage({ ...message, [e.target.message]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/thank-you/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <div className="p-2  mt-4">
    <form data-netlify="true" action="/" name="contactUs" method="post" onSubmit={handleSubmit} >
{/* <label htmlFor="nameInput" className="text-4xl text-dark-tan mb-2 w-full font-bold">Send us a Message</label> */}
      <input type="hidden" name="form-name" value="contact-form" />
  
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input id="name" type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-yellow-600 bg-transparent py-2.5 px-0 text-lg text-white focus:border-yellow-600 focus:outline-none focus:ring-0"  onChange={handleChange} required placeholder="" />
          <label htmlFor="name"  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">Your name</label>
        </div>
        <div className="relative z-0">
          <input id="email" type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-yellow-600 bg-transparent py-2.5 px-0 text-lg text-white focus:border-yellow-600 focus:outline-none focus:ring-0" placeholder=''  onChange={handleChange} required  />
          <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea id="message" name="message" className="pl-1 peer block w-full appearance-none border-2 border-yellow-600 bg-transparent py-2.5 px-0 text-lg text-white focus:border-cyan-600 mt-2 focus:outline-none focus:ring-0" placeholder='' rows='8' minLength="20" onChange={handleChange} required></textarea>
          <label htmlFor="message" className=" absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-cyan-800 px-10 py-2 text-white">Send Message</button>

        </form>
  
        </div>
    )
}
export default ContactForm
