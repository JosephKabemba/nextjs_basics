import Head from "next/head";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="Web development, programming" />
      </Head>
      {articles.map((article, key) => (
        <h3 key={key}>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
