import "../global.css"
import "react-dropdown/style.css"
import Layout from "../components/Layout"
import Head from "next/head"

export default function App({ Component, pageProps, router }) {
  const isInsideAdmin = router.pathname.startsWith("/admin")
  // console.log(router)
  return (
    <>
      <Head>
        <title>Preet Sojitra</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Preet Sojitra is a Machine Learning Enthusiast, Full Stack Developer, Freelancer, Programmer and Student."
        />
        <meta
          name="keywords"
          content="Preet Sojitra, Preet, Sojitra, Preet Sojitra Portfolio, Preet Sojitra Website, Preet Sojitra Projects, Preet Sojitra Skills, Preet Sojitra Contact, Preet Sojitra About, Preet Sojitra Resume, Preet Sojitra CV, Preet Sojitra Machine Learning, Preet Sojitra Full Stack Developer, Preet Sojitra Freelancer, Preet Sojitra Programmer, Preet Sojitra Student"
        />
        <meta name="author" content="Preet Sojitra" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Preet Sojitra" />
        <meta property="og:url" content="https://www.preetsojitra.me/" />
      </Head>
      <Layout isNormal={!isInsideAdmin}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
