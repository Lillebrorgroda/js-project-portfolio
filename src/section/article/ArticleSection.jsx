import Card from "../../components/Card"
import styled from "styled-components"
import MyButton from "../../components/Button"

const ArticleWrapper = styled.article`
display: flex;
flex-direction: column;
gap: 24px;
padding: 64px 24px;
align-items: center;
text-align: center;

@media (min-width: 1025px) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

`
const TextWrapper = styled.div`
  text-align: center;
`


const ArticleSection = ({ article, title }) => {
  return (
    <>
      <TextWrapper>
        <h2>{title}</h2>
      </TextWrapper>
      <ArticleWrapper>

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
    </>
  )
}

export default ArticleSection