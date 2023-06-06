// import Image from "next/image"
import { Oswald } from "next/font/google"

const oswald = Oswald({
  weight: "500",
  variable: "--font-oswald",
  subsets: ["latin"],
})

export default function Sidebar() {
  return (
    <>
      <div className="bg-grayBackground min-h-screen p-6 ">
        <h1
          className={` ${oswald.variable} font-oswald text-secondary text-4xl sm:text-5xl`}
        >
          PS
        </h1>

        <div className="mt-12">
          <ul className="text-primary text-3xl space-y-5">
            <li className="bg-dashboardActiveLink  px-5 py-2 rounded-md">
              Tags
            </li>
            <li className="">Socials</li>
            <li className="">About</li>
            <li className="">Projects</li>
          </ul>
        </div>
      </div>
    </>
  )
}
