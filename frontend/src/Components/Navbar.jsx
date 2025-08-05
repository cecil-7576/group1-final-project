import React from 'react'
import logo from '../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';



function Navbar() {

  const linkClass = ({ isActive }) =>
  isActive
    ? 'text-[#fb6605] underline font-bold px-3 py-2 transition'
    : 'text-gray-500 hover:text-[#fb6605] px-3 py-2 transition';


  return (
    <nav className='fixed w-full bg-white border-b border-white z-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>

                  {/* LEFT SIDE: Logo and Menu */}
              <div className='flex items-center space-x-4 md:space-x-10'>
                    <a href="/" className='flex items-center space-x-2'>
                      <img src={logo} alt="Me logo" className='h-12 w-auto mt-1' />
                      <span className='hidden md:block text-[#fb6605] italic text-2xl font-bold mr-1 md:text-3xl mt-5'>Skin Care</span>
                    </a>

                    {/* Menu Links */}
                <div className='hidden lg:flex space-x-6 text-base px-30 md:text-xl'>
                      <a href="/" className={linkClass}>Home</a>
                      <a href="/shop" className={linkClass}>Shop</a>
                      <a href="/about" className={linkClass}>About</a>
                      <a href="/contact" className={linkClass}>Contact</a>
                </div>
                </div>

                  {/* RIGHT SIDE: Icons */}
                <div className='flex items-center space-x-4 text-[#fb6605] '>
                      <a href="">
                          <AiOutlineSearch size={25} className="cursor-pointer" />
                      </a>
                      <a href="">
                          <FiShoppingCart size={25} className="cursor-pointer" />
                      </a>
              </div>
          </div>
        </div>
    </nav>

  )
}

export default Navbar