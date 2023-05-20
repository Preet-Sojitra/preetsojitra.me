import { Oswald } from "next/font/google"
import { TbGridDots } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx"
import Link from "next/link"
import { useState } from "react"

const oswald = Oswald({
  weight: "500",
  variable: "--font-oswald",
  subsets: ["latin"],
})

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openHamNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <navbar className="flex justify-between items-center">
        <h1
          className={` ${oswald.variable} font-oswald text-secondary text-4xl sm:text-5xl`}
        >
          PS
        </h1>
        <div onClick={openHamNav} className="lmd:hidden">
          <TbGridDots className="text-primary text-4xl cursor-pointer" />
        </div>

        <ul className="hidden lmd:flex text-primary text-3xl gap-7">
          {navLinks.map((navLink) => (
            <li key={navLink.name} className="cursor-pointer">
              <Link href={navLink.link}> {navLink.name} </Link>
            </li>
          ))}
        </ul>
      </navbar>

      <HamburgerNav isNavOpen={isNavOpen} openHamNav={openHamNav} />
    </>
  )
}

function HamburgerNav({ isNavOpen, openHamNav }) {
  return (
    <>
      <div
        className={` bg-background opacity-[0.96] absolute inset-0 z-10 px-10 pt-10 sm:px-14 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }  transition-transform duration-500 ease-in-out lmd:hidden`}
      >
        <div className="flex justify-between items-center">
          <h1
            className={` ${oswald.variable} font-oswald text-secondary  text-4xl sm:text-5xl`}
          >
            PS
          </h1>
          <div onClick={openHamNav}>
            <RxCross2 className="text-4xl cursor-pointer text-primary" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5 mt-10 text-primary text-3xl text-center xs:text-4xl">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/projects">
            <span>Projects</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </>
  )
}
