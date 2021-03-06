import React from "react";
import { Layout } from "./Layout";
import { Card } from "./card/Card";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export const HomePage = ({ posts, categories }) => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-[50vh] items-center bg-gray-100 rounded">
        <div className="relative w-full max-w-xl h-full flex flex-col items-center justify-center">
          <div className="buble__1 opacity-75 absolute top-8 left-[25%] w-36 h-36 bg-red-500 rounded-full filter blur-xl mix-blend-multiply -z-1"></div>
          <div className="buble__1 opacity-75 absolute top-5 -z-1 right-[15%] w-36 h-36 bg-yellow-200 rounded-full filter blur-xl animate-blob mix-blend-multiply"></div>
          <div className="buble__1 opacity-75 absolute top-[30%]  -z-1 left-[30%] w-36 h-36 bg-pink-300 rounded-full filter blur-xl animate-blob2"></div>
          <div className="buble__1 opacity-75 absolute bottom-[15%] right-[30%] -z-1 w-36 h-36 bg-cyan-200 rounded-full filter blur-xl animate-blob3"></div>
          <div className="w-full bg-white shadow-xl rounded h-auto relative">
            <div className="absolute top-2 right-[3%] md:right-[2%] w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-2 right-[7%] md:right-[5%] w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute top-2 right-[11%] md:right-[8%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="py-6 space-y-2 px-1">
              <h1 className="text-3xl font-cs-alegreya font-semibold text-center">
                Teknologi, Networking, dan semacamnya
              </h1>
              <p className="text-center">
                Blog pribadi yang memberikan bacaan yang insyaallah bermanfaat
                bagi pengunjugnya.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center pt-4 font-cs-alegra text-4xl text-black">
        Postingan terbaru
      </h1>
      <div
        id="categories"
        className="px-4 py-3 w-full lg:w-[35%] block mx-auto bg-gray-100 rounded mt-5 mb-2 shadow-md overflow-auto whitespace-nowrap"
      >
        {categories.map((el, i) => (
          <Link href={`/kategori/${el.category}`} key={i}>
            <p className="inline-block text-md text-black mx-3 cursor-pointer">
              {el.category}
            </p>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full content-center px-3 h-auto py-5">
        {posts.map((el, i) => (
          <Link href={`/read/${el.slug}`} key={i}>
            <div>
              <Card
                img={el.coverImage.url}
                title={el.title}
                imgAlt={el.title}
                author={el.author.name}
                date={el.createdAt}
              />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
