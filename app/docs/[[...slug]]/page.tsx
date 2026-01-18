import React from "react";

export default async function docsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {


await  new Promise ((resolve)=>{
setTimeout(()=>{
  resolve("Intentional Delay")
},2000)
})

  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for the {slug[0]} and {slug[1]}
      </h1>
    );
  } else if (slug?.length == 1) {
    return <h1>Viewing docs for the {slug[0]}</h1>;
  } else return <h1>Viewing docs </h1>;
}
