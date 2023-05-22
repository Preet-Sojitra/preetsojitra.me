import { Oswald } from "next/font/google"
import { TbGridDots } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

const oswald = Oswald({
  weight: "500",
  variable: "--font-oswald",
  subsets: ["latin"],
})

const navLinks = [
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
  const router = useRouter()

  const [isNavOpen, setIsNavOpen] = useState(false)

  const openHamNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1
          className={` ${oswald.variable} font-oswald text-secondary text-4xl sm:text-5xl`}
        >
          <Link href="/">PS</Link>
        </h1>
        <div onClick={openHamNav} className="lmd:hidden">
          <TbGridDots className="text-primary text-4xl cursor-pointer" />
        </div>

        <ul className="hidden lmd:flex text-primary text-3xl gap-7">
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              className={`cursor-pointer relative after:bg-primary after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-0 
              ${
                router.pathname === navLink.link
                  ? "after:translate-x-0 font-bold"
                  : "after:-translate-x-[101%] after:hover:translate-x-0 overflow-hidden after:transition-transform after:duration-300 after:ease-in-out "
              }
              
              `}
            >
              <Link href={navLink.link}> {navLink.name} </Link>
            </li>
          ))}
        </ul>
      </div>

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
            <Link href="/" onClick={openHamNav}>
              PS
            </Link>
          </h1>
          <div onClick={openHamNav}>
            <RxCross2 className="text-4xl cursor-pointer text-primary" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5 mt-10 text-primary text-3xl text-center xs:text-4xl">
          <Link href="/about" onClick={openHamNav}>
            <span>About</span>
          </Link>
          <Link href="/projects" onClick={openHamNav}>
            <span>Projects</span>
          </Link>
          <Link href="/contact" onClick={openHamNav}>
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </>
  )
}
