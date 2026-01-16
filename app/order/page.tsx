'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
export default function OrderPage() {
    const router= useRouter();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
   router.replace('/')
  }
  return (
    <div className='flex flex-col items-center mt-15 justify-center'>
        <h1>Order page</h1>
        <button className='cursor-pointer bg-blue-300 text-white rounded-lg p-2' onClick={handleClick}>Goto Home </button>
        </div>
  )
}
