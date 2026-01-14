import { Metadata } from "next";


import { notFound } from "next/navigation";
async function Reviewpage({params}:{params:
  {productId:string;
    reviewId:number}}){

    const {productId,reviewId}= await params;
    if(reviewId>10){
         notFound();
    }
  return (
    <div>This is the {productId} with {reviewId}</div>
  )
}

export default Reviewpage