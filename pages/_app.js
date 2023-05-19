import "../global.css"

export default function App({ Component, pageProps }) {
  return (
    <main className="p-10 bg-background min-h-screen">
      <Component {...pageProps} />
    </main>
  )
}
