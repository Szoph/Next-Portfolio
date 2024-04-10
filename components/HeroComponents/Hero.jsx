import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70]">
        <div className="w-full h-full flex flex-col gap-8 items-center ">
        
            <h1 className="text-7xl font-bold titles typed-out mt-64">Hi, I'm Sophie</h1>
            <h2 className="text-xl font-semibold">Software Developer, Sheffield, UK</h2>
            <a className="flex flex-row gap-2 font-bold hover:cursor-pointer" href="/ResumeSophie.pdf" download="Sophie Woodcock">CV <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg></a>
            <div className="w-3/4 mt-10 flex justify-evenly open-out">
            <a href="/projects" className="hover:cursor-pointer icon-projects"><svg width="36" height="36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path stroke="currentColor" d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg></a>
            <a href="/about" className="hover:cursor-pointer icon-about"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512"><path fill="currentColor" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg></a>
            <a href="/contact" className="hover:cursor-pointer icon-contact"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 12 12"><path fill="currentColor" d="M1 6a5 5 0 1 1 2.59 4.382l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A4.98 4.98 0 0 1 1 6m3-.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M4.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/></svg></a>
            </div>
            </div>
    </div>
  )
}

export default Hero