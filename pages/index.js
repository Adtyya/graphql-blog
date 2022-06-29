import { HomePage } from "../components/Home";
import { HeadlessCms, queryAllPost } from "../lib/api";

export default function Home({ posts }) {
  return (
    <>
      <HomePage posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await HeadlessCms.request(queryAllPost);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}
