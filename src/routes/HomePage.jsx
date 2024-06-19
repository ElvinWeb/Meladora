import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/about";
import Gardens from "../components/Gardens/GardensSlider";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import Blogs from "../components/Blogs/Blogs";
import Gallery from "../components/Gallery/Gallery";
import HomeFooter from "../components/Footer/HomeFooter";

export const HomePage = () => {

  return (
    <div className="app">
      <Header />
      <About />
      <Gardens />
      <Products />
      <Services />
      <Blogs />
      <Gallery />
      <footer id="foot" className="home">
        <HomeFooter />
      </footer>
    </div>
  );
};
export default HomePage;
