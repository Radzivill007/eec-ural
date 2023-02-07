import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css?family=SFUIText-Regular:300,400,700,900"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
