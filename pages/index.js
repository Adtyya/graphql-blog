import { HomePage } from "../components/Home";
import { HeadlessCms, queryAllPost, queryCategories } from "../lib/api";

export default function Home({ posts, categories }) {
  return (
    <>
      <HomePage posts={posts} categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await HeadlessCms.request(queryAllPost);
  const { categories } = await HeadlessCms.request(queryCategories);
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 30,
  };
}
