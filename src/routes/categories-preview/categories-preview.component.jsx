import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectProductWithCategorys } from "../../store/product/product.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import CustomForm from "../../components/CustomForm/CustomForm";

const CategoriesPreview = () => {
  const productWithCategory = useSelector(selectProductWithCategorys);

  return (
    <Fragment>
      <CustomForm />
      {Object.keys(productWithCategory).map((category) => {
        const products = productWithCategory[category];
        return (
          <CategoryPreview
            key={category}
            category={category}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
