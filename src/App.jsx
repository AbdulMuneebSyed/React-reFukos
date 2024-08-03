import React from "react";
import NavBar from "./Components/NavBar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-full bg-black text-white">
      <NavBar></NavBar>
      <Work />
      <Stripes />
      <Products />
        <Marquees />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
