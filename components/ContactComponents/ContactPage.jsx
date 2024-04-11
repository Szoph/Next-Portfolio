import React from 'react'
import SideBar from "../SideBar"

const ContactPage = () => {
  return (
    <div className="w-full md:h-screen lg:h-screen h-full p-24 md:pl-44 lg:pl-44 bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70]">
        <SideBar />
        <h2 className="md:text-9xl lg:text-9xl text-4xl bring-up font-semibold">Contact</h2>
        <h3 className="md:text-4xl lg:text-4xl text-2xl">Get in touch</h3>
        <div className="flex md:flex-row lg:flex-row flex-col w-full gap-28">
        <form className="flex flex-col gap-6 pt-10 md:w-2/5 lg:w-2/5 w-full" action="mailto:szoph101@hotmail.co.uk" method="post" enctype="text/plain">
            <input type="text" name="name" className="opacity-75 focus:opacity-100 rounded-md p-2 dark:bg-[#96A9C7] bg-[#B08C70] text-[#f5ebe0] dark:text-medium placeholder-[#f5ebe0] dark:placeholder-medium focus:outline-none" 
            placeholder="Your name..."></input>
            <textarea name="message" placeholder="Your message..." className="opacity-75 focus:opacity-100 rounded-md p-2 h-28 dark:bg-[#96A9C7] bg-[#B08C70] text-[#f5ebe0] dark:text-medium placeholder-[#f5ebe0] dark:placeholder-medium focus:outline-none"></textarea>
            <button type="submit" className="flex self-end px-4 text-center py-2 dark:bg-[#96A9C7] bg-[#B08C70] text-[#f5ebe0] dark:text-medium rounded-md hover:dark:bg-[#C6D6EC] hover:bg-[#7E4F38]">Send</button>
        </form>
       <div className="bring-left">
       <h3 className="md:text-4xl lg:text-4xl text-2xl text-right">Email me directly at <span className="text-[#7E4F38] dark:text-[#C6D6EC]">szoph101@hotmail.co.uk</span></h3>
       <h3 className="md:text-4xl lg:text-4xl text-2xl text-right">Or message me on <a className="text-[#7E4F38] dark:text-[#C6D6EC] hover:cursor-pointer font-semibold" href="https://www.linkedin.com/in/sophie-woodcock-3a7578142/" target="_blank">LinkedIn</a></h3>
       </div>
        </div>

    </div>
  )
}

export default ContactPage