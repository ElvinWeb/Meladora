import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavigationData } from "../../data/NavItemsData";
import SideBar from "./Side-bar";
import Button from "react-bootstrap/Button";
import black_logo from "../../meladora-image/logo/black-logo.png";
import white_logo from "../../meladora-image/logo/white-logo.png";

function Navigation({ onScroll, sidebar, onToggle, handleShow }) {
  return (
    <>
      <nav className={onScroll ? "nav sticky" : "nav"}>
        <div className="container">
          <Link to="/">
            <div className="logo">
              <img
                src={onScroll ? white_logo : black_logo}
                alt=""
                className="black-logo"
              />
            </div>
          </Link>
          <div className="nav-right">
            <div className="nav-items">
              <ul className="items">
                {NavigationData.map((item) => (
                  <li className="item" key={item.id}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => {
                        return isActive ? "nav-active" : "";
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}

                <li className="hamburger-btn" onClick={onToggle}>
                  <i className="fa-solid fa-bars"></i>
                </li>
                <li className="search">
                  <Button onClick={handleShow} className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <SideBar sidebar={sidebar} toggleSideBar={onToggle} onScroll={onScroll} />
    </>
  );
}
export default Navigation;
