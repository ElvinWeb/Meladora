import React, { useEffect, useState } from "react";
import { ProductsData, ProductCategories } from "../../data/ProductsData";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import leaf_icon from "../../meladora-image/logo/leaf-icon.svg";
import ProductModal from "./ProductModal";
import { useNavigate, useParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const { productID } = useParams();
  let navigate = useNavigate();
  console.log(productID);

  useEffect(() => {
    if (productID) {
      navigate("/products");
      setActiveCategory(parseInt(productID));
    }
    let filteredProducts = ProductsData.filter(
      (food) => food.categoryID === activeCategory
    );
    setProducts(filteredProducts);
    if (activeCategory === 5) {
      setProducts(ProductsData);
    }
  }, [activeCategory, navigate, productID]);

  const openModal = (id) => {
    setShowModal(id);
  };
  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <section id="products">
      <div className="container">
        <div className="row">
          <div className="product-title">
            <h1 className="title">Məhsullarımız</h1>
            <img src={title_design_1} alt="" className="design-1" />
          </div>
          <div className="products-category-buttons">
            <div className="category">
              {ProductCategories.map((button) => (
                <button
                  className={`category-name ${
                    activeCategory === button.id ? "product-active" : ""
                  }`}
                  key={button.id}
                  onClick={() => setActiveCategory(button.id)}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
          <div className="products-row" id="products-row">
            {products.map((product) => (
              <React.Fragment key={product.id}>
                <div
                  className="product fruits col-12 col-lg-3"
                  onClick={() => openModal(product.id)}
                >
                  <div className="product-card">
                    <img src={leaf_icon} alt="" className="leaf" />
                    <div className="product-img">
                      <img src={product.img} alt="" />
                    </div>
                    <h2 className="card-title">{product.title}</h2>
                    <span className="card-price">{product.price}</span>
                  </div>
                </div>
                <ProductModal
                  showModal={showModal}
                  closeModal={closeModal}
                  product={product}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
