import styled from "styled-components"

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`


const Card = ({ title, text, image, linknet, linkgit, link, tag }) => {
  return (

    <article>

      <StyledImage src={image} alt={name} className="card-image" />

      <h2>{title}</h2>
      <p>{text}</p>
      <p>{tag}</p>
      <a href={linknet}>Netlify</a>
      <a href={linkgit}>Github</a>
      <a href={link}></a>
    </article>

  )

}

export default Card