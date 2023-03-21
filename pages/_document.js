import { Html, Head, Main, NextScript, } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title" />
        <meta
          property="og:description"
          content="build by Anurag"
          key="description"
        />
        <meta
          property="og:image"
          content="https://mtgrocks.com/wp-content/uploads/2022/08/MTG.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
