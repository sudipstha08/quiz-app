import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  
  body {
    background-image: url("/quiz.jpeg");
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }

  button { 
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
