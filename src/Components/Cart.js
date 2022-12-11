import React, { useState } from 'react'
import data from '../data'

function Cart(props) {

  const [cart, setCart] = useState([]);
  
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  console.log(props.price);
  // let price=props.price

  console.log("hel");
  return (
    <>
    <div className='bg-blue-500'>Cart</div>
    {/* <p className='bg-red-400'>price is :{props.price}</p> */}


    {/* {cart.map((product, idx) => {
        return (
          <>
            <div className="" key={idx}>
              <div className="">
                <img src={product.image} className="w-48" alt="..." />

                <h5 className="">{product.title}</h5>
                <p>Price: {product.price}</p>

                <button
                  className="border-2"
                  onClick={() => removeFromCart(product)}
                >
                  Remove cart
                </button>
              </div>
            </div>
          </>
        );
      })} */}

      
     {/* {data.map((product, idx) => {
       return (
         <>
           <div className="" key={idx}>
             <div className="">
               <img src={product.image} className="w-48" alt="..." />

               <h5 className="">{product.title}</h5>
               <p>Price: {product.price}</p>

               <button
                 className="border-2"
                 onClick={() => removeFromCart(product)}
               >
                 Remove cart
               </button>
             </div>
           </div>
         </>
       );
     })} */}

    </>
  )
}

export default Cart