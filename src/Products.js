import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import datas from "./data";
import logo1 from "./images/cartLogo.jpg";
import logo2 from "./images/loginLogo.jpg";

import { AiFillShopping } from "react-icons/ai";
import { useEffect } from "react";
import Product from "./Display/Product";
import {FaShoppingCart} from "react-icons/fa"


const PAGE_PRODUCTS = "datas";
const PAGE_CART = "cart";


function Products() {

  const [cart, setCart] = useState([]);
  const [page,setPage] =useState(PAGE_PRODUCTS)

  // const [data, setData] = useState(Categories);

  // const filterResult = (categItem) => {
  //   const result = Categories.filter((curData) => {
  //     return curData.category === categItem;
  //   });
  //   setData(result);
  // };

  const addToCart = (product) => {
    console.log("cart");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };


  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  // function MouseOver(event) {
  //   event.target.style.color = "grey";
  //   event.target.style.transition = "600ms";
  // }
  // function MouseOut(event) {
  //   event.target.style.color = "";
  // }

  const renderProducts=()=>(
    <>
    <div className="left">
          <span className="relative text-black top-5 left-20 font-bold text-2xl text-slate-500">
            Products
          </span>
        </div>
        <div className="bottom ">
          <div className="grid grid-cols-3 gap-4 ml-5 p-16 ">
            {datas.map((product,idx) => {
          const { id, title, price, image,stars,reviews,category} = product;
              console.log(product.category);
              return (
                <>
                  <div
                    className="border-2 w-80 flex items-center bg-white border-black h-96 text-black"
                    key={idx}
                  >
                    <div className="flex flex-col  cursor-pointer">
                      <img
                        src={product.image}
                        className="w-64 ml-8 mb-12"
                        alt="..."
                      />

                      <h5 className=" text-2xl mt-1 ml-5 ">
                        {product.title}
                      </h5>
                      <div className="flex flex-row justify-around text-2xl">
                        <p className="ml-1">{product.stars}</p>
                        {product.reviews}
                      </div>
                      <p className="text-xl ml-5">${product.price}</p>
                    </div>

      <div className="flex justify-around items-center absolute ml-5 mt-20 ">             
              <Link to={`/products/${product.id}`} className="mt-64  "> More info</Link>
              {/* <Link to={`/cart`} className="mt-64 ml-20"> add to cart</Link> */}
              <button className=" mt-64" onClick={()=> addToCart(product)} >Add to cart</button>

</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
    </>
  )


  const renderCart = () => (
    <>
      {cart.map((product, idx) => {
        return (
          <>
            <div className="bg-red-500" key={idx}>
              <div className="ml-96">
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
      })}
    </>
  );
 

  return (
    <>

      <div className="bg-gray-300 w-full">
        <header className="text-2xl">
          <button onClick={()=> navigateTo(PAGE_CART)} className="">

            <FaShoppingCart
              size={28}
              title="Login"
              className="absolute right-10 top-full mt-20 "
            />
            <div className="absolute left-full border-2 -ml-12 bg-blue-500 -mt-10">
            {cart.length}
            </div>
          </button>

          <button onClick={()=> navigateTo(PAGE_PRODUCTS)} className="mt-5">
          Home Page
          
          </button>
          </header>
          

        {page == PAGE_PRODUCTS && renderProducts()}
{page == PAGE_CART && renderCart()}

      </div>
    </>
  );
}

export default Products;
