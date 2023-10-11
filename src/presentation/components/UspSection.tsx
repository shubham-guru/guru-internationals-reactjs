import React from 'react'
import heroImg from "../../assets/images/heroImg.jpg"
import Usp from '../Content/usp'


const UspSection = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#101528] h-[90vh] lg:h-[86vh] flex">
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    
      <div className='flex flex-col justify-center md:justify-start text-center md:text-left'>
        <h1 className="block text-5xl font-bold text-gray-800 md:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
          Our USP
        </h1>
        <p className="mt-3 px-4 md:px-0 text-lg text-gray-800 dark:text-gray-400">
            {Usp}
        </p>

      </div>
      <div className="relative">
        <img
          className="w-full rounded-md"
          src={heroImg}
          alt="hero_image"
        />
        <div className="absolute bottom-0 left-0">
         
        </div>
      </div>
     
    </div>
  </div>
  )
}

export default UspSection