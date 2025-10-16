import React from "react";
import "./Main.scss";
import ProductCardList from "../components/ProductCardList/ProductCardList";

const MainPage = () => {
  return (
    <div className="main">
      <div className="main__container">
        <ProductCardList />
      </div>
    </div>
  );
};

export default MainPage;
