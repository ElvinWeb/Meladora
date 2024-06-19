import React from "react";
import { GalleryData } from "../../data/GalleryData";

export const GalleryImage = () => {
  return (
    <>
      {GalleryData.map((imageBox) => (
        <div className="col-12 col-lg-4" key={imageBox.id}>
          <div className="galery-box">
            <img src={imageBox.img} alt="" />
            <div className="box-hover">
              <a href={imageBox.img} data-fancybox="gallery">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
