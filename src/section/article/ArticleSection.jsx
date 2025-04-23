import Card from "../../components/Card"




const ArticleSection = ({ article, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {article.map((article) => {
        return (
          <Card
            key={article.title}
            title={article.title}
            image={article.image}
            text={article.text}
            link={article.link}

          />
        )
      })}
    </>
  )
}

export default ArticleSection