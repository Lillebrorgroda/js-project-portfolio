import styled from "styled-components"
import React from "react"

const SkillWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 64px 24px;
align-items: center;
text-align: center;

@media (min-width: 1025px) {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  
}

`

const TextWrapper = styled.div`
  text-align: center;
`


const Divider = styled.div`
  border: none;
  height: 2px ;
  background-color: #255F38;
  margin: 24px auto;
  width: 200px;

  @media (min-width: 1025px) {
    /* Desktop: vertical divider */
    width: 2px;
    height: 200px;
    margin: 0 32px;
  }
`
const SkillItem = styled.div`
  text-align: center;
  padding: 16px;
`

const SkillSection = ({ skills, title }) => {
  return (
    <>
      <TextWrapper>
        <h2>{title}</h2>
      </TextWrapper>
      <SkillWrapper>
        {skills.map((skill, index) => (
          <React.Fragment key={skill.title}>
            <SkillItem>
              <h3>{skill.title}</h3>
              <ul>
                {skill.tags.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </ul>
            </SkillItem>
            {/* Add divider except after the last skill */}
            {index !== skills.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </SkillWrapper>
    </>
  )
}


export default SkillSection;