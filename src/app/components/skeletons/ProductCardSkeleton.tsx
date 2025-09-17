const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-lg shadow animate-pulse">
      <div className="h-6 w-2/3 bg-gray-300 rounded mb-2" /> {/* title */}
      <div className="h-4 w-full bg-gray-200 rounded mb-1" />{" "}
      {/* desc line 1 */}
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-3" /> {/* desc line 2 */}
      <div className="h-5 w-1/4 bg-gray-300 rounded" /> {/* price */}
    </div>
  );
};

export default ProductCardSkeleton;
