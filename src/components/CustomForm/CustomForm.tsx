import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterObjType } from "../../utils/common.type";
import {
  PRODUCT_INITIAL_STATE,
  filterProduct,
  resetFilter,
} from "../../store/product/product.reducer";
import { getCategories } from "../../store/product/product.selector";

import "./CustomForm.style.css";

const CustomForm = () => {
  const [valueFilter, setValueFilter] = useState<filterObjType>({
    Name: "",
    Type: "All",
  });

  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  const UpdateValue = (key: any, value: any) => {
    setValueFilter({ ...valueFilter, [key]: value });
  };

  const handleFilter = () => {
    dispatch(filterProduct(valueFilter));
  };
  const handleResetFilter = () => {
    setValueFilter(PRODUCT_INITIAL_STATE.filterObj);
    dispatch(resetFilter(PRODUCT_INITIAL_STATE.filterObj));
  };

  return (
    <>
      <form>
        <div className="row d-flex align-items-center px-4 mb-5">
          <div className="col d-flex flex-column">
            <label className="text-style"> Name</label>
            <input
              type="text"
              id="floating_filled"
              className=" border item-height"
              placeholder="Name"
              value={valueFilter.Name}
              onChange={(event: any) =>
                UpdateValue("Name", event?.target.value)
              }
            />
          </div>
          <div className="col ">
            <label className="text-style">Category </label>
            <select
              className="form-control form-control-sm item-height"
              value={valueFilter.Type}
              onChange={(event) => {
                UpdateValue("type", event.target.value);
              }}
            >
              {categories.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleResetFilter}
            className="col top-margin button-size item-height bg-white mx-4  px-3 border"
          >
            Reset Filter
          </button>
          <button
            type="button"
            onClick={handleFilter}
            className="col top-margin button-size item-height mx-4 px-3 border "
          >
            Filter
          </button>
        </div>
      </form>
    </>
  );
};

export default CustomForm;
