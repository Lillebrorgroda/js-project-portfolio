import styled from "styled-components";
import MyProfilPicture from "../../components/Image";
import IconRow from "../../components/IconRow";

const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 64px 24px;
align-items: center;
text-align: center;
max-width: 320px;
`
const IconWrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 40px;
`



const Contact = () => {
  return (

    <ContactWrapper>
      <MyProfilPicture />
      <h2>Let´s talk</h2>
      <p>Therese Modig</p>
      <p>+46(0)730 22 66 94</p>
      <p>therese.modig@hotmail.com</p>
      <IconWrapper><IconRow /></IconWrapper>

    </ContactWrapper>
  )
}

export default Contact

