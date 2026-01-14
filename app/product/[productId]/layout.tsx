import React from 'react'

export default function productLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <h2>Featured Product</h2>
    {children}
    </>
  )
}
