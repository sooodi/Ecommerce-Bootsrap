import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

// see all categories
const Shop = () => {
  return (
    <Routes>
      {/* see just one row of  every category , click on them and see all products of that category-->  <Category /> */}
      <Route index element={<CategoriesPreview />} />
      {/* product of every category */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
