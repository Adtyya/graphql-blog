import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";
import formatDate from "../lib/dateFormatter";
import MarkDown from "./MarkDown";

const ReadPost = ({ post }) => {
  return (
    <Layout>
      <div className="w-full p-2 h-auto">
        <img
          src={post?.coverImage.url}
          alt={post?.title}
          className="rounded w-auto h-max max-h-[280px] object-contain shadow-xl block mx-auto"
        />
      </div>
      <div className="p-2 flex flex-col w-full h-auto justify-start items-start space-y-3">
        <h1 className="text-black text-4xl font-semibold">{post?.title}</h1>
        <div className="text-lg text-black font-semibold inline-block">
          <Link href={"/"}>Home </Link> &gt; <span> {post?.title}</span>
        </div>
        <div className="flex space-x-1 pt-1">
          <h3 className="text-lg text-black font-semibold">Kategori</h3>
          <Link href={`/kategori/${post?.category.category}`}>
            <h3 className="text-lg text-white bg-blue-300 rounded px-2 cursor-pointer font-semibold">
              {post?.category.category}
            </h3>
          </Link>
        </div>
        <div className="w-full text-md pt-2 pb-5 space-y-2">
          <MarkDown children={post?.content.markdown} />
        </div>
        <h5 className="text-md pb-4">
          {formatDate(post?.createdAt)}, oleh {post?.author.name}
        </h5>
      </div>
    </Layout>
  );
};

export default ReadPost;
