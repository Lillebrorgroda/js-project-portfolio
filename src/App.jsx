//import skills from "./data/skills.json"
//import tech from "./data/tech.json"
import article from "./data/article.json"
import projects from "./data/projects.json"

//import TechSection from "./section/tech/TechSection"
import ProjectSection from "./section/projects/ProjectSection"
import ArticleSection from "./section/article/ArticleSection"




export const App = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</p>

      <ProjectSection
        // title="More Tech"
        projects={projects.projects}
      />
      <ArticleSection
        article={article.article}
      />
    </>
  )
}

export default App