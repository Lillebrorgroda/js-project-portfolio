import styled from "styled-components";

const SkillWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 64px 24px;
align-items: center;
text-align: center;
`

const Divider = styled.hr`
  border: none;
  height: 2px ;
  background-color: #255F38;
  margin: 24px;
  width: 200px;
`

const SkillSection = ({ skills, title }) => {
  return (
    <>

      <div>
        <h2>{title}</h2>
      </div>
      <SkillWrapper>
        {skills.map((skill) => (

          < div key={skill.title}>
            <Divider />
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