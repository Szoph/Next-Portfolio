import React from 'react'
import SideBar from "../../../components/SideBar"

const HangmanPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] p-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up pb-4">Hangman Game</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">Interactive Hangman Game</h3>


    <p className="pt-24 w-3/4">This interactive Hangman game allows users to test their knowledge and guess movie titles across different genres. Made with Nextjs, Typescript, Sass, Redux and Python, this interactive game brings the excitement of Hangman to life with a little twist.</p>


    <div className="flex flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
    <p className="pt-4 pb-14 w-2/3">Nextjs / TypeScript / Sass / Redux / Python </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
    <p className="pt-4"><a href="https://hangman-lilac.vercel.app/signin" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="https://github.com/Szoph/Hangman" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-row lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 flex flex-col gap-8 pr-4">
      <p className="">Developed during my software development bootcamp, the Hangman game represents a collaborative effort, with each member bringing unique skills to the table. While I primarily focused on frontend development, I had the opportunity to delve deep into Redux, leveraging it's powerful state management capabilities to enhance user experience and ensure seamless gameplay. </p>

      <p>One of the highlights of my contribution was designing the visuals for the game interface. From menacing monster to the helpless man, I poured my creativity into bringing these elements to life, adding an extra layer of depth to the game.</p>
      </div>

      <img src="/HangmanGame.png" className=" md:w-96 md:h-80 lg:w-2/4 w-full mb-24"  />
    </div>
  </div>
  )
}

export default HangmanPage