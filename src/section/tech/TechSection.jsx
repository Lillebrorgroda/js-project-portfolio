import styled from "styled-components"

const TechWrapper = styled.div`
  display: flex;
flex-direction: column;
padding: 64px 24px;
align-items: center;
text-align: center;

 `
const StyledTags = styled.p`
  font-size: 24px;
  font-weight: 500;
  
`


const TechSection = ({ tech }) => {
  return (
    <TechWrapper>
      {tech.map((tech) => (
        <div key={tech.title}>
          <div>
            <h2>{tech.title}</h2>
          </div>
          <StyledTags>{tech.tags.join(', ')}</StyledTags>
        </div>
      ))}
    </TechWrapper>
  )
}

export default TechSection