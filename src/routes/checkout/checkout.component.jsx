import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.css";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="d-none d-sm-block w-100">
        <div className="checkout-header ">
          <div className="col">
            <span className="text-size">Product</span>
          </div>
          <div className="col-3">
            <span className="text-size">Description</span>
          </div>
          <div className="col">
            <span className="text-size">Quantity</span>
          </div>
          <div className="col">
            <span>Price</span>
          </div>
          <div className="col">
            <span className="text-size">Remove</span>
          </div>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <label className="total">Total: ${cartTotal}</label>
    </div>
  );
};

export default Checkout;
