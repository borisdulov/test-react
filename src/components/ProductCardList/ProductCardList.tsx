import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { MOCK_PRODUCTS } from "../../data/mockProducts";
import type { Product } from "../../types/product";

const LOADING_DELAY = 1200;

const ProductCardList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setIsLoading(false);
      console.log("Loaded products:", MOCK_PRODUCTS);
    }, LOADING_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="product-list bg-body-tertiary py-4">
      <Container>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4">
            <Stack gap={4}>
              {isLoading ? (
                <div className="py-5 text-center text-muted">Загрузка...</div>
              ) : (
                <Row xs={2} md={3} xl={4} className="g-4">
                  {products.map((product) => (
                    <Col key={product.id}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              )}
            </Stack>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default ProductCardList;
