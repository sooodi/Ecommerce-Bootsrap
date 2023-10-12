import { Outlet } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Directory from "../../components/directory/directory.component";
import Banner from "../../components/banner/Banner";
import PaginationComponent from "../../components/pagination/Pagination";
import Spinner from "../../components/spinner/spinner.component";
import EmptyPage from "../../components/emptyPage/EmptyPage";
import useRequestProduct from "../../hook/useRequestProduct";
import usePagination from "../../hook/usePagination";
import { Paginate } from "../../utils/functions";
import ErrorPage from "../../components/errorPage/errorPage";

import "./home.styles.css";

const Home = () => {
  const [active, setActive] = useState<number>(1); // active page
  //get all products
  const { loading, error } = useRequestProduct();

  const ProductData = useSelector((state: any) => state.product.listProduct);
  //hook pageination , returns all pages
  const { pages } = usePagination(active, ProductData?.length);
  // return  products of active page
  const productPart = useMemo(() => Paginate(ProductData, active), [pages]);

  const handleClick = useCallback((e: any) => {
    if (e.target.value === 0) {
      return;
    }
    setActive(e.target.value);
  }, []);

  //render part

  if (loading || !ProductData) return <Spinner />;
  if (error) return <ErrorPage />;
  if (ProductData.length === 0) return <EmptyPage />;

  return (
    <div>
      <Banner />
      <div className="home-container ">
        <h2 className="text-muted text-center mt-4 mb-3">Fashion</h2>
        <Directory product={productPart} />
        <PaginationComponent
          handleClick={handleClick}
          pages={pages}
          active={active}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
