import { createGlobalStyle, ThemeProvider } from 'styled-components'

function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  return `
    @font-face{
      font-family: "${name}";
      src: url('/static/fonts/${src}.ttf') format("truetype");
      src: url('/static/fonts/${src}.ttf') format("truetype"),
        url('/static/fonts/${src}.ttf') format("truetype"),
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;
}

const GlobalStyles = createGlobalStyle`
  ${fontFace('roboto', 'roboto/Roboto-Black', )}

  body {
    margin: 0;
    font-family: 'roboto';

  }
`

export default GlobalStyles;
