import { Oswald } from "next/font/google"
import { TbGridDots } from "react-icons/tb"

const oswald = Oswald({
  weight: "500",
  variable: "--font-oswald",
  subsets: ["latin"],
})

export default function Navbar() {
  return (
    <>
      <navbar className="flex justify-between items-center">
        <h1 className={` ${oswald.variable} font-oswald text-primary text-3xl`}>
          PS
        </h1>
        <div>
          <TbGridDots className="text-primary text-3xl cursor-pointer" />
        </div>
      </navbar>
    </>
  )
}
