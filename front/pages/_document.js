import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyles from '../globalStyles';

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(
          <React.Fragment>
            <GlobalStyles />
            <App {...props} />
          </React.Fragment>
        )
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        ...initialProps.styles,
        sheet.getStyleElement()
      ]
    }
  }
}

export default MyDocument;
