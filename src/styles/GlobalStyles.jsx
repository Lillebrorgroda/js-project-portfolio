import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  font-family: "Urbanist";

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h1{
font-size: 60px;
  }

  h2{
    font-size: 60px;
  }

  h3{
    font-size: 24px;
    font-family: "Poppins";
    font-weight: 500;
  }

  p{
    font-size: 18px;
    font-weight: 400;
    font-family: "Poppins";
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 400;
  }
`

export default GlobalStyle