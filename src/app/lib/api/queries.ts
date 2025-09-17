"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getSingleProduct } from "./api";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: getAllProducts,
  });
};

export const useGetSingleProduct = (productID: string) => {
  return useQuery({
    queryKey: ["getSingleProduct", productID],
    queryFn: () => getSingleProduct(productID),
  });
};
