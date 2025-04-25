import styled from "styled-components"

const StyledButton = styled.a`
  display: flex;
  color: ${({ $buttonType }) => $buttonType === "netlify" ? "white" : "#255F38"};
  background-color: ${({ $buttonType }) => $buttonType === "netlify" ? "#255F38" : "transparent"};
  border: 1px solid #255F38;
  padding: 0px 16px;
  height: 48px;
  width: 100%;
  border-radius: 12px;
justify-content: center;
align-items: center;
  cursor: pointer;

`

const MyButton = ({ buttontype, href }) => {
  const buttontext = buttontype === "netlify" ? "Live Demo" : buttontype === "github" ? "GitHub" : "Read article"

  return (

    <StyledButton href={href} target="_blank" rel="noopener noreferrer" $buttonType={buttontype}>
      {buttontext}</StyledButton>

  )

}

export default MyButton