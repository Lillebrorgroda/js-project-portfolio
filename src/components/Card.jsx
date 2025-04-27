import styled from "styled-components"
import MyButton from "./Button"

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 800px;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`
const ButtonWrapper = styled.div`
display: flex;
gap: 16px;
width: 100%;
`


const Card = ({ title, text, image, linknet, linkgit, link, tag }) => {
  return (

    <CardWrapper>

      <StyledImage src={image} alt={title} className="card-image" />

      <h3>{title}</h3>
      <p>{text}</p>
      <p>{tag}</p>

      <ButtonWrapper>
        {linknet && <MyButton buttontype="netlify" href={linknet} />}

        {linkgit && <MyButton buttontype="github" href={linkgit} />}

        {link && <MyButton buttontype="other" href={link} />}
      </ButtonWrapper>



    </CardWrapper>

  )

}

export default Card