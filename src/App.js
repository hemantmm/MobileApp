// import { Slider } from '@mui/material';
import "./App.css";
import CenterNavbar from "./CenterNavbar";
import Products from "./Products";
import Login from "./Components/Login";
import Navbar from "./Navbar";
import { Route, Routes, Link, Switch } from "react-router-dom";
import Mobile from "./Components/Mobile/Mobile";
import Cart from "./Components/Cart";
import EarPhone from "./Components/Earphone/EarPhone";
import Monitor from "./Components/Monitor/Monitor";
import Laptops from "./Components/Laptops/Laptops";
import ComputerAccessories from "./Components/ComputerAccessories/ComputerAccessories";
import Home from "./Home";
import { useEffect, useState } from "react";
import searchLog from "./images/searchLog.jpg";
import cartLogo from "./images/cartLogo.jpg";
import loginLogo from "./images/loginLogo.jpg";
import { AiFillShopping } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Display from "./Display/Display";
import Product from "./Display/Product";

import FadeLoader from "react-spinners/FadeLoader";
import GoToTop from "./GoToTop";


function App() {
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
    <div>
      <Navbar />
     { 
     loading ?
     <div className="ml-48">
<FadeLoader
        color={"#F37A24"}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="ml-96 mt-40"
      />
      </div>
     :
     
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Mobile/" element={<Mobile />} />
        <Route path="/Laptops/" element={<Laptops />} />
        <Route path="/Monitor/" element={<Monitor />} />
        <Route path="/ComputerAccessories" element={<ComputerAccessories />} />
        <Route path="/EarPhone/" element={<EarPhone />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:productId" element={<Display />} />

        <Route path="/cart" />
      </Routes>}


      </div>
      <GoToTop />
    </>
  );
}

export default App;
