import React from "react";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import  GardenSlide  from "./GardenSlide";

function Gardens() {
  return (
    <section id="home-garden">
      <div className="container">
        <div className="row">
          <div className="garden-title">
            <h1 className="title">Bağlarımız</h1>
            <img src={title_design_1} className="garden-title-design" alt="" />
          </div>
          <div className="gardens-swiper-wrapper">
            <GardenSlide />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gardens;
