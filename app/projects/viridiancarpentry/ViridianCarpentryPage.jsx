import React from 'react'
import SideBar from "../../../components/SideBar"

const ViridianCarpentryPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70]  px-14 py-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up pb-4">Viridian Carpentry</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">Portfolio Site</h3>


    <p className="pt-24 w-3/4 text-md md:text-lg lg:text-lg">This website was developed for Viridian Carpentry, a local joinery business. The site showcases their portfolio, features customer testimonials, and includes a contact form for clients to reach out. </p>


    <div className="flex flex-col md:flex-row lg:flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
    <p className="pt-4 md:pb-14 lg:pb-14 pb-0 md:w-2/3 lg:w-2/3 w-full">Nextjs / JavaScript / CSS / Tailwind / Bootstrap </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
    <p className="pt-4"><a href="https://www.viridiancarpentry.co.uk" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="https://github.com/Szoph/Viridian" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-col-reverse lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-8 pr-4">
      <p className="text-md md:text-lg lg:text-lg">The Viridian Carpentry website demonstrates my ability to create functional and aesthetically pleasing websites.  </p>

      <p className='text-md md:text-lg lg:text-lg'>I utilised Next.js for it's powerful React framework capabilities, Bootstrap for functional and responsive elements such as a carousel and tabs for the portfolio, and CSS and Tailwind for custom styling. This project not only showcases my technical skills but also my ability to deliver a product that meets the specific needs of a local business. </p>
      </div>

      <img src="/ViridianCarpentry.png" className="object-cover md:w-96 h-auto lg:w-2/4  w-full mb-24"  />
    </div>
  </div>
  )
}

export default ViridianCarpentryPage