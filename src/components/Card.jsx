import styled from "styled-components"

const Card = ({ title, text, image, linknet, linkgit, link }) => {
  return (
    <article>
      <img src={image} alt={name} className="card-image" />
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={linknet}>Netlify</a>
      <a href={linkgit}>Github</a>
      <a href={link}></a>
    </article>
  )

}

export default Card