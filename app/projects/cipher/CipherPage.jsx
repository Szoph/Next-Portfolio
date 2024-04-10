import React from 'react'
import SideBar from "../../../components/SideBar"

const CipherPage = () => {
  return (
    <div className="w-full h-full bg-[#f5ebe0] dark:bg-medium dark:text-[#96A9C7] text-[#B08C70] p-24 md:pl-44 lg:pl-44">
    <SideBar />
    <h2 className="md:text-8xl lg:text-8xl text-4xl bring-up">Caeser Cipher</h2>
    
    <h3 className="md:text-2xl lg:text-2xl text-xl">Text Encryptor and Decryptor</h3>


    <p className="pt-24 w-3/4">With our Caesar Cipher, users can encode their messages with a simple shift of the alphabet, for example, "hello" becomes "ifmmp". Whether you're a cryptography enthusiast or simply looking to add an extra layer of privacy to your communications, encryptors and decryptors are a useful tool.</p>


    <div className="flex flex-row gap-24 mt-24">
      <div className="flex flex-col">
        <h3 className="pt-8 text-xl font-bold border-b-2 border-[#B08C70] dark:border-[#96A9C7] w-2/3">Tech Stack</h3>
    <p className="pt-4 pb-14 w-2/3">JavaScript / HTML / CSS / Tailwind </p>
    </div>

    <div className="flex flex-col w-1/5">
        <h3 className="pt-8 text-xl font-bold border-b-2 border-[#B08C70] dark:border-[#96A9C7]">Links</h3>
    <p className="pt-4"><a href="https://ceaser-cipher.github.io/ceaser-cipher/" target="_blank">Live</a></p>
    <p className="pt-4 pb-14"><a href="https://github.com/Ceaser-cipher/ceaser-cipher" target="_blank">Github</a></p>
    </div>

    </div>
    <div className="flex md:flex-row lg:flex-row flex-col-reverse " >
      <div className="md:w-2/3 lg:w-2/3 flex flex-col gap-8 pr-4">
      <p className="">This Caeser Cipher encryptor and decryptor was a collaborative project developed during my software development bootcamp. It is crafted with JavaScript, HTML, CSS and Tailwind for styling.</p>

      <p>Utilising Test-Driven Development (TDD) principles with Jest, we meticulously tested every part of the functionality to ensure it's accuracy and reliability. This approach not only strengthened our codebase but also instilled confidence in our site.</p>
      </div>

      <img src="/CeaserCipherGroupSite.png" className=" md:w-96 md:h-80 lg:w-2/4 w-full mb-24"  />
    </div>
  </div>
  )
}

export default CipherPage