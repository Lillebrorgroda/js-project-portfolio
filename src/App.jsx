//import skills from "./data/skills.json"
//import tech from "./data/tech.json"
import article from "./data/article.json"
import projects from "./data/projects.json"

//import TechSection from "./section/tech/TechSection"
import ProjectSection from "./section/projects/ProjectSection"
import ArticleSection from "./section/article/ArticleSection"
import Header from "./section/header/Header"




export const App = () => {
  return (
    <>
      <Header />

      <ProjectSection
        title="Featured Projects"
        projects={projects.projects}
      />
      <ArticleSection
        title="My journey"
        article={article.article}
      />
    </>
  )
}

export default App