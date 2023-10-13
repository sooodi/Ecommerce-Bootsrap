import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

export const selectProduct = createSelector(
  [selectProductReducer],
  (product) => product.listProduct
);
export const selectFiltredProduct = createSelector(
  [selectProductReducer],
  (product) => {
    return product.filteredProduct;
  }
);

export const selectProductWithCategorys = createSelector(
  [selectFiltredProduct],
  (allProducts) => {
    const activityOptions = {};

    allProducts.forEach((e) => {
      let option = activityOptions[e.category.name];
      if (option) {
        activityOptions[e.category.name] = [
          ...activityOptions[e.category.name],
          { e },
        ];
      } else {
        activityOptions[e.category.name] = [{ e }];
      }
    });
    return activityOptions;
  }
);
export const getCategories = createSelector([selectProduct], (allProducts) => {
  const activityOptions = ["All"];

  allProducts.forEach((e) => {
    if (!activityOptions.find((item) => item === e.category.name)) {
      activityOptions.push(e.category.name);
    }
  });

  return activityOptions;
});
