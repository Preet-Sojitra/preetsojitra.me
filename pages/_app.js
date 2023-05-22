import "../global.css"
import "react-dropdown/style.css"
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
