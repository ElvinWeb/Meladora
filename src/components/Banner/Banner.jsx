import React from "react";
import banner_bg from "../../meladora-image/design/banner-design.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="about-bg"></div>
      <div className="about-design">
        <img src={banner_bg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
