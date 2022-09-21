import React, { useEffect, useState } from "react";
// import logo from "../images/HikeLog.jpg";
// import logo from "../src/images/HikeLog.jpg"
import logo from "./images/HikeLogo.jpg"
// import searchLog from "./images/searchLog.jpg";
import searchLog from "./images/searchLog.jpg"
import cartLogo from "./images/cartLogo.jpg"
// import cartLogo from "./images/cartLogo.jpg";
// import loginLogo from "./images/loginLogo.jpg";
import loginLogo from "./images/loginLogo.jpg"
import { AiFillShopping } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import {Route, Routes,Link, NavLink} from "react-router-dom"


function Navbar() {
  const [show, setShow] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const language = ["english", "hindi", "tamil"];
  const [displayColor, setDisplayColor] = useState("english");

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    console.log("Clicked key:", e.key);
  };

  function MouseOver(event) {
    event.target.style.color = "grey";
    event.target.style.transition = "600ms";
  }
  function MouseOut(event) {
    event.target.style.color = "";
  }

  return (
    <>
      <div className="flex justify-around bg-gray-700 items-center h-20">
        <div className="left flex justify-around w-2/12">
        <Link to="/">  <img src={logo} className="w-16 h-10 left-0" />
        </Link>
        </div>

        <div className="flex w-7/12 ">
          <button
            className="border-2 w-40 font-bold justify-around "
            onClick={() => {
              setShow(true);
            }}
          >
            All
          </button>

          <input
            type="search"
            placeholder="search"
            className="w-screen h-7 ml-1 font-bold text-black"
          />

          <button>
            <img src={searchLog} className="w-8 h-7 " alt="" />
          </button>
        </div>

        <div className=" w-1/12 flex justify-between ">
            {/* <a href="">
            <AiFillShopping
              size={28}
              title="Cart"
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            />
            </a> */}
           
           <Link to="/Login">
            <a href="" className="">
            <FaUserCircle
              size={28}
              title="Login"
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              
            />
            </a>
            </Link>

        </div>
      </div>

      {/* {show && (
        <>
          {" "}
          <div className="cursor-pointer flex flex-col ml-72 border-2 w-32 items-center">
           <h2>home</h2> 
            <h2>about</h2>
            <h2>contact</h2>
            <h2>email</h2>
          </div>
          <button onClick={() => setShow(false)}>
            <img src={logo} className="w-10 absolute top-20 ml-96" />
          </button>
        </>
      )} */}

      {isHovering && (
        <div className="w-24 ml-96 -mt-10">
          <div className="relative left-96 ">
            {language.map((result) => (
              <div className="relative left-48 border-2 bg-red-400">
                <input
                  type="radio"
                  value={result}
                  checked={displayColor === result}
                  name="radiovalues"
                  onChange={(e) => setDisplayColor(e.target.value)}
                />
                <b>{result}</b>
              </div>
            ))}
          </div>
        </div>
      )}

    <div className="bg-slate-800">
      <ul className="w-2/4 text-lg font-bold ml-5 flex items-center justify-around h-12">
        <Link to="/Mobile"><a href="">Mobile</a></Link>
        <Link to="/Laptops"><a href="">Laptop</a></Link>
        <Link to="/Monitor"><a href="">Monitor</a></Link>
        <Link to="/ComputerAccessories"><a href="">Computer Accessories</a></Link>
        <Link to="/EarPhone"><a href="">EarPhone</a></Link>
        {/* <Link to="/Products"><a href="">EarPhone</a></Link> */}
        <Link to="/products"><a href="">Products</a></Link>


      </ul>
     
    </div>


    </>
  );
}

export default Navbar;
