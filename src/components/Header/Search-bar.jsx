import React, { useState } from "react";
import { NavigationData } from "../../data/NavItemsData";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { sendSearchProducts } from "../../redux/action/SearchAction";
import { ProductsData } from "../../data/ProductsData";
import { useDispatch } from "react-redux";
import { ProductCategories } from "../../data/ProductsData";

function Searchbar({ handleClose, show, onScroll }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    let activeLink = NavigationData.find((link) =>
      link.name
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    let searchProducts = ProductsData.filter((product) =>
      product.title
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    let searchCategory = ProductCategories.find((category) =>
      category.name
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    if (activeLink) {
      navigate(activeLink.href);
    } else if (searchProducts && searchProducts.length > 0) {
      navigate("/search");
      dispatch(sendSearchProducts(searchProducts));
    } else if (searchCategory) {
      let id = searchCategory.id;
      navigate(`/products/${id}`);
    } else {
      navigate("/404");
    }
  };

  return (
    <div className="search-bar-section">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className={`offcanvas offcanvas-bg ${onScroll ? "bg-black" : ""}`}
      >
        <Offcanvas.Body>
          <div className="container">
            <div className="row">
              <div className="col-10 search">
                <form onSubmit={handleSearchFormSubmit}>
                  <input
                    type="text"
                    placeholder="Axtar"
                    className="input-control"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    type="button"
                    className="input-search-btn"
                    onClick={handleSearchFormSubmit}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="col-2 close" onClick={handleClose}>
                <button class="close-btn">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Searchbar;
