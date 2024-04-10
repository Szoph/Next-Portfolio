import React from 'react'
import SideBar from "../SideBar"

const About = () => {
  return (
   <div className="relative p-24 md:pl-44 lg:pl-44 pb-48  bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] w-full h-full">
    <SideBar />
    <h2 className="md:text-9xl lg:text-9xl text-4xl font-semibold bring-up overflow-hidden">About</h2>
    <p className="md:text-4xl lg:text-4xl text-2xl w-3/4 font-semibold">Hi there! I'm Sophie, a passionate software developer</p>
    
       <div className="absolute md:right-24 md:top-40 lg:right-24 lg:top-40 top-36 right-8 bring-up">
            <img src="/Me2.JPG" className="md:w-80 md:h-80 w-40 h-40 rounded-sm" />
            </div>

      <div className="md:w-2/4 lg:w-2/4 w-full pt-24">
        <p className="pb-10">My journey began with self-taught learning of HTML, CSS and JavaScript, which ignited a passion for software development that continues to thrive. Recently, I have completed an intensive software development bootcamp at The Developer Academy, where I delved into a variety of programming languages and frameworks, solidifying my skills and expanding my horizons.</p>
        <p className="pb-10">In the realm of frontend development is where my heart truly lies. Crafting seamless user experiences, the thrill of bringing designs to life with code, and the endless possibilities for creativity captivate me endlessly. I thrive on the challenge of translating ideas into intuitive interfaces, constantly pushing myself to learn and grow in this dynamic field.</p>
        <p className="pb-10">What truly excites me about being a software developer is the opportunity to craft digital experiences that serve a purpose and tackle real-world challenges. It goes beyond merely styling buttons and designing a website; it's about channeling a deep passion for creating solutions that enhance people's lives.</p>
        <p className="pb-10">Whether it's optimizing user interfaces for seamless navigation, implementing intuitive features, or using innovative technologies to enhance accessibility and inclusivity, I am driven by the relentless pursuit of maximising the impact of every digital interaction. </p>
        <p className="pb-10">Prior to my dive into the tech world, I spent five years as a care assistant for the elderly. This experience not only grounded me in empathy and understanding but also honed my ability to work closely with individuals and address their unique needs.</p>
      </div>

      <div className="md:w-2/4 lg:2/4 w-full pt-24">
        <h3 className="font-bold text-3xl mb-10 border-b-2 pb-2 border-[#B08C70] dark:border-[#96A9C7]">Languages & Frameworks</h3>
        <p className="pb-10 font-semibold">HTML / CSS / JavaScript / TypeScript / React / Nextjs / Node / Express / Sass / Tailwind / </p>
        <button className="rounded-sm px-4 py-2 bg-[#B08C70] text-[#f5ebe0] dark:bg-[#96A9C7] dark:text-medium text-xl flex" href="/ResumeSophie.pdf" download="Sophie Woodcock">My CV  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"></path>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14.25L12 4.75"></path>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.75 10.75L12 14.25L15.25 10.75"></path>
</svg>
</button>
      </div>
    
    
    
    </div>
  )
}

export default About