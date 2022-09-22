// import { Slider } from '@mui/material';
import './App.css';
// import CenterNavbar from './CenterNavbar';
import CenterNavbar from './CenterNavbar';
// import EndFooter from './EndFooter';
// import EndFooter from './EndFooter';
// import Products from './Products';
import Products from './Products';
import Login from './Components/Login';
import Navbar from './Navbar';
import { Route, Routes, Link, Switch } from "react-router-dom"
import Mobile from './Components/Mobile/Mobile';
import Cart from './Components/Cart'
import EarPhone from './Components/Earphone/EarPhone'
import Monitor from './Components/Monitor/Monitor'
import Laptops from './Components/Laptops/Laptops'
import ComputerAccessories from './Components/ComputerAccessories/ComputerAccessories'
import Home from './Home';
import { useEffect, useState } from 'react';
import searchLog from "./images/searchLog.jpg";
import cartLogo from "./images/cartLogo.jpg";
import loginLogo from "./images/loginLogo.jpg";
import { AiFillShopping } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Display from './Display/Display';
import Product from './Display/Product';
// import { Switch } from '';

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


  return (
    <>
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Mobile/" element={<Mobile />} />
        <Route path="/Laptops/" element={<Laptops />} />
        <Route path="/Monitor/" element={<Monitor />} />
        <Route path="/ComputerAccessories" element={<ComputerAccessories />} />
        <Route path="/EarPhone/" element={<EarPhone />} />

        {/* <Route exact path="/${category}/:id" element={<Product />} component={Product} /> */}

        <Route path="/products" element={<Products />} />

        {/* <Route exact path='/products'>{<Products/>}</Route> */}

        <Route path="/products/:productId" element={<Display />} />


      </Routes>

      {/* <Switch>
      </Switch> */}
      {/* <Display /> */}
      {/* <Navbar />
  <CenterNavbar />
  <Footer />
  <EndFooter /> */}
    </>
  );
}

export default App;
