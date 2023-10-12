import { useState, useEffect, Fragment, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectProductWithCategorys } from "../../store/product/product.selector";
import ProductCard from "../../components/product-card/product-card.component";
import PaginationComponent from "../../components/pagination/Pagination";

import { Paginate } from "../../utils/functions";
import usePagination from "../../hook/usePagination";
import EmptyPage from "../../components/emptyPage/EmptyPage";

const Category = () => {
  const { category } = useParams();
  const productWithCategory = useSelector(selectProductWithCategorys);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<number>(1); // active page
  const { pages } = usePagination(active, products?.length);
  const productPart = useMemo(() => Paginate(products, active), [pages]);

  useEffect(() => {
    if (category) {
      setLoading(true);
      setProducts(
        productWithCategory[category as keyof typeof productWithCategory]
      );
      setLoading(false);
    }
  }, [category]);

  const handleClick = useCallback((e: any) => {
    if (e.target.value === 0) {
      return;
    }
    setActive(e.target.value);
  }, []);

  if (products?.length === 0) return <EmptyPage />;

  return (
    <Fragment>
      <h1 className="card-title text-center">{category?.toUpperCase()}</h1>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {productPart &&
            productPart.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <PaginationComponent
          handleClick={handleClick}
          pages={pages}
          active={active}
        />
      </div>
    </Fragment>
  );
};

export default Category;
