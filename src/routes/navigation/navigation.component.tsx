import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo_shop.svg";
import "./navigation.styles.css";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const ProductData = useSelector((state: any) => state.product.listProduct);

  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" width={60} />
        </Link>
        <div className="nav-links ">
          {ProductData?.length > 0 && (
            <Link className="nav-link" to="/shop">
              See All Categories
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
