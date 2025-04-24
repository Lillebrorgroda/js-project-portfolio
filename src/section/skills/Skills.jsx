import styled from "styled-components";

const SkillWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding: 64px 24px;
align-items: center;
text-align: center;


`

const SkillSection = ({ skills, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <SkillWrapper>
        {skills.map((skill) => (
          <div key={skill.title}>
            <h3>{skill.title}</h3>
            <ul>
              {skill.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </SkillWrapper>
    </>
  )
}

export default SkillSection;