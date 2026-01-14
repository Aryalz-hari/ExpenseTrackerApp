import React from 'react'
import { Metadata } from 'next';
type Props={
  params:{productId:string}
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
}

export default async function ProductDetailspage({params}:{params:Promise<{productId:string}>}) {

    const {productId}= await params;
  return (
    <div>Details about {productId}</div>
  )
}
