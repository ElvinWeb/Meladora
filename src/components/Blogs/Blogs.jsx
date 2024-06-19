import React from "react";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import Blogslide from "./BlogSlide";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="container">
        <div className="blog-title">
          <h1 className="title">Bloglar</h1>
          <img src={title_design_1} alt="" />
        </div>
        <Blogslide />
      </div>
    </section>
  );
};
export default Blogs;
