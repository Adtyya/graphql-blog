import React, { useEffect } from "react";
import { queryByCategory, queryCategories, HeadlessCms } from "../../lib/api";
import { CategoryPage } from "../../components/Category";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const DetailPost = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);
  return (
    <div>
      <Header title={`Kategori - ${category}`} />
      <CategoryPage posts={posts} category={category} />
    </div>
  );
};

export default DetailPost;

export async function getStaticPaths() {
  const { categories } = await HeadlessCms.request(queryCategories);
  const paths = categories.map((path) => ({
    params: { category: path.category },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const category = params.category;
  const { posts } = await HeadlessCms.request(queryByCategory, { category });
  return {
    props: {
      posts,
    },
  };
}
