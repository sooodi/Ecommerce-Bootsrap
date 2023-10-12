import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.css";

const CategoryPreview = ({ category, products }) => {
  return (
    <div>
      <label className="title-style text-center">
        <Link to={category}>{category.toUpperCase()} </Link>
      </label>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {products
            .filter((_, idx) => idx < 3)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
