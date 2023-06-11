// import Image from "next/image"
import { Oswald } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/router"

const oswald = Oswald({
  weight: "500",
  variable: "--font-oswald",
  subsets: ["latin"],
})

export default function Sidebar() {
  const router = useRouter()

  const dashboardLinks = [
    {
      name: "Tags",
      link: "/admin",
    },
    {
      name: "Socials",
      link: "/admin/socials",
    },
    {
      name: "About",
      link: "/admin/about",
    },
    {
      name: "All Projects",
      link: "/admin/projects",
    },
    {
      name: "Add Projects",
      link: "/admin/addprojects",
    },
  ]

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
            {dashboardLinks.map((link) => (
              <li
                key={link.name}
                className={` ${
                  router.pathname === link.link
                    ? "bg-dashboardActiveLink  px-5 py-2 rounded-md"
                    : ""
                }`}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
