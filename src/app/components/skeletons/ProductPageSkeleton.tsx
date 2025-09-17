const ProductPageSkeleton = () => {
  return (
    <div className="flex flex-col w-2xl animate-pulse space-y-3">
      {/* title */}
      <div className="h-6 w-3/4 bg-gray-500 rounded"></div>

      {/* description */}
      <div className="h-4 w-full bg-gray-400 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-400 rounded"></div>

      {/* price */}
      <div className="h-5 w-16 bg-gray-500 rounded mt-2"></div>
    </div>
  );
};

export default ProductPageSkeleton;
