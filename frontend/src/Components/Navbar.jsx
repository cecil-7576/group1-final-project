import React from 'react'
import logo from '../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';



function Navbar({isHome, cart = []}) {

  const location= useLocation();

  const navigate = useNavigate();

  const handleHomeClick = (e) => {
  e.preventDefault();
  if (location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigate("/"); 
  }
};

  // const hideAuthLinks = ["/login", "/signup"];

  const linkClass = ({ isActive }) =>
  isActive
    ? 'text-[#fb6605] underline font-bold px-3 py-2 transition'
    : 'text-gray-500 hover:text-[#fb6605] px-3 py-2 transition';
  const linkClass2 = ({isActive}) => isActive ? '  text-black hover:bg-[#fb6605] hover:text-black rounded-md px-3 py-2 transition' : 'hover:bg-[#fb6605] hover:text-black rounded-md px-3 py-2 transition';


  return (
    <nav className={`fixed w-full border-b border-white z-50 ${isHome ? 'bg-white' : 'bg-[#fff5e9]'}`}>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>

                  {/* LEFT SIDE: Logo and Menu */}
              <div className='flex items-center space-x-4 md:space-x-10'>
                    <NavLink to="/" className='flex items-center space-x-2'>
                      <img src={logo} alt="Me logo" className='h-12 w-auto mt-1' />
                      <span className='hidden md:block text-[#fb6605] italic text-2xl font-bold mr-1 md:text-3xl mt-5'>SkinCare</span>
                    </NavLink>

                    {/* Menu Links */}
                <div className='hidden lg:flex space-x-6 text-base px-30 md:text-xl'>
                      <NavLink to="/" 
                      onClick={handleHomeClick}
                      className={linkClass}>Home</NavLink>
                     {location.pathname !== "/" && location.pathname !== "/about" && location.pathname !== "/contact" &&(
                      <NavLink to="/products" className={linkClass}>Shop</NavLink>
                      )}
                      <NavLink to="/about" className={linkClass}>About</NavLink>
                      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                </div>
                </div>
                  
                {location.pathname === "/" && (
                  <div className='flex space-x-3'>
                  <NavLink to="/login" className={linkClass2}>Login</NavLink>
                  <NavLink to="/signup" className={linkClass2}>Sign Up</NavLink>
                </div>
                )}
                  {/* RIGHT SIDE: Icons */}
                <div className='flex items-center space-x-4 text-[#fb6605] '>
                      <NavLink to="/carts">
                          <AiOutlineSearch size={25} className="cursor-pointer" />
                      </NavLink>
                      <NavLink to="/carts" className="relative">
                          <FiShoppingCart size={25} className="cursor-pointer" />
                          {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                              {cart.reduce((total, item) => total + item.qty, 0)}
                            </span>
                          ) }
                      </NavLink>
              </div>
          </div>
        </div>
    </nav>

  )
}

export default Navbar