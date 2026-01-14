import React from "react";
export default function MainLayout({ children }:{children:React.ReactNode}) {
  return (
    <>
      
      <header>This is the product page header</header>
      <main>{children}</main>
      <footer>This is the product page footer</footer>
    </>
  );
}
