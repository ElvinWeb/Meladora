import React from "react";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import { GardensData } from "../../data/GardensData";

const Gardens = () => {
  return (
    <section className="all-gardens garden">
      <div className="container">
        <div className="garden-head">
          <h1 className="title">Bağlarımız</h1>
          <img src={title_design_1} alt="" />
        </div>
        <div className="gardens-container">
          {GardensData.map((garden) => (
            <div className="row garden-block" key={garden.id}>
              <div className="col-12 col-lg-6">
                <div className="garden-content">
                  <div className="num">
                    <span>{garden.num}</span>
                  </div>
                  <h1>{garden.title}</h1>
                  <div className="garden-text">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolore quas soluta iusto nulla odit labore nobis culpa id
                      quo saepe, rem numquam adipisci quaerat magnam nesciunt
                      fugit, quia eum laboriosam?Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Dolore quas soluta iusto
                      nulla odit labore nobis culpa id quo saepe, rem numquam
                      adipisci quaerat magnam nesciunt fugit, quia eum
                      laboriosam?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="garden-image">
                  <img src={garden.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gardens;
