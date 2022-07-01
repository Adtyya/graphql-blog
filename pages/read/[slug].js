import React from "react";
import { HeadlessCms, queryAllSlug, getBySlg } from "../../lib/api";
import ReadPost from "../../components/ReadPost";
import Header from "../../components/Header";

const DetailPost = ({ post }) => {
  return (
    <div>
      <Header
        title={post.title + " - " + post.category.category}
        description={post.excerpt}
        keywords={`${post.title}, ${post.category.category}`}
      />
      <ReadPost post={post} />
    </div>
  );
};

export default DetailPost;

export async function getStaticPaths() {
  const { posts } = await HeadlessCms.request(queryAllSlug);
  const paths = posts.map((path) => ({ params: { slug: path.slug } }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { post } = await HeadlessCms.request(getBySlg, { slug });
  return {
    props: {
      post,
    },
  };
}
