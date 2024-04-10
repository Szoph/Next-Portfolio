"use client"
import {useState } from 'react'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="absolute top-8 left-8">
<div className="md:inline-block lg:inline-block hidden sidebar">
        <a className="opacity-50 hover:opacity-100" href="/"><svg width="36" height="36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
        <p className="text-xs mb-8">Home</p>
</a>

<a className="opacity-50 hover:opacity-100" href="/projects"><svg width="36" height="36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path stroke="currentColor" d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
    <p className="text-xs mb-8">Projects</p></a>

    <a className="opacity-50 hover:opacity-100" href="/about"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512"><path fill="currentColor" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
    <p className="text-xs mb-8">About</p></a>

    <a  href="/contact" className="opacity-50 hover:opacity-100 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 12 12"><path fill="currentColor" d="M1 6a5 5 0 1 1 2.59 4.382l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A4.98 4.98 0 0 1 1 6m3-.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M4.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/></svg>
    <p className="text-xs mb-8">Contact</p></a>
</div>

{/* Mobile Menu */}
<div className="md:hidden lg:hidden block">
<a className="hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}><svg width="36" height="36" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 5.75H19.25"></path>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 18.25H19.25"></path>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 12H19.25"></path>
</svg>
</a>



{isOpen ? 
<div className="bring-dwn">
<a className="" href="/"><svg className="mt-8" width="36" height="36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
        <p className="text-xs mb-8 mt-2">Home</p>
</a>

<a className="" href="/projects">
    <svg width="36" height="36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path stroke="currentColor" d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/>
        </svg>
    <p className="text-xs mb-8 mt-2">Projects</p></a>

    <a className="" href="/about">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512">
            <path fill="currentColor" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
            </svg>
    <p className="text-xs mb-8 mt-2">About</p></a>

    <a className="hover:cursor-pointer" href="/contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 12 12">
            <path fill="currentColor" d="M1 6a5 5 0 1 1 2.59 4.382l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A4.98 4.98 0 0 1 1 6m3-.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M4.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>
    <p className="text-xs mb-8 mt-2">Contact</p></a>
</div>
: null
}


</div>
    </div>
  )
}

export default SideBar