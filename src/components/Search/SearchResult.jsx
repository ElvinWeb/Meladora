import React from "react";
import leaf_icon from "../../meladora-image/logo/leaf-icon.svg";
import title_design_1 from "../../meladora-image/design/title-design-1.png";

export const SearchContainer = ({ searchProducts }) => {
  return (
    <section className="search-result">
      <div className="container">
      <div className="blog-title">
          <h1 className="title">Axtarış</h1>
          <img src={title_design_1} alt="" />
        </div>
        <div className="products-row" id="products-row">
          {searchProducts.map((product) => (
            <React.Fragment key={product.id}>
              <div className="product fruits col-12 col-lg-3">
                <div className="product-card">
                  <img src={leaf_icon} alt="" className="leaf" />
                  <div className="product-img">
                    <img src={product.img} alt="" />
                  </div>
                  <h2 className="card-title">{product.title}</h2>
                  <span className="card-price">{product.price}</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
