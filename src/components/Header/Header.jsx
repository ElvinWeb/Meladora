import { React, useState } from "react";
import NavBar from "./Nav-bar";
import HomeNavigation from "../Navigation/HomeNavigation";
import Foodslider from "./Food-slider";
import HeaderImg from "./Header-Bg";
import HomeSearchBar from "../Search/HomeSearchBar";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="home" id="header">
      <HeaderImg />
      <HomeSearchBar
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <NavBar />
      <HomeNavigation handleShow={handleShow} />
      <Foodslider />
    </header>
  );
}
export default Header;
