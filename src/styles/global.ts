import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  -webkit-font-smoothing: antialiased;
}
body,input, button, textarea {
  font: 400 1rem 'Roboto', sans-serif;
}

button{
  cursor: pointer;
}
`