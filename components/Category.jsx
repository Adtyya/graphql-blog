import React from "react";
import { Layout } from "./Layout";
import { Card } from "./card/Card";
import Link from "next/link";

export const CategoryPage = ({ posts, category }) => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-[50vh] items-center bg-gray-100 rounded">
        <div className="relative w-full max-w-xl h-full flex flex-col items-center justify-center">
          <div className="buble__1 opacity-75 absolute bottom-[15%] right-[30%] -z-1 w-36 h-36 bg-cyan-200 rounded-full filter blur-xl animate-blob2"></div>
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
                Kategori - {category}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-center pt-4 font-cs-alegra text-4xl text-black">
        Kategori - {category}
      </h1> */}
      {posts.length === 0 ? (
        <h1 className="text-center pt-12 text-4xl text-black">
          Belum ada postingan cuy, 🥺
        </h1>
      ) : (
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
      )}
    </Layout>
  );
};
