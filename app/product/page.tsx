import React from 'react'
import Link from 'next/link'
export default function Products() {
  return (
    <div>
      <h1>
        <Link href='/product/1' replace>Product 1</Link>
      </h1>
      <h2>
        <Link href='/product/2'replace>Product 2</Link>
      </h2>
      <h3>
        <Link href='/product/3' replace>Product 3</Link>
      </h3>
    </div>
  );
}
