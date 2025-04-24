import MyProfilPicture from "../../components/Image"
import IconRow from "../../components/IconRow"
import styled from "styled-components"

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 320px;
padding-top: 64px;
padding-left: 24px;
padding-right: 24px;

`

const IconWrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 64px;
padding-bottom: 24px;
`

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <h3>I am Therese Modig</h3>
        <h1>Web Developer</h1>
        <p>I am a skilled and driven web developer with a strong foundation in <strong> JavaScript, HTML, CSS and TypeScript</strong> and extensive experience working with React. I specialize in building modern, responsive, and user-friendly web applications with a keen eye for both functionality and design.
          In addition to my technical expertise, I have solid competence in <strong>transformational leadership</strong> and <strong>project management</strong>, allowing me to effectively guide teams, foster growth, and drive development processes from idea to delivery. I am passionate about <strong>problem-solving</strong> and thrive in fast-paced environments where creativity and structured execution are essential.</p>
        <IconWrapper>
          <IconRow />
        </IconWrapper>
        <MyProfilPicture />
      </HeaderWrapper>

    </>


  )
}

export default Header

