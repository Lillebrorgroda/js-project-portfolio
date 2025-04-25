import Card from "../../components/Card"
import styled from "styled-components"


const ProjectWrapper = styled.article`
display: flex;
flex-direction: column;
/* gap: 24px; */
padding: 64px 24px;
align-items: center;
text-align: center;
`





const ProjectSection = ({ projects, title }) => {
  return (
    <>
      <ProjectWrapper>

        <h2>{title}</h2>
        {projects.map((project) => {
          return (
            <Card
              key={project.name}
              title={project.name}
              image={project.image}
              text={project.text}
              tag={project.tags.join(", ")}
              linknet={project.netlify}
              linkgit={project.github}
            />
          )
        })}

      </ProjectWrapper>
    </>
  )
}

export default ProjectSection