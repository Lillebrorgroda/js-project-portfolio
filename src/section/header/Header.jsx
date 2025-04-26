import MyProfilPicture from "../../components/Image"
import IconRow from "../../components/IconRow"
import styled from "styled-components"

const HeaderWrapper = styled.header`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
max-width: 320px;
padding: 64px 24px;
gap: 32px;

@media (min-width: 768px) {
  align-items: flex-start;
  max-width: 800px;


}

@media (min-width: 1025px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 128px 128px 64px 128px;
  max-width: 1600px;
}

`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1025px) {
    max-width: 60%;
    align-items: flex-start;
  }
`

const IconWrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 40px;
`

const ImageWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 100%;


  @media (min-width: 1025px) {
    margin-top: 0;
    width: auto;
  }
`

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <ContentWrapper>
          <h3>I am Therese Modig</h3>
          <h1>Web Developer</h1>
          <p>I am a skilled and driven web developer with a strong foundation in <strong> JavaScript, HTML, CSS and TypeScript</strong> and extensive experience working with React. I specialize in building modern, responsive, and user-friendly web applications with a keen eye for both functionality and design.
            In addition to my technical expertise, I have solid competence in <strong>transformational leadership</strong> and <strong>project management</strong>, allowing me to effectively guide teams, foster growth, and drive development processes from idea to delivery. I am passionate about <strong>problem-solving</strong> and thrive in fast-paced environments where creativity and structured execution are essential.</p>
          <IconWrapper>
            <IconRow />
          </IconWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <MyProfilPicture />
        </ImageWrapper>
      </HeaderWrapper>

    </>


  )
}

export default Header

