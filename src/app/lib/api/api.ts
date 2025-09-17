import axios from "axios";

export const getAllProducts = async () => {
  const data = await axios.get(`https://dummyjson.com/products`);
  return data?.data;
};

export const getSingleProduct = async (productID: string) => {
  const data = await axios.get(`https://dummyjson.com/products/${productID}`);
  return data?.data;
};
