import React, { useState } from "react";
import Navigation from "../components/Header/Navigation";
import NavBar from "../components/Header/Nav-bar";
import Searchbar from "../components/Header/Search-bar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Header/Side-bar";
import Banner from "../components/Banner/Banner";

const RootLayout = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const toggleSideBar = () => {
    setSidebar((state) => !state);
  };
  const stickyNav = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", stickyNav);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header id="header">
        <SideBar />
        <Searchbar
          onScroll={scroll}
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
        />
        <NavBar />
        <Navigation
          onScroll={scroll}
          sidebar={sidebar}
          onToggle={toggleSideBar}
          handleShow={handleShow}
        />
      </header>
      <Banner />
      <main>{children}</main>
      <footer id="foot">
        <Footer />
      </footer>
    </>
  );
};
export default RootLayout;
