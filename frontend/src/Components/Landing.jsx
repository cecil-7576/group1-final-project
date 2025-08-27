import React from 'react'
import Navbar from './Navbar';
import Toning from '../assets/images/toningface.png';
import Fontview from '../assets/images/fontview.png';
import { Link } from 'react-router-dom';
import img8 from '../assets/images/img8.png';
import img13 from '../assets/images/img13.png';
import img4 from '../assets/images/img4.png';
import { FiArrowRight, FiArrowLeft, FiShoppingCart} from 'react-icons/fi';
import products from '../data/products';
import { useState } from 'react';
import landpagepix from '../assets/images/landingpix.png';
import { FaQuoteRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Landing({title = 'Skin like milk', semiTitle= 'OUR PRODUCT RANGE'}) {

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

    const testimonials = [
    {
      name: "Jordan k.",
      text: "I've been using your skincare products for just a few weeks and I’m already seeing incredible results. My skin feels hydrated, plump and youthful.",
    },
    {
      name: "Jordan k.",
      text: "I've been using your skincare products for just a few weeks and I’m already seeing incredible results. My skin feels hydrated, plump and youthful.",
    },
    {
      name: "Jordan k.",
      text: "I've been using your skincare products for just a few weeks and I’m already seeing incredible results. My skin feels hydrated, plump and youthful.",
    },
  ];

  const handleNext = () => {
    if (startIndex + visibleCount < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
  <div className='bg-[#fff5e9]  min-h-screen'>
      <Navbar isHome={false}/>
      
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16">
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#fb6605]">{title}</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            ME skin care offers you products made from natural
            <br className="hidden md:block" />ingredients and paraben free
          </p>
          <Link to="/products" className="bg-[#fb6605] text-white px-4 sm:px-6 py-2 rounded-xl hover:bg-orange-600 transition">Shop Now</Link>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0 relative">
          <div className="flex items-end gap-2 w-full max-w-xs sm:max-w-sm">
            <img src={Toning} alt="Product Bottle" className="w-32 sm:w-40 md:w-56 transform rotate-[5deg] drop-shadow-lg lg:-mr-36 z-10 px-3 lg:ml-20 mt-3" />
            <img src={Fontview} alt="Product Group" className="w-28 sm:w-36 md:w-56 h-40 object-cover drop-shadow-lg z-10 mb-2" />
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
        <h2 className="flex flex-col md:flex-row md:justify-between text-2xl sm:text-4xl md:text-5xl font-extrabold border border-[#fb6605] mb-6 p-4 gap-4">
          {semiTitle}
          <span className="text-xs sm:text-sm md:text-base font-bold text-gray-500">
            Unlock the secret to healthy and glowing <br />skin with our varieties of premium <br />skincare products
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
            <span className="absolute top-2 left-[-20px] bg-white/80 text-gray-700 text-lg sm:text-2xl px-6 sm:px-9 py-1 rounded-full shadow mt-5">Pigmentation oil</span>
            <img src={img8} alt="product" className="w-full h-full object-cover rounded" />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
            <span className="absolute top-2 left-[-20px] bg-white/80 text-gray-700 text-lg sm:text-2xl px-12 py-1 rounded-full shadow mt-5">Ageless water</span>
            <img src={img13} alt="product" className="w-full h-full object-cover rounded" />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
            <span className="absolute top-2 left-[-20px] bg-white/80 text-gray-700 text-lg sm:text-2xl px-12 py-1 rounded-full shadow mt-5">Moisturizing Lotion</span>
            <img src={img4} alt="product" className="w-full h-full object-cover rounded" />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px- sm:px-8 md:px-12 lg:px-20 py-12 md:flex justify-between gap-10">
        <div className="md:w-2/3">
          <p className="text-gray-600 mb-3 px-2 md:px-3 py-1 md:py-2 text-xl sm:text-3xl md:text-2.5xl leading-snug">
            Ready to achieve your <br /> skincare goals? Dive into <br />our selections of premium <br /> skincare products and <br /> discover the perfect <br /> solutions for your needs. <br /> Also enjoy fast and hassle- <br />free returns for a dynamic <br /> shopping experience.
          </p>
          <Link to="/products" className="flex items-center gap-2 bg-orange-500 w-auto max-w-90 text-white text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-full justify-between">
            <span>Explore More</span>
            <span className="w-5 h-5 flex items-center rounded-full border font-extrabold border-white justify-center"><FiArrowRight /></span>
          </Link>
        </div>

        <div className="relative mt-5 md:mt-0 p-4 md:p-6 rounded-lg max-w-xs sm:max-w-fit mx-auto md:mx-0 lg:max-w-fit">
          <div className="relative flex items-start justify-between p-6 md:p-8 bg-[#d0cdcd]/33 rounded-md h-64 md:h-80">
            <span className="text-4xl mr-10 md:text-9xl w-fit text-gray-500 font-bold">+35</span>
            <span className="text-black mr-2 text-xl sm:text-left leading-snug ">types of <br /> products for the care of <br />your skin</span>
            <span className="absolute bottom-4 right-4 w-5 h-5 flex items-center rounded-full border font-extrabold border-black justify-center"><FiArrowRight /></span>
          </div>
          <div className="absolute top-30 -left-10 sm:-left-20 bg-[#fb6605]/71 mt-10 p-10 sm:p-20 rounded-md lg:top-40 h-48 sm:h-53 shadow-md sm:overflow-hidden">
            <p className="font-bold text-base w-fit sm:text-xl text-black leading-snug">20% off for <br /> new <br />customers</p>
          </div>
        </div>
      </section>

      {/* LATEST PRODUCTS */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
        <h2 className="flex flex-col md:flex-row md:justify-between text-2xl sm:text-4xl md:text-5xl font-extrabold border border-[#fb6605] mb-6 p-4 gap-4">
          OUR LATEST PRODUCTS
          <span className="text-xs sm:text-sm md:text-base font-bold text-gray-500">We have solutions to help you achieve <br /> smoother, clearer and more milk-</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id} className="relative bg-white rounded-lg shadow-md flex-shrink-0 w-full">
              <img src={product.image} alt={product.name} className="w-full object-cover rounded-t-lg" />
              <div className="absolute top-2 left-2"><FiShoppingCart className="text-[#ff6500] text-xl" /></div>
              <div className="absolute top-2 right-2 bg-[#ffb07c] px-2 py-0.5 rounded-full text-xs font-bold">₦{product.price.toLocaleString()}</div>
              <p className="absolute bottom-2 left-2 text-gray-900 font-semibold px-3 py-1 text-lg sm:text-xl">{product.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#fff9ec] p-4 mt-6 gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100" onClick={handlePrev}><FiArrowLeft /></button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100" onClick={handleNext}><FiArrowRight /></button>
            <span className="text-gray-700 ml-2">Products (+15)</span>
          </div>
          <Link to="/products" className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-600 w-full sm:w-auto justify-center">
            Open Store
            <span className="h-5 w-5 text-center rounded-full border flex justify-around"><FiArrowRight /></span>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-orange-500 py-10 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">WHY CHOOSE US?</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="bg-orange-400 text-white p-4 sm:p-8 rounded-lg shadow-md w-full sm:w-auto whitespace-nowrap">Personalized solutions <br />with effective results</div>
              <div className="bg-orange-400 text-white p-4 sm:p-8 rounded-lg shadow-md w-full sm:w-auto whitespace-nowrap">Natural ingredients and <br />paraben free</div>
              <div className="bg-orange-400 text-white p-4 sm:p-6 h-auto sm:h-28 rounded-lg shadow-md w-full sm:w-auto whitespace-nowrap">Customer-friendly services,<br /> Fast delivery and hassle-free <br /> returns</div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={landpagepix} alt="Products" className="w-40 sm:w-56 md:w-72 lg:w-80 object-contain" />
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
        <h2 className="flex flex-col md:flex-row md:justify-between text-2xl sm:text-4xl md:text-5xl font-extrabold border border-[#fb6605] mb-6 p-4 gap-4">
          CUSTOMERS REVIEWS
          <span className="text-xs sm:text-sm md:text-base font-bold text-gray-500">We have solutions to help you achieve <br /> smoother, clearer and more milk-</span>
        </h2>
      </section>

      <div className="bg-[#fff5e9] py-10 px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f2ebdf] rounded-xl shadow-sm p-5 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="bg-[#e7e1d7] px-3 py-1 rounded-full text-sm font-semibold">{item.name}</span>
                  <FaQuoteRight className="text-[#a7a7a7]" />
                </div>
                <p className="mt-4 text-gray-800 text-sm leading-relaxed flex-grow">{item.text}</p>
                <div className="flex items-center justify-end mt-4 text-sm text-gray-600">
                  <span>Reviewed on</span>
                  <FaInstagram className="ml-1 text-black" size={16} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </div>
    
  )
}

export default Landing