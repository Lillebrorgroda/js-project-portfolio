import Card from "../../components/Card"
import styled from "styled-components"

const ArticleWrapper = styled.article`
display: flex;
flex-direction: column;
gap: 24px;
padding: 64px 24px;
align-items: center;
text-align: center;

`


const ArticleSection = ({ article, title }) => {
  return (
    <ArticleWrapper>
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
    </ArticleWrapper>
  )
}

export default ArticleSection