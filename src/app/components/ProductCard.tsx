import Link from "next/link";
import { IProduct } from "../interfaces";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link
      href={`products/${product.id}`}
      key={product.id}
      className="border p-4 rounded-lg shadow hover:shadow-md transition"
    >
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-sm text-gray-300">{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
