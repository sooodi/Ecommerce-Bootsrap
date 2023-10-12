import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

import "./checkout-item.styles.css";

const CheckoutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <div className="checkout-header w-100">
      <div className="col">
        <img src={image} alt={`${title}`} height={"60"} />
      </div>
      <div className="col-3 me-2">
        <span className="text-size ">{title} </span>
      </div>

      <div
        className="col 
      "
      >
        {" "}
        <div className=" d-flex flex-row">
          <div onClick={removeItemHandler}>&#10094;</div>
          <label className="mx-3">{quantity}</label>
          <div onClick={addItemHandler}>&#10095;</div>
        </div>
      </div>

      <div className="col"> {price}</div>
      <div className="col ">
        <button
          className=" btn btn-outline-danger button-remove"
          onClick={clearItemHandler}
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
