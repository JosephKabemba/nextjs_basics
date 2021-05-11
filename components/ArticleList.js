import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, key) => (
        <h3 key={key}>{article.title}</h3>
      ))}
    </div>
  );
};

export default ArticleList;
