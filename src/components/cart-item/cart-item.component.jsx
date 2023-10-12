import "./cart-item.styles.css";

const CartItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  return (
    <div className="cartItem-container">
      <img src={image} alt={`${title}`} height={50} />
      <div className="ms-2">
        <label className="text-size">{title}</label>
        <label className="text-size text-price">
          {quantity} x ${price}
        </label>
      </div>
    </div>
  );
};

export default CartItem;
