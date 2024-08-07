import React from 'react'
import SideBar from "../SideBar"

const ProjectPage = () => {
  return (
    <div className="w-full h-full lg:w-screen lg:h-screen bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] p-24 md:pl-44 lg:pl-44 flex md:flex-col lg:flex-row flex-col">
      <SideBar />
  <div className="flex flex-col md:w-2/3 lg:2/3 w-full">
<h2 className="md:text-9xl lg:text-9xl text-4xl pt-24 font-semibold bring-up text-center bring-up">Projects</h2>
<h3 className="md:pt-24 lg:pt-24 py-8 md:w-3/4 lg:w-3/4 w-full">Here you'll find a collection of my work, primarily from challenging briefs encountered during my software development bootcamp journey. Each project represents an opportunity for me to apply my skills, creativity, and problem-solving abilities to real-world scenarios. </h3>
</div>
<div className="w-full flex md:gap-4 lg:gap-5 gap-8 flex-col bring-up md:items-end lg:items-end items-center pb-24">
<a className="hover:cursor-pointer projects" href="/projects/viridiancarpentry">
  <h3 className="text-5xl md:text-right lg:text-right text-center font-semibold">Viridian Carpentry</h3>
<p className="text-center md:text-right lg:text-right py-2">Portfolio Site</p></a>
<a className="hover:cursor-pointer projects" href="/projects/doze">
  <h3 className="text-5xl md:text-right lg:text-right text-center font-semibold">Doze</h3>
<p className="text-center md:text-right lg:text-right py-2">Task Management App</p></a>
<a className="hover:cursor-pointer projects" href="projects/weatherapp">
  <h3 className="text-5xl md:text-right lg:text-right text-center font-semibold">Weather App</h3>
<p className="text-center md:text-right lg:text-right py-2">OpenWeatherMapAPI</p></a>
<a className="hover:cursor-pointer projects" href="projects/portals">
  <h3 className="text-5xl md:text-right lg:text-right text-center font-semibold">House of Portals</h3>
<p className="text-center md:text-right lg:text-right py-2">Text-Adventure Game</p></a>
<a className="hover:cursor-pointer projects" href="/projects/cipher">
  <h3 className="text-5xl md:text-right lg:text-right text-center font-semibold">Ceaser Cipher Encryptor</h3>
<p className="text-center md:text-right lg:text-right py-2">Word Encryptor/Decryptor</p></a>
<a className="hover:cursor-pointer projects" href="/projects/quiz">
  <h3 className="text-5xl md:text-right lg:text-right text-center font-semibold">Pokémon Type Quiz</h3>
<p className="text-center md:text-right lg:text-right py-2">Personality Type Quiz</p></a>
</div>
    </div>
  )
}

export default ProjectPage