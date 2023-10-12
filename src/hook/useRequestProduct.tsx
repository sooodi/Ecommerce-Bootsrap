import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback, useEffect } from "react";
import { setProduct } from "../store/product/product.reducer";
import { useDispatch } from "react-redux";
import { actionRequestGet } from "../service/actionRequest";
import { GET_PRODUCT } from "../service/api-endpoint";

axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL + "/api/v1/";

const useRequestProduct = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (params: AxiosRequestConfig<any>, applyData: any) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.request(params);
        dispatch(setProduct(response.data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Axios Error with Message: " + error.message);
        } else {
          setError(error);
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const HandleProductData = (data: any) => {
      dispatch(setProduct({ product: data }));
    };

    sendRequest(actionRequestGet(GET_PRODUCT), HandleProductData);
  }, [sendRequest]);

  return {
    loading,
    error,
    sendRequest,
  };
};

export default useRequestProduct;
