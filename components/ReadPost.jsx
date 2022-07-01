import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";
import formatDate from "../lib/dateFormatter";
import MarkDown from "./MarkDown";

const ReadPost = ({ post }) => {
  return (
    <Layout>
      <div className="font-cs-sans pl-2 text-md lg:text-lg text-black font-semibold inline-block">
        <Link href={"/"}>Home </Link> &gt; <span> {post?.title}</span>
      </div>
      <div className="w-full p-2 h-auto">
        <img
          src={post?.coverImage.url}
          alt={post?.title}
          className="rounded w-auto h-max max-h-[280px] object-contain shadow-xl block mx-auto"
        />
      </div>
      <div className="flex space-x-1 pt-3 pl-2">
        <h3 className="text-lg text-black font-semibold">Kategori</h3>
        <Link href={`/kategori/${post?.category.category}`}>
          <h3 className="text-lg text-white bg-blue-300 rounded px-2 cursor-pointer font-semibold">
            {post?.category.category}
          </h3>
        </Link>
      </div>
      <div className="px-2 pt-5 pb-2 font-cs-alegra flex flex-col w-full h-auto justify-center items-center space-y-1">
        <h1 className="text-black text-3xl lg:text-4xl font-semibold">
          {post?.title}
        </h1>
        <div className="w-full text-md pt-1 pb-3 space-y-2">
          <MarkDown>{post?.content.markdown}</MarkDown>
        </div>
      </div>
      <h5 className="text-md pb-4 pl-2">
        {formatDate(post?.createdAt)}, oleh {post?.author.name}
      </h5>
    </Layout>
  );
};

export default ReadPost;
