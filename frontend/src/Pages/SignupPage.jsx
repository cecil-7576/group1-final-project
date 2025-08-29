import React, {useState} from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SignupPage() {

  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you’d send it to your backend
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[#fff5e9] px-4">
        <div className="w-full max-w-lg bg-[#fff5e9] p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-1 text-lg text-gray-700">
          Or{" "}
          <Link to="/login" className="text-orange-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>

        {/* Name Fields */}
        <form onSubmit={handleSubmit}>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name='surname'
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name='firstName'
            placeholder="FirstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <input
            type="text"
            name='email'
            placeholder="Email or Phone number"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <input
            type="password"
            name='password'
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <input
            type="password"
            name='confirmPassword'
            placeholder="ConfirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Sign Up Button */}
        <button 
        type='submit'
        className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 hover:bg-orange-600 transition">
          Sign Up
        </button>
        </form>

        {/* Social Login */}
        <div className="flex justify-center gap-6 mt-6">
          <FcGoogle size={28} className="cursor-pointer" />
          <FaApple size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default SignupPage