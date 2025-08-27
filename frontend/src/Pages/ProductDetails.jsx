import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import products from '../data/products';
import { FiArrowRight,FiShoppingCart } from 'react-icons/fi';
import { FaQuoteRight } from "react-icons/fa";


function ProductDetails({ addToCart }) {


  const {id} = useParams();
  const navigate = useNavigate()
  const product = products.find((p) => p.id === parseInt(id)); // comes from Link state
    const [size, setSize] = useState("20 ml");
    const [qty, setQty] = useState(1);

    console.log(products)
    

    if (!product) {
    return <p className="text-center mt-10">No product details found 4😢4.</p>;
  };

    const sizes = ["15 ml", "20 ml"];

  return (
    <section className='bg-[#fff5e9]'>
        <div className="max-w-6xl mx-auto px-4 py-30 bg-[#fff5e9]">

        {/* Back Arrow */}
        <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-black mb-4">

        <AiOutlineArrowLeft className="mr-2" />
      </button>

      {/* Product Title */}
      <h1 className="text-2xl font-semibold mb-6">
        {product.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
            <img
          src={product.image}
          alt={product.name}
          className="rounded-lg transition-transform duration-500 transform hover:scale-110"
        />
        </div>

        {/* Product Info */}
        <div className='mb-6'>
            <div className='flex w-full justify-between'>
                 <p className="text-3xl font-semibold mb-2">Price</p>
                <p className="text-xl font-bold mb-4">₦ {product.price}</p>
            </div>

          {/* Size Selector */}
          <div className='flex w-full justify-between'>
            <p className="font-semibold text-3xl mb-6">Size</p>
          <div className="flex gap-3 mb-4">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border rounded-lg ${
                  size === s
                    ? "bg-orange-500 text-white"
                    : "bg-white border-gray-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          </div>

          {/* Quantity Selector */}
          <div className='flex w-full justify-between'>
            <p className="font-semibold text-3xl mb-6">Qty</p>
            <div className="flex items-center border border-[#fb6605] w-28 mb-6">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-1"
            >
              -
            </button>
            <span className="flex-1 text-center">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1"
            >
              +
            </button>
          </div>
          </div>

          {/* Buttons */}
          <button 
          onClick={() => addToCart(product, qty, size)}
          className="w-full border border-[#fb6605] py-3 mb-3 hover:bg-orange-500 hover:text-white">
            Add to cart
          </button>
          <button className="w-full border border-[#fb6605] py-3 mb-3 hover:bg-orange-500 hover:text-white">
            Buy now
          </button>
        </div>
      </div>

      {/* Description */}
    
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-2">Description</h2>
        <p className="text-gray-600 mb-6">
          {product.description}
        </p>
         
         {}
        <h2 className="text-lg font-bold mb-2">How To Use</h2>
        <p className="text-gray-600">
          {product.howToUse}
        </p>
      </section>
      <br />
    <div className='border border-[#e7e1d7]'>

    </div>
      {/* Reviews */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4 flex items-center">
          Customer’s reviews <span className="ml-2">🕑</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {product.reviews?.map((review, i) => (
            <div
              key={i}
              className="bg-[#e7e1d7] p-4 rounded-lg flex flex-col justify-between"
            >
              <div className=''>
                <div className='flex justify-between'>
                    <p className="font-semibold mb-2 border border-gray-400 w-20 rounded justify-center align-center text-center">@{review.user}</p><span><FaQuoteRight className="text-[#a7a7a7]"/></span>
                </div>
                <p className="text-gray-600 text-sm">
                  {review.text}
                </p>
              </div>
              <div className="mt-4 text-sm flex items-center justify-end">
                Reviewed on ig<FaInstagram className="ml-2" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end"> 
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg flex justify-between gap-2 hover:bg-orange-600 transition">
          Read more<span className='h-5 w-5 mt-1        text-center rounded-full border align-center flex justify-around py-0.6'>
                      <FiArrowRight className="text-white"/>
                    </span>
        </button>
        </div>
      </section>
      <br />
      <br />
       <div className='border border-[#e7e1d7]'></div> 
        
      {/* Related Products */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">Related products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
         {products
          .filter((p) => p.id !== product.id) // exclude current product
          .slice(0, 4) // show max 4
          .map((related) => (
        <div key={related.id} className="relative flex-shrink-0 w-80 px-5">
          <img
            src={related.image}
            alt={related.name}
            className="mb-2 justify-between"
          />

          <div className="absolute top-2 text-[#ff6500] p-1">
              <FiShoppingCart className="text-[#ff6500] text-xl" />
          </div>
          
            {/* Price Tag */}
          <div className="absolute top-2 left-[230px] bg-[#ffb07c] px-2 py-0.5 rounded-full text-xs font-bold">
             ₦{related.price.toLocaleString()}
          </div>
          <p className="absolute bottom-2 left- text-gray-900 font-extrabold px-3 py-1 text-xl">{related.name}</p>
          {/* <p className="text-sm font-semibold">{related.name}</p>
          <p className="text-orange-500 font-bold">₦ {related.price}</p> */}
        </div>
      ))}
        </div>
      </section>
    </div>
    </section>
  )
}

export default ProductDetails