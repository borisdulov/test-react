import React, { useMemo } from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartButton: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <button
      type="button"
      className="cart-button position-relative"
      onClick={handleClick}
      aria-label={`Открыть корзину, товаров: ${totalItems}`}
    >
      <img
        src="/svg/bag.svg"
        alt=""
        width={22}
        height={22}
        aria-hidden="true"
      />
      <Badge bg="danger" className="cart-button__badge">
        {totalItems}
      </Badge>
    </button>
  );
};

export default CartButton;
