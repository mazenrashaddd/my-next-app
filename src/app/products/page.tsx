"use client";

import ProductsCatalogGrid from "../components/ProductsCatalogGrid";
import ProductCardSkeleton from "../components/skeletons/ProductCardSkeleton";
import { useGetAllProducts } from "../lib/api/queries";

const Products = () => {
  const { data: allProductsData, isLoading } = useGetAllProducts();

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl font-bold">Latest Products</span>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({ length: 9 }, (_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <ProductsCatalogGrid products={allProductsData?.products} />
      )}
    </div>
  );
};

export default Products;
