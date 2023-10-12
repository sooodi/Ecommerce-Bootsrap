import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <h5 className="card-title text-center">Your cart is empty</h5>
        )}
      </div>
      <button className="btn btn-outline-dark " onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropdown;
