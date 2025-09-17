import { IProduct } from "../interfaces";
import ProductCard from "./ProductCard";

const ProductsCatalogGrid = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {(products || [])?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCatalogGrid;
