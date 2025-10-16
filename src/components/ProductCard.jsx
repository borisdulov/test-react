import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ image, title, price, badge = null }) => {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={image}
          alt={title}
          loading="lazy"
        />
        {badge ? <span className="product-card__badge">{badge}</span> : null}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__footer">
          <span className="product-card__price">{price}</span>
          <button type="button" className="product-card__action">
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
