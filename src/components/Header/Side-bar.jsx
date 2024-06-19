import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavigationData } from "../../data/NavItemsData";
import white_logo from "../../meladora-image/logo/white-logo.png";

const SideBar = ({ sidebar, toggleSideBar, }) => {
  return (
    <>
      <div
        class={`side-bg ${sidebar ? "black-opacity" : ""}`}
        onClick={toggleSideBar}
      ></div>
      <div className={`side-menu ${sidebar ? "open" : " "}`}>
        <div className="menu-top">
          <div className="row">
            <Link to="/" className="menu-logo">
              <img src={white_logo} alt="" />
            </Link>
            <button className="close-button" onClick={toggleSideBar}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="menu-bottom">
          <div className="row">
            <ul className="menu-items">
              {NavigationData.map((item) => (
                <li className="menu-item item" key={item.id}>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
