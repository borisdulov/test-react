export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  bonuse?: number | null;
  image: string;
}
