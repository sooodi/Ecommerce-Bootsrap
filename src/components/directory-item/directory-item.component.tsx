import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../../utils/common.type";

type DirectoryItemProps = {
  categoryItem: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ categoryItem }) => {
  const { images, title, category, price } = categoryItem;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate("shop/" + category.name);

  return (
    <div className="col">
      <div
        className="card shadow-sm pb-3 pt-2 px-3"
        onClick={onNavigateHandler}
      >
        <img
          className="card-img-top bg-dark cover mt-2"
          height="200"
          width="100"
          alt=""
          src={images[0] as string}
        />

        <label className="card-title text-center">{title}</label>
        <label className="card-subtitle text-center">{price}</label>

        <div className="d-grid gap-2 mt-2">
          <div className="btn btn-outline-dark">Shop Now</div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;
