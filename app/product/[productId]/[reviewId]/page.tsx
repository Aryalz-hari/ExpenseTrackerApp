import { Metadata } from "next";


import { notFound } from "next/navigation";
async function Reviewpage({params}:{params:
  {productId:string;
    reviewId:number}}){

    const {productId,reviewId}= await params;
    if(reviewId>10){ throw new Error("Review not found for that product id");
    }
  return (
    <div>This is the {productId} with {reviewId}</div>
  )
}

export default Reviewpage