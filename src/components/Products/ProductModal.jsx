import React, { useEffect, useState } from "react";
import { productImages } from "../../data/ProductImages";
import ProductModalSlide from "./ProductModalSlide";

function ProductModal({ product, showModal, closeModal }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const filteredImages = productImages.filter(
      (img) => img.productID === product.id
    );
    setImages([...filteredImages]);
  }, [product]);
  return (
    <>
      <div
        className={`backdrop-modal ${showModal === product.id ? "" : "d-none"}`}
        onClick={closeModal}
      ></div>
      <div id="products-preview">
        <div
          className={`preview-modal  ${
            showModal === product.id ? "" : "d-none"
          }`}
        >
          <div className="preview-modal-header d-flex">
            <h1 className="modal-title">{product.title}</h1>
            <i className="fa-solid fa-xmark" onClick={closeModal}></i>
          </div>
          <div className="preview-modal-body">
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="modal-img">
                  <img src={product.img} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="modal-content">
                  <div className="modal-price">
                    <span>{product.price}</span>
                  </div>
                  <div className="modal-text">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <ProductModalSlide onImages={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
