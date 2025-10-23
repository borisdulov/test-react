import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";
import CartPage from "./routes/CartPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
