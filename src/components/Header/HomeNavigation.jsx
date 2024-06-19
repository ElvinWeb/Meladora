import { useState, React } from "react";
 
import { NavigationData } from "../../data/NavItemsData";
import Button from "react-bootstrap/Button";
import SideBar from "./Side-bar";
import white_logo from "../../meladora-image/logo/white-logo.png";
import { NavLink , Link } from "react-router-dom";

function HomeNavigation({ handleShow }) {
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

  return (
    <>
      <nav className={scroll ? "nav sticky" : "nav"}>
        <div className="container">
          <Link to="/">
            <div className="logo">
              <img src={white_logo} alt="" className="white-logo" />
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

                <li className="hamburger-btn" onClick={toggleSideBar}>
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

      <SideBar sidebar={sidebar} toggleSideBar={toggleSideBar} />
    </>
  );
}
export default HomeNavigation;
