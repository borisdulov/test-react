import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.scss";

const LOADING_DELAY = 1200;

const ProductCardList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const placeholders = useMemo(() => Array.from({ length: 4 }), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts([
        {
          id: 1,
          title: "Найке",
          description:
            "Лёгкие, с активным шумоподавлением и автономностью до 40 часов.",
          price: "12 990 руб.",
          badge: "NEW",
          image: "/product-card.jpg",
        },
      ]);
      setIsLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="product-list">
      {isLoading ? (
        <div className="product-list__skeletons">
          {placeholders.map((_, index) => (
            <article
              key={index}
              className="product-card product-card--skeleton"
              aria-hidden="true"
            >
              <div className="product-card__skeleton-image" />
              <div className="product-card__skeleton-body">
                <div className="product-card__skeleton-line" />
                <div className="product-card__skeleton-line" />
                <div className="product-card__skeleton-line" />
                <div className="product-card__skeleton-button" />
              </div>
            </article>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="product-list__grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="product-list__empty">
          К сожалению, сейчас нет доступных товаров. Попробуйте позже.
        </div>
      )}
    </section>
  );
};

export default ProductCardList;
