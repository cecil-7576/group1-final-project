import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SignupPage() {
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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Surname"
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Email or Phone number"
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Sign Up Button */}
        <button className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 hover:bg-orange-600 transition">
          Sign Up
        </button>

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