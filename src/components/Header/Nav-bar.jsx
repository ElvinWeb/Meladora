import React from "react";

function NavBar() {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-inner">
          <div className="phone-num">
            <i className="fa-solid fa-phone"></i>
            <span>(055 555 55 55)</span>
          </div>
          <div className="social-media-links">
            <ul className="links">
              <li className="link">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="link">
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
              <li className="link">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="link">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="link">
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
