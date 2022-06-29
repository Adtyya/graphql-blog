import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";
import formatDate from "../lib/dateFormatter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
        <div className="text-lg text-black font-normal inline-block">
          <Link href={"/"}>Home </Link>
          &gt;
          <span> {post?.title}</span>
        </div>
        {/* <span>Penulis artikel - {post?.author.name}</span> */}
        <h5 className="text-md py-2">
          {formatDate(post?.createdAt)}, oleh {post?.author.name}
        </h5>
        <div className="w-full text-md pt-2 pb-5 space-y-2">
          <ReactMarkdown>{post?.content.markdown}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default ReadPost;
