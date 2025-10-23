import React, { useMemo } from "react";
import { Badge, Button, Card, Container, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { items, removeItem, clearCart } = useCart();

  const totalQuantity = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  if (items.length === 0) {
    return (
      <section className="cart-page bg-body-tertiary py-5">
        <Container>
          <Card className="border-0 shadow-sm">
            <Card.Body className="py-5 text-center">
              <Stack gap={2} className="align-items-center">
                <img
                  src="/svg/bag.svg"
                  alt=""
                  width={48}
                  height={48}
                  aria-hidden="true"
                />
                <h1 className="h4">Корзина пуста</h1>
                <p className="text-muted mb-0">
                  Добавьте понравившиеся товары, чтобы оформить заказ.
                </p>
              </Stack>
            </Card.Body>
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <section className="cart-page bg-body-tertiary py-5">
      <Container>
        <Stack gap={3}>
          <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
            <div className="d-flex align-items-center gap-3">
              <h1 className="h3 mb-0">Корзина</h1>
              <Badge bg="dark" pill>
                {totalQuantity}
              </Badge>
            </div>
            <Button variant="outline-secondary" size="sm" onClick={clearCart}>
              Очистить
            </Button>
          </div>

          <Stack gap={3}>
            {items.map((item) => (
              <Card key={item.id} className="border-0 shadow-sm">
                <Card.Body className="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between">
                  <Stack direction="horizontal" gap={3} className="align-items-start">
                    <img
                      src={item.image || "/images/nike.png"}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="object-fit-cover rounded"
                    />
                    <Stack gap={1}>
                      <h2 className="h5 mb-0">{item.title}</h2>
                      <span className="text-muted">Кол-во: {item.quantity}</span>
                      <span className="fw-semibold">{item.price}</span>
                    </Stack>
                  </Stack>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Удалить
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default CartPage;
