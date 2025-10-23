import React from "react";
import { Container } from "react-bootstrap";
import "./Main.scss";
import ProductCardList from "../components/ProductCardList/ProductCardList";
import CartButton from "../components/CartButton/CartButton";

const MainPage: React.FC = () => {
  return (
    <div className="main">
      <header className="main__header bg-body-tertiary py-3">
        <Container className="d-flex justify-content-end">
          <CartButton />
        </Container>
      </header>
      <ProductCardList />
    </div>
  );
};

export default MainPage;
