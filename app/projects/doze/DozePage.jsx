import React from 'react'
import SideBar from "../../../components/SideBar"

const DozePage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] px-14 py-24 md:pl-44 lg:pl-44">
      <SideBar />
      <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up">Doze</h2>
      
      <h3 className="md:text-2xl lg:text-2xl text-xl">Task Management App</h3>


      <p className="pt-24 w-3/4 text-md md:text-lg lg:text-lg">Doze is a task management app for conquering tasks and achieving your goals. Inspired by the 12-week-goal concept, Doze empowers users to set and track main goals, breaking them down into actionable sub-goals for maximum productivity. </p>


      <div className="flex flex-col md:flex-row lg:flex-row gap-24 mt-24">
        <div className="flex flex-col">
          <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
      <p className="pt-4 md:pb-14 lg:pb-14 pb-0 md:w-2/3 lg:w-2/3 w-full">Nextjs / Node / Express / Axios / Tailwind / DaisyUi </p>
      </div>

      <div className="flex flex-col w-1/5">
          <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
      <p className="pt-4"><a href="https://doze-pink.vercel.app/" target="_blank">Live</a></p>
      <p className="pt-4 pb-14"><a href="https://github.com/TKPending/Doze" target="_blank">Github</a></p>
      </div>

      </div>
      <div className="flex md:flex-col-reverse lg:flex-row flex-col-reverse " >
        <div className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-8 pr-4">
        <p className="text-md md:text-lg lg:text-lg">Developed during my software development bootcamp, Doze represents the result of learning to create full-stack applications while collaborating within a team. Built using Nextjs, Nodejs, Expressjs and Axios, with a sleek and intuitive UI crafted using Tailwind CSS and DaisyUI components, Doze seamlessly blends functionality with aesthetics. </p>

        <p className='text-md md:text-lg lg:text-lg'>As part of the development team, I contributed to many aspects of Doze, from imagining features and designing user interfaces to implementing backend logic and ensuring smooth communication between front and backend systems. This experience not only honed my technical skills but also taught me the power of collaboration and effective teamwork to bring ideas to life.</p>
        </div>

        <img src="/DozeWindowNew.png" className="object-cover md:w-96 h-auto lg:w-2/4  w-full mb-24"  />
      </div>
    </div>
  )
}

export default DozePage