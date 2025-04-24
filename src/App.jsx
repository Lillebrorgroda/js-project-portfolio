//import skills from "./data/skills.json"
//import tech from "./data/tech.json"
import article from "./data/article.json"
import projects from "./data/projects.json"

//import TechSection from "./section/tech/TechSection"
import ProjectSection from "./section/projects/ProjectSection"
import ArticleSection from "./section/article/ArticleSection"
import Header from "./section/header/Header"
import Contact from "./section/contact/ContactSection"
import MyButton from "./components/Button"



export const App = () => {
  return (
    <>
      <Header />


      <ProjectSection
        title="Featured Projects"
        projects={projects.projects}
      />
      <MyButton
        text="Live demo"
      />
      <ArticleSection
        title="My journey"
        article={article.article}
      />
      <Contact />
    </>
  )
}

export default App