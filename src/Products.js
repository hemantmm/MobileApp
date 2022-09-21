import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import data from "./data";
import logo1 from "./images/cartLogo.jpg";
// import logo2 from '../src/images/loginLogo.jpg'
import logo2 from "./images/loginLogo.jpg";

import { AiFillShopping } from "react-icons/ai";
import { useEffect } from "react";
import Product from "./Display/Product";

// const Show=(id)=>{
//   return(
//     <Product id={id}/>
//   )
// }

function Products() {


// const idss=data.id;


  // const id = 8;
  // const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(PAGE_PRODUCTS);

  // const [data, setData] = useState(Categories);

  // const filterResult = (categItem) => {
  //   const result = Categories.filter((curData) => {
  //     return curData.category === categItem;
  //   });
  //   setData(result);
  // };

  // const addToCart = (product) => {
  //   console.log("cart");
  //   setCart([...cart, { ...product }]);
  // };

  // const removeFromCart = (productToRemove) => {
  //   setCart(cart.filter((product) => product !== productToRemove));
  // };

  // const navigateTo = (nextPage) => {
  //   setPage(nextPage);
  // };

  // function MouseOver(event) {
  //   event.target.style.color = "grey";
  //   event.target.style.transition = "600ms";
  // }
  // function MouseOut(event) {
  //   event.target.style.color = "";
  // }

 

  return (
    <>
      <div className="bg-gray-300 w-full">
        <div className="left">
          <span className="relative text-black top-5 left-20 font-bold text-2xl text-slate-500">
            Products
          </span>
        </div>
        <div className="bottom ">
          <div className="grid grid-cols-3 gap-4 ml-5 p-16 ">
            {data.map((product) => {
          const { id, title, price, image,stars,reviews,category} = product;
              console.log(product.category);
              return (
                <>
                  <div
                    className="border-2 w-80 flex items-center bg-white border-black h-80 text-black"
                    key={product.id}
                  >
                    <div className="flex flex-col  cursor-pointer">
                      <img
                        src={product.image}
                        className="w-64 ml-8 mt-4"
                        alt="..."
                      />

                      <h5 className=" text-2xl mt-10 ml-5 ">
                        {product.title}
                      </h5>
                      <div className="flex flex-row justify-around text-2xl">
                        <p className="ml-1">{product.stars}</p>
                        {product.reviews}
                      </div>
                      <p className="text-xl ml-5">${product.price}</p>
                    </div>
                   
              <Link to={`/products/${product.id}`} className="mt-48"> Add to cart</Link>

                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
