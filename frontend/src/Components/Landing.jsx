import React from 'react'
import Navbar from './Navbar';
import Toning from '../assets/images/toningface.png';
import Fontview from '../assets/images/fontview.png'

function Landing() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center justify-between px-4 py-20 w-full max-w-7xl mx-auto">
      
      {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:0 text-center md:text-left px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#fb6605] leading-tight">Skin like milk</h2>
          <p className="text-base text-gray-600 py-4 md:text-lg">
            ME skin care offers you products made from natural<br className="hidden md:block"/>ingredients and paraben free
          </p>
          <button className="bg-[#fb6605] hover:bg-orange-600 text-white px-6 py-2 rounded shadow transition">Shop Now</button>
        </div>

        {/* Right Side: Image */}

        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 relative">
        <div className="flex items-end gap-0.9 w-70">
            <img
          src={Toning}
          alt="Product Bottle"
          className="w-40 md:w-56 transform rotate-[5deg] drop-shadow-lg -mr-30 z-10 px-3 lg:ml-20"
        />
        <img
          src={Fontview}
          alt="Product Group"
          className="w-40 h-40 md:w-56 transform rotate-[-5deg] drop-shadow-lg -mr-6 z-10"
        />
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Landing