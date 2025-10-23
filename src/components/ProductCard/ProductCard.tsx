import React, { useCallback } from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { id, image = "/images/nike.png", title, price, bonuse } = product;
  console.log("ProductCard data:", { id, title, price, bonuse });

  const handleAddToCart = useCallback(() => {
    addItem(product);
  }, [addItem, product]);

  const IMAGE_PADDING = 0;
  const IMAGE_RADIUS = 16;
  const IMAGE_CONTAINER_RADIUS = IMAGE_RADIUS + IMAGE_PADDING;

  const BADGE_PADDING = 6;
  const BADGE_RADIUS = 12;
  const BADGE_CONTAINER_RADIUS = BADGE_RADIUS + BADGE_PADDING;

  return (
    <Card className="h-100 border-0" data-product-id={id}>
      <Card.Header className="bg-transparent border-0 p-0 mb-2">
        <div
          className="ratio ratio-4x3 overflow-hidden"
          style={{ borderRadius: IMAGE_RADIUS }}
        >
          <Card.Img
            src={image}
            alt={title}
            loading="lazy"
            className="object-fit-cover"
          />
        </div>
      </Card.Header>

      <Card.Body className="p-0">
        <Card.Title>{title}</Card.Title>
      </Card.Body>

      <Card.Footer className="bg-transparent border-0 p-0">
        <div className="d-grid flex-column gap-2">
          <span className="d-flex fs-8 fw-semibold text-dark">{price}</span>

          <Button
            variant="dark"
            size="lg"
            className="d-flex align-items-center justify-content-center gap-2 fs-6"
            onClick={handleAddToCart}
          >
            <span>В корзину</span>
            <img
              src="/svg/bag.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
