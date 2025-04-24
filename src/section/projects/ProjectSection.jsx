import Card from "../../components/Card"




const ProjectSection = ({ projects, title }) => {
  return (
    <>
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
    </>
  )
}

export default ProjectSection