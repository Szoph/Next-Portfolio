import React from 'react'
import SideBar from "../../../components/SideBar"

const WeatherAppPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] p-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up">Weather App</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">OpenAPI Weather App</h3>


    <p className="pt-24 w-3/4">COMING SOON</p>


    <div className="flex flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
    <p className="pt-4 pb-14 w-2/3">Nextjs / Axios / Tailwind / JavaScript / Sass </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
    <p className="pt-4"><a href="#" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="#" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-row lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 flex flex-col gap-8 pr-4">
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id tempore natus, iusto quibusdam quae libero itaque laboriosam sequi dignissimos ipsum consequuntur quasi, nam possimus consequatur maiores? Dolorum, eos iusto!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit assumenda maxime. Reprehenderit blanditiis quaerat veniam soluta quam dignissimos amet facere molestiae, doloribus impedit possimus, iusto dolore totam nihil magni!</p>
      </div>

      <img src="#" className=" md:w-96 md:h-80 lg:w-2/4 w-full mb-24"  />
    </div>
  </div>
  )
}

export default WeatherAppPage