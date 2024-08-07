import React from 'react'
import SideBar from "../../../components/SideBar"

const WeatherAppPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] px-14 py-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up pb-4">Weather App</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">OpenWeatherMapAPI</h3>


    <p className="pt-24 w-3/4 text-md md:text-lg lg:text-lg">This was a solo project built using Next.js, Tailwind CSS, JavaScript and Axios. It uses the OpenWeatherMap API to fetch weather based on the user input and displays the information.</p>


    <div className="flex flex-col md:flex-row lg:flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
    <p className="pt-4 md:pb-14 lg:pb-14 pb-0 md:w-2/3 lg:w-2/3 w-full">Nextjs / Axios / Tailwind / JavaScript / OpenWeatherMap / React Toastify </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
    <p className="pt-4"><a href="https://weather-app-chi-ebon-20.vercel.app/" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="https://github.com/Szoph/WeatherApp" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-col-reverse lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-8 pr-4">
      <p className="text-md md:text-lg lg:text-lg">Users can search for a city to get the weather information for that city. The app then displays information about today's weather, hourly weather, and the forecast for the next 6 days.</p>

      <p className='text-md md:text-lg lg:text-lg'>I used React Toastify library to display error and warning messages to the user in case the city entered is not found or if there is any other issue with the request. </p>
      </div>

      <img src="/WeatherAppS.png" className="object-cover md:w-96 h-auto lg:w-2/4 w-full mb-24"  />
    </div>
  </div>
  )
}

export default WeatherAppPage