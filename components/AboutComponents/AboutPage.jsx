import React from 'react'
import SideBar from "../SideBar"

const About = () => {
  return (
   <div className="about-page relative md:p-24 lg:p-24 md:pl-44 lg:pl-44 pb-48 bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] w-full h-full">
    <SideBar />
    <h2 className="md:text-9xl lg:text-9xl text-4xl font-semibold bring-up overflow-hidden">About</h2>
    <p className="md:text-4xl lg:text-4xl text-lg md:w-3/4 lg:w-3/5 w-full font-semibold">Hi there! I'm Sophie, a passionate tech enthusiast</p>
    
    <div className='flex lg:flex-row-reverse justify-between md:flex-col flex-col'>
       <div className="bring-up">
            <img src="/Me2.JPG" className="rounded-sm max-h-96  p-4" />
            </div>

      <div className="md:w-3/4 lg:w-2/4 w-full pt-24 p-4">

        <p className="pb-10">My journey began with self-taught HTML, CSS and JavaScript, which sparked a deep interest in how things work behind the scenes.  This led me to complete an intensive software development bootcamp at The Developer Academy, where I built responsive web applications, collaborated on team projects, and explored a wide range of tools and technologies.</p>

        {/* <p className="pb-10">In the realm of frontend development is where my heart truly lies. Crafting seamless user experiences, the thrill of bringing designs to life with code, and the endless possibilities for creativity captivate me endlessly. I thrive on the challenge of translating ideas into intuitive interfaces, constantly pushing myself to learn and grow in this dynamic field.</p> */}

        <p className='pb-10'>As I progressed, I discovered a genuine interest in improving software functionality and user experience, particularly identifying issues, improving user experiences, and ensuring software works as intended. I now apply the same curiosity and problem-solving mindset to ensure that software meets high standards and delivers seamless experience for users.</p>

        <p className="pb-10">Whether I'm developing frontend interfaces or running manual tests to validate functionality, I'm driven by a passion for creating thoughtful digital experiences. I enjoy the process of improving software from both a creative and analytical perspective.</p>

        <p className="pb-10">Before my transition into tech, I spent five years as a care assistant. That role grounded me in empathy, patience, and the importance of clear communication - all of which continue to shape how I work today in all environments. </p>
        
      </div>
        </div>
      <div className="md:w-2/4 lg:2/4 w-full pt-24">
        <h3 className="font-bold text-3xl mb-10 border-b-2 pb-2 border-[#B08C70] dark:border-[#96A9C7]">Languages & Frameworks</h3>

        <p className="pb-10 font-semibold">HTML / CSS / JavaScript / TypeScript / React / Nextjs / Node / Express / Sass / Tailwind / </p>

        {/* <button className="rounded-sm px-4 py-2 bg-[#B08C70] text-[#f5ebe0] dark:bg-[#96A9C7] dark:text-medium text-xl flex" href="/SophieResume.pdf" download="Sophie Woodcock">My CV  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"> */}
{/* 
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"></path>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14.25L12 4.75"></path>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.75 10.75L12 14.25L15.25 10.75"></path>
</svg> */}
{/* </button> */}
      </div>
    
    
    
    </div>
  )
}

export default About