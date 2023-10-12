import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import { FC } from "react";
type DirectoryItemProps = {
  product: any;
};
const ProductCard: FC<DirectoryItemProps> = ({ product }) => {
  const { title, price, images } = product.e;
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="col">
      <div className="card shadow-sm pb-3 pt-2 px-3">
        <img
          className="card-img-top bg-dark cover mt-2"
          src={images[0] as string}
          height="200"
          width="100"
          alt={`${title}`}
        />
        <label className="card-title text-center">{title}</label>
        <label className="card-subtitle text-center">{price}</label>

        <button className="btn btn-outline-dark " onClick={addProductToCart}>
          Add to card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
