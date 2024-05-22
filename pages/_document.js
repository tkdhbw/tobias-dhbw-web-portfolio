import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dieses Portfolio ist im Rahmen des Moduls Web-Programmierung an der DHBW Mannheim entstanden. Es dient dazu, die erlernten Inhalte zu präsentieren, sowie mein auserwähltes Vertiefungsthema zu zeigen." />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js, DHBW, Duale Hochschule Mannheim, Tobias, Karsch, IMBIT, Mannheim, DHBW Mannheim, IMBIT Next, IMBIT N3xt, International Management for Business and Information Technology, Noll " />
        <meta name="author" content="Tobias Karsch" />
        <meta name="theme-color" content="#317EFB" />

        <meta property="og:title" content="Web-Programmierung DHBW Portfolio" />
        <meta property="og:description" content="Dieses Portfolio ist im Rahmen des Moduls Web-Programmierung an der DHBW Mannheim entstanden. Es dient dazu, die erlernten Inhalte zu präsentieren, sowie mein auserwähltes Vertiefungsthema zu zeigen." />
        <meta property="og:url" content="https://www.karstob.com" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
