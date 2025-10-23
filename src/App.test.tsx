import { render } from "@testing-library/react";
import App from "./App";

test("renders product list container", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".product-list")).not.toBeNull();
});
