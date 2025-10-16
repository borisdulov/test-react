import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
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
          title: "Nike Air Force 1",
          description:
            "Натуральная кожа, устойчивая подошва и мягкая амортизация.",
          price: "12 990 руб.",
          badge: "250 бонусов",
          image: "/images/nike.png",
        },
        {
          id: 2,
          title: "Nike Air Zoom Pegasus",
          description: "Быстрый отклик благодаря Zoom Air и прочной сетке.",
          price: "15 490 руб.",
          badge: "350 бонусов",
          image: "/images/nike.png",
        },
        {
          id: 3,
          title: "Nike Blazer Mid '77",
          description:
            "Классический силуэт, усиленные вставки и винтажный стиль.",
          price: "10 990 руб.",
          badge: "200 бонусов",
          image: "/images/nike.png",
        },
        {
          id: 4,
          title: "Nike React Infinity Run",
          description:
            "Супермягкая подошва React и поддержка для долгих пробежек.",
          price: "16 990 руб.",
          badge: "400 бонусов",
          image: "/images/nike.png",
        },
      ]);
      setIsLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="product-list">
      {isLoading ? (
        <div className="product-list__skeletons"></div>
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
