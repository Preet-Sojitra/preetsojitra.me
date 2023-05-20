import Footer from "./Footer"
import Navbar from "./Navbar"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
})

export default function Layout({ children }) {
  return (
    <main
      className={` ${poppins.variable} font-poppins px-10 pt-10 sm:px-14  bg-background min-h-screen lg:px-16 2xl:mx-auto 2xl:max-w-[1440px]`}
    >
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </main>
  )
}
