import { FC } from "react";

import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryCategory } from "../../utils/common.type";
import "./directory.styles.css";

type directoryProp = {
  product: DirectoryCategory[];
};
const Directory: FC<directoryProp> = ({ product }) => {
  return (
    <div className="directory-container pb-25 px-lg-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
        {product.map((category: any) => (
          <DirectoryItem key={category?.id} categoryItem={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
