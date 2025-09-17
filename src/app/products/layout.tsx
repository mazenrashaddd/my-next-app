import { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Products Catalog",
  description: "Explore our latest products",
};

const ProductsLayout = ({ children }: IProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default ProductsLayout;
