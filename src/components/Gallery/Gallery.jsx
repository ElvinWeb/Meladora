import React from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import { GalleryImage } from "./GalleryImage";

Fancybox.bind("[data-fancybox]", {});
const Gallery = () => {
  return (
    <section id="galery">
      <div className="container">
        <div className="galery-title">
          <h1 className="title">Qalereya</h1>
          <img src={title_design_1} alt="" />
        </div>
        <div className="row">
          <GalleryImage />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
