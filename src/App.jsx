import skills from "./data/skills.json"
import tech from "./data/tech.json"
import article from "./data/article.json"
import projects from "./data/projects.json"

import GlobalStyles from "./styles/GlobalStyles"

import Header from "./section/header/Header"
import Skills from "./section/skills/Skills"
import ProjectSection from "./section/projects/ProjectSection"
import TechSection from "./section/tech/TechSection"
import ArticleSection from "./section/article/ArticleSection"
import Contact from "./section/contact/ContactSection"
import MyButton from "./components/Button"


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Skills
        title="Skills"
        skills={skills.skills} />

      <ProjectSection
        title="Featured Projects"
        projects={projects.projects}
      />
      <MyButton
        text="Live demo"
      />
      <TechSection
        tech={tech.tech}
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