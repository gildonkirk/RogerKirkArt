import { createGlobalStyle, ThemeProvider } from 'styled-components'

function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  return `
    @font-face{
      font-family: "${name}";
      src: url('/static/fonts/${src}.ttf') format("truetype");
      src: url('/static/fonts/${src}.ttf') format("truetype"),
        url('/static/fonts/${src}.ttf') format("truetype"),
      font-weight: ${fontWeight};
      font-style: ${fontStyle};
    }
  `;
}

const GlobalStyles = createGlobalStyle`
  ${fontFace('roboto', 'roboto/Roboto-Black')}
  ${fontFace('roboto', 'roboto/Roboto-Thin')}
  ${fontFace('roboto', 'roboto/Roboto-Bold')}
  ${fontFace('roboto', 'roboto/Roboto-Light')}

  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.fontColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles;
