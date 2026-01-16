import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" items-center justify-center">
      <h1 className=" text-3xl font-bold">My Home Page</h1>
      <Link href='/docs'>Docs page</Link> <br/>
      <Link href='/product'>Product page</Link><br />
      <Link href='/order'>Order Page</Link> <br />
      <Link href='/article/breaking-news-123?lang=en'> Reading In english</Link> <br />
      <Link href='/article/breaking-news-123?lang=fr'>Reading in french</Link>
    </div>
  );
}
