import React from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList({addToCart}) {
  return (
    <section>
      <Navbar isHome={false}/>
      <br />
      <br />
      <section className='bg-[#fff5e9] min-h-screen pt-8 pb-16 px-4 md:px-12 lg:px-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product)=>(
            <ProductCard 
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          onAddToCart={addToCart}
          />
          ))}
        </div>
      </section>

    </section>
  )
}

export default ProductList