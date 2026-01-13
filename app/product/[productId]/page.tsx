import React from 'react'

export default async function ProductDetailspage({params}:{params:Promise<{productId:string}>}) {

    const {productId}= await params;
  return (
    <div>Details about {productId}</div>
  )
}
