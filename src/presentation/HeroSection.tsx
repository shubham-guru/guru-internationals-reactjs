import React from 'react'
import heroImg from "../assets/images/heroImg.jpg"

const HeroSection = () => {
  return (
    <>
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#101528] h-[90vh] lg:h-[86vh] flex">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className='flex flex-col justify-center md:justify-start text-center md:text-left'>
          <h1 className="block text-5xl font-bold text-gray-800 md:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            You name it, <span className="text-blue-600">We have it</span>
          </h1>
          <p className="mt-3 px-4 md:px-0 text-lg text-gray-800 dark:text-gray-400">
           We don't sell products and servives we sell better lifestyle,
            and kindness. Wanna buy some ?
          </p>
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <p
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              className="inline-flex cursor-pointer justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 hover:border-gray-600 shadow-slate-700/[.7] text-white"
            >
              Contact us
            </p>
          </div>

        </div>
        <div className="relative">
          <img
            className="w-full rounded-md"
            src={heroImg}
            alt="hero_image"
          />
        </div>
      </div>
    </div>
  </>
  
  )
}

export default HeroSection