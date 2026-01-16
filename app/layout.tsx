import type { Metadata } from "next";

import "./global.css"


export const metadata: Metadata = {
  title: {
    default:"Expense App",
    template:"%s|Expense App",
  },
  description: "Finance App Tracks Everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
