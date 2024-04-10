import React from 'react'
import SideBar from "../../../components/SideBar";

const PortalsPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] p-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up">House of Portals</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">Text Adventure Game</h3>


    <p className="pt-24 w-3/4">This text adventure game was made during my software development bootcamp, built with JavaScript, HTML and Tailwind CSS. Players use key words to travel and interact with objects and characters. </p>


    <div className="flex flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
    <p className="pt-4 pb-14 w-2/3">JavaScript / HTML / Tailwind  </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
    <p className="pt-4"><a href="https://szoph.github.io/OOPgame/" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="https://github.com/Szoph/OOPgame" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-row lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 flex flex-col gap-8 pr-4">
      <p className="">House of Portals showcases the power of object-oriented programming, allowing for dynamic gameplay experiences and navigation through it's narritive. As the sole developer behind House of Portals, I used my passion for storytelling and design to bring this text adventure game to life.</p>

      </div>

      <img src="/OOPTextAdventureGame.png" className=" md:w-96 md:h-80 lg:w-2/4 w-full mb-24"  />
    </div>
  </div>
  )
}

export default PortalsPage