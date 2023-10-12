import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  product: productReducer,
});
