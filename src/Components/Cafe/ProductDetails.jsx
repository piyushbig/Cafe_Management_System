import React, { useState } from 'react';

import productImg from "../../media/cafe.png";
import AddToCart from "../customer/AddToCart";
import CustomerNavbar from '../customer/CustomerNavbar';


const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }
  const decrementQuantity = () => { 
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  const price = 234 * quantity;

  return (
    <>
      <CustomerNavbar />
    <div className='flex items-center justify-center h-full p-20 w-full bg-slate-100'>
      <div className='flex items-start mt-6 border-2 pr-6'>
        <div className='mx-6'>
          <img src={productImg} className='block w-[320px] h-[300px] p-3 object-cover ' alt="product Img" />
        </div>
        
        <div className='flex flex-col pt-2'>

          <div className=''>
            <h1 className='font-semibold text-2xl text-gray-700 tracking-wider'>Product Name</h1>
            <p className='font-medium text-base text-gray-500'>Description of product details.</p>
          </div>

          <div className='flex flex-wrap justify-between font-normal text-base text-gray-600 mt-2'>
            <h2>Cafe Name</h2>
            <p>Cafe@contact.com</p>
          </div>

        <div className='flex justify-between my-6'>
          <div className='flex justify-between gap-3 px-3  border-2 '>
            <button onClick={decrementQuantity} className='text-xl border-r-2 pr-3'>-</button>
            <span className='text-lg border-r-2 pr-3'>{quantity}</span>
            <button onClick={incrementQuantity} className='text-xl'>+</button>
          </div>
          <h2 className='text-lg font-normal'>Price:  ₹ {" "}{price}</h2>
        </div>

          <div className='mt-16'>
            <AddToCart />
          </div>
        </div>

      </div>

    </div>
</>
  )
}

export default ProductDetails