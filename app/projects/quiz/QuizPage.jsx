import React from 'react'
import SideBar from "../../../components/SideBar"

const QuizPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] p-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up">Pokémon Type Quiz</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">Personality Quiz</h3>


    <p className="pt-24 w-3/4">Designed as a single-page HTML document, this Pokémon type quiz presents users with a series of personality questions to determine their Pokémon type. With each response, the quiz calculates the score based on their answers, leading to a personalized result that reveals their Pokémon type.</p>


    <div className="flex flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 w-2/3">Tech Stack</h3>
    <p className="pt-4 pb-14 w-2/3">HTML / JavaScript / TailwindCSS </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2">Links</h3>
    <p className="pt-4"><a href="https://szoph.github.io/my-quiz-site/" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="https://github.com/Szoph/my-quiz-site" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-row lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 flex flex-col gap-8 pr-4">
      <p className="">This was a solo project built during my software development bootcamp. The quiz was developed using HTML, JavaScript and Tailwind CSS.</p>

      <p>With it's minimalist design and responsive layout, the Pokémon Type Quiz offers a fun and interactive way to uncover your Pokémon type based on your personality traits. </p>
      </div>

      <img src="/JSQuizSite.png" className=" md:w-96 md:h-80 lg:w-2/4 w-full mb-24"  />
    </div>
  </div>
  )
}

export default QuizPage