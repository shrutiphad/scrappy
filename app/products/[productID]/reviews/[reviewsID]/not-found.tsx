"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewsId = pathname.split("/")[4];
  //   console.log({ pathname, productId, reviewId });
  return (
    <div>
      <h2>
        Review {reviewsId} not found for product {productId}
      </h2>
    </div>
  );
}