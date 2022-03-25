import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview.jsx";
import Category from "../category/Category.jsx";

import "./Shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
