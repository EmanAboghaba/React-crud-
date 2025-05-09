import { useEffect, useState } from "react";
import { getAllProducts } from "../API/productApi";

export function useFetch(cbFun, ...args) {
  let [data, setData] = useState([]);
  let [errors, setErrors] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await cbFun(...args);
      setData(response.data);
    } catch (error) {
      setErrors(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [cbFun]);
  return { data, errors, isLoading };
}
