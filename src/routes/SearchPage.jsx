import React, { useEffect } from "react";
import RootLayout from "../Layouts/RootLayout";
import { SearchContainer } from "../components/Search/SearchResult";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const searchProducts = useSelector(
    (state) => state.searchState.searchProducts
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (searchProducts.length === 0) {
      navigate("/404");
    }
  }, [navigate, searchProducts.length]);
  return (
    <RootLayout>
      <SearchContainer searchProducts={searchProducts} />
    </RootLayout>
  );
};
