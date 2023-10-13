import "./cart-item.styles.css";

const CartItem = ({ cartItem }) => {
  const { e, quantity } = cartItem;

  return (
    <div className="cartItem-container">
      <img src={e.images[0]} alt={`${e.title}`} height={50} />
      <div className="ms-2">
        <label className="text-size">{e.title}</label>
        <label className="text-size text-price">
          {quantity} x ${e.price}
        </label>
      </div>
    </div>
  );
};

export default CartItem;
