"use client";

import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();

  const productId = params.productId;
  const reviewId = params.reviewId;

  return (
    <div>
      Review {reviewId} not found for product {productId}
    </div>
  );
}
