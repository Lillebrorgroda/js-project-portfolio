import styled from "styled-components"
import MyButton from "./Button"

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 64px 16px;
  gap: 16px;
  align-items: center;
`


const Card = ({ title, text, image, linknet, linkgit, link, tag }) => {
  return (

    <CardWrapper>

      <StyledImage src={image} alt={name} className="card-image" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{tag}</p>
      </div>
      {linknet && <MyButton buttontype="netlify" href={linknet} />}
      {/* <a href={linknet}>Netlify</a> */}
      {linkgit && <MyButton buttontype="github" href={linkgit} />}
      {/* <a href={linkgit}>Github</a> */}
      {link && <MyButton buttontype="other" href={link} />}
      {/* <a href={link}></a> */}


    </CardWrapper>

  )

}

export default Card