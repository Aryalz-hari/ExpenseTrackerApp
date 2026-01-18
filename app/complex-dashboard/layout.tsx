import React from 'react'


export default function complexLayout({
  children,
  analytics,
  features,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  features: React.ReactNode;
}) {
  return (
    <>
      <div>{children} </div>
      <div>{features}</div>
      <div>{analytics}</div>
    </>
  );
}
