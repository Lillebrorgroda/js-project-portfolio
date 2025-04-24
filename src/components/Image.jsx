import styled from "styled-components"
import ProfilPic from "/assets/ProfilPic.jpg"

const PictureWrapper = styled.img`
  max-width: 320px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`


const MyProfilPicture = () => {
  return (

    <PictureWrapper src={ProfilPic} alt="Picture of Therese Modig" />
  )

}

export default MyProfilPicture