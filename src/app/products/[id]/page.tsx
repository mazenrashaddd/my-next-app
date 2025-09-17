"use client";

import ProductPageSkeleton from "@/app/components/skeletons/ProductPageSkeleton";
import { useGetSingleProduct } from "@/app/lib/api/queries";
import { Metadata } from "next";
import Image from "next/image";
import { use } from "react";

interface IProps {
  params: Promise<{ id: string }>;
}

const Page = ({ params }: IProps) => {
  const { id } = use(params);
  const { data: productData, isLoading } = useGetSingleProduct(id);
  return isLoading ? (
    <ProductPageSkeleton />
  ) : (
    <div className="flex flex-col w-2xl">
      <h3 className="font-bold text-xl">{productData?.title}</h3>
      <span className="text-gray-300">{productData?.description}</span>
      <Image
        src={productData?.thumbnail}
        alt={`${productData?.title} Image`}
        width={300}
        height={300}
      />
      <span className="font-bold mt-2">${productData?.price}</span>
    </div>
  );
};

export default Page;
