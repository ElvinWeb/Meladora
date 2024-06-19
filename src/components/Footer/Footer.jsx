import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavigationData } from "../../data/NavItemsData";
import footer_black from "../../meladora-image/logo/footer-logo-2.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-menu">
        <div className="row footer-container">
          <div className="col-12 col-xl-6 col-logo">
            <Link to="/">
              <img src={footer_black} alt="" className="mb-5" />
            </Link>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 col-menu">
            <h3 className="menu-title">Menyular</h3>
            <ul className="menu">
              {NavigationData.map((item) => (
                <li className="menu-item" key={item.id}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => {
                      return isActive ? "" : "";
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 col-menu">
            <h3 className="menu-title">Faydalı Linklər</h3>
            <ul className="menu links-menu">
              <li className="link">
                <Link href="/#">Tez-tez soruşulanlar</Link>
              </li>
              <li className="link">
                <Link href="/#">Karyera</Link>
              </li>
              <li className="link">
                <Link href="/#">Xidmət Şəbəkələri</Link>
              </li>
              <li className="link">
                <Link href="/#">Təhlükəsizlik</Link>
              </li>
              <li className="link">
                <Link href="/#">Şərtlər və Qaydalar</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>© Copyright</span>
      </div>
    </div>
  );
};

export default Footer;
