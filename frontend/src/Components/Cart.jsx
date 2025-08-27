import React from 'react'

function Cart({image, name, price, quantity, onAdd, onSubtract, onRemove}) {

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-6 border-b">
      <div className="col-span-8 flex items-center space-x-4">
        <img src={image} alt={name} className="w-24 object-cover rounded-md"/>
        <div>
          <h3 className='font-semibold text-base'>{name}</h3>
            <p className='text-gray-600'> ₦{price.toLocaleString()}</p>

            <div className='inline-flex items-center border-orange-600 border px-2 py-1 mt-10 overflow-hidden text-sm'>
              <button onClick={onSubtract} className='px-2 rounded'>-</button>
              <span>{quantity}</span>
              <button onClick={onAdd} className='px-2 rounded'>+</button>
            </div>
            <br className='px-2'/>
            <button onClick={onRemove} className='text-xs text-orange-600 mt-2'> 🗑 Remove from cart</button>
        </div>
      </div>

      <div className="col-span-4 text-right text-lg font-semibold">
         ₦{(price*quantity).toLocaleString()}
      </div>
    </div>
  )
}

export default Cart;