import styled from "styled-components";
import MyProfilPicture from "../../components/Image";
import IconRow from "../../components/IconRow";

const ContactWrapper = styled.footer`
display: flex;
flex-direction: column;
padding: 64px 0;
align-items: center;
text-align: center;
max-width: 320px;

@media (min-width: 768px) {
  max-width: 800px;
  text-align: left;
  align-items: flex-start;
  max-width: 800px;


  & > *:first-child {
align-items: center;
  }
}

@media (min-width: 1025px) {
  flex-direction: row;
  align-items: flex-end;
  max-width: 1600px;
}
`
const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  /* @media (min-width: 768px) {
    justify-content: flex-start;
  } */

   @media (min-width: 1025px) {
    justify-content: flex-start;
    align-items: center;
    padding: 0 128px ;
   }
`
const IconWrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 40px;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  @media (min-width: 1025px) {
    align-items: flex-start;
    margin-top: 0;
    padding: 0 128px;
    
  }
`

const Contact = () => {
  return (

    <ContactWrapper>
      <ProfileImageWrapper>
        <MyProfilPicture />
      </ProfileImageWrapper>
      <ContentWrapper>
        <h2>Let´s talk</h2>
        <p>Therese Modig</p>
        <p>+46(0)730 22 66 94</p>
        <p>therese.modig@hotmail.com</p>
        <IconWrapper><IconRow /></IconWrapper>
      </ContentWrapper>
    </ContactWrapper>
  )
}

export default Contact

