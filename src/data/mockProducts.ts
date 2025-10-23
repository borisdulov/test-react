import type { Product } from "../types/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Nike Air Force 1",
    description: "Натуральная кожа, устойчивая подошва и мягкая амортизация.",
    price: "12 990 руб.",
    bonuse: 250,
    image: "/images/nike.png",
  },
  {
    id: 2,
    title: "Nike Air Zoom Pegasus",
    description: "Быстрый отклик благодаря Zoom Air и прочной сетке.",
    price: "15 490 руб.",
    bonuse: 350,
    image: "/images/nike.png",
  },
  {
    id: 3,
    title: "Nike Blazer Mid '77",
    description: "Классический силуэт, усиленные вставки и винтажный стиль.",
    price: "10 990 руб.",
    bonuse: 200,
    image: "/images/nike.png",
  },
  {
    id: 4,
    title: "Nike React Infinity Run",
    description: "Супермягкая подошва React и поддержка для долгих пробежек.",
    price: "16 990 руб.",
    bonuse: 400,
    image: "/images/nike.png",
  },
];
