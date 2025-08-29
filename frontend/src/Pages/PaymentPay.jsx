import React from 'react';
import { useLocation } from "react-router-dom";
import logo2 from '../assets/images/logo2.png';

function PaymentPay() {

  const location = useLocation();
const { 
  total = 0, 
  cart = [], 
  payment = "", 
  delivery = "",
  fullName = "",
  email = "",
  address = "",
  city = "",
  stateName = "",
  phone = "",
} = location.state || {};
  return (
    <div className="max-h-screen bg-[#fff5e9] flex flex-col items-center px-4 py-30 ">
      {/* Header */}
      <div className="w-full max-w-7xl flex justify-between items-center border-b pb-2 mb-8">
        <img
          src={logo2}
          alt="Logo"
          className="h-10"
        />
        <div className="text-right">
          <p className="text-gray-700 text-sm">NGN</p>
          <p className="text-xl font-bold">₦{total?.toLocaleString()}</p>
          <p className="text-gray-700">{fullName}</p>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-center text-sm text-gray-700 mb-6">
        Proceed to your bank app to complete payment
      </p>

      {/* Payment Details Card */}
      <div className="bg-[#ffe0d2] w-full max-w-md p-6 rounded-md shadow-sm">
        <div className="mb-4">
          <p className="text-xs text-gray-600">Amount</p>
          <p className="font-bold text-lg text-gray-800">
            NGN ₦{total?.toLocaleString()}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-600">Account Number</p>
          <p className="font-semibold text-gray-900 text-lg">
            2086121202
          </p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-600">Bank Name</p>
          <p className="font-semibold text-gray-900">
            United Bank of Africa (UBA)
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-600">Beneficiary</p>
          <p className="font-semibold text-gray-900">ME skin care</p>
        </div>
      </div>

      {/* Expiry Notice */}
      <p className="text-xs text-gray-500 mt-4 text-center max-w-md">
        This account details is only valid for this transaction and will expire
        in <span className="font-semibold">1 hour</span>
      </p>

      {/* Confirmation Button */}
      <button
        className="mt-6 bg-[#fb6605] text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition w-full max-w-md"
      >
        I have made payment
      </button>
    </div>
  )
}

export default PaymentPay