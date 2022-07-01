import { HomePage } from "../components/Home";
import { HeadlessCms, queryAllPost, queryCategories } from "../lib/api";
import Header from "../components/Header";

export default function Home({ posts, categories }) {
  return (
    <>
      <Header
        title="Cuy Blog"
        keywords="cuy blog, blog cuy, blog teknologi, blog terbaru"
        description="Menyediakan bacaan yang berkualitas bagi pengunjungnya."
      />
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
