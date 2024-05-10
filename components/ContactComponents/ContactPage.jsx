import React from 'react'
import SideBar from "../SideBar"

const ContactPage = () => {
  return (
    <div className="w-full md:h-screen lg:h-screen h-screen p-24 md:pl-44 lg:pl-44 bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70]">
        <SideBar />
        <h2 className="md:text-9xl lg:text-9xl text-4xl bring-up font-semibold">Contact</h2>
        <h3 className="md:text-4xl lg:text-4xl text-2xl pb-5">Get in touch</h3>
        <div className="flex md:flex-row lg:flex-row flex-col w-full gap-28">
        
       <div className="bring-left">
       <h3 className="md:text-4xl lg:text-4xl text-2xl text-right">Email me directly at <span className="text-[#7E4F38] dark:text-[#C6D6EC]">swoodcock31@googlemail.com</span></h3>
       <h3 className="md:text-4xl lg:text-4xl text-2xl text-right">Or message me on <a className="text-[#7E4F38] dark:text-[#C6D6EC] hover:cursor-pointer font-semibold" href="https://www.linkedin.com/in/sophie-woodcock-3a7578142/" target="_blank">LinkedIn</a></h3>
       </div>
        </div>

    </div>
  )
}

export default ContactPage