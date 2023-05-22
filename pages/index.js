import Navbar from "../components/Navbar"
import { Anton } from "next/font/google"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs"
import { FiDownload } from "react-icons/fi"
import Footer from "../components/Footer"

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
})

const socials = [
  {
    type: "twitter",
    icon: <BsTwitter className="text-primary cursor-pointer" />,
    link: "https://twitter.com/Preet_Sojitra03",
  },
  {
    type: "github",
    icon: <BsGithub className="text-primary  cursor-pointer" />,
    link: "https://github.com/Preet-Sojitra",
  },
  {
    type: "linkedin",
    icon: <BsLinkedin className="text-primary  cursor-pointer" />,
    link: "https://www.linkedin.com/in/preet-sojitra/",
  },
]

export default function Home() {
  return (
    <>
      <section className="flex flex-col-reverse items-center justify-center  gap-5 lmd:flex-row lmd:justify-between xl:w-[90%] min-h-[85vh]">
        <div className="flex text-primary flex-col gap-5 lmd:gap-8 items-center lmd:items-start">
          <div className="text-center space-y-2 lmd:text-left lmd:space-y-3 xl:space-y-4">
            <h3 className="text-subtleWhite text-xl font-anton xs:text-2xl lmd:text-3xl lmd:ml-1 xl:ml-2 xl:text-4xl">
              Hi I'm
            </h3>
            <h1
              className={` ${anton.variable} text-6xl xs:text-7xl lmd:text-8xl xl:text-9xl font-anton text-secondary`}
            >
              Preet Sojitra
            </h1>
          </div>

          <div className=" text-primary text-3xl h-[90px] inline-flex items-center justify-center text-center lmd:justify-start lmd:h-auto lmd:text-4xl xl:text-[42px]">
            <TypeAnimation
              sequence={[
                "Machine Learning Enthusiast",
                1300,
                "Full Stack Developer",
                1300,
                "Freelancer",
                1300,
                // "Open Source Contributor",
                // 1300,
                "Programmer",
                1300,
                "Student",
                1300,
              ]}
              speed={30}
              wrapper={"span"}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <div className="flex justify-center text-4xl xs:text-5xl gap-5 lmd:justify-start">
            {socials.map((social) => {
              if (social.type === "twitter") {
                return (
                  <div key={social.type}>
                    <a href={social.link} target="_blank">
                      {social.icon}
                    </a>
                  </div>
                )
              } else if (social.type === "github") {
                return (
                  <div key={social.type}>
                    <a href={social.link} target="_blank">
                      {social.icon}
                    </a>
                  </div>
                )
              } else {
                return (
                  <div key={social.type}>
                    <a href={social.link} target="_blank">
                      {social.icon}
                    </a>
                  </div>
                )
              }
            })}
          </div>

          <div className="bg-secondary flex w-fit px-4 py-2 justify-center items-center gap-4 rounded-md mt-3 hover:bg-transparent  hover:border-[1px] hover:border-secondary hover:duration-500 group">
            <button className=" text-black text-2xl lmd:text-xl font-medium group-hover:text-subtleWhite">
              <a href="https://drive.google.com/file/d/1ZG434aDzbuGoJfzIpTNWdHAS8Pd2_zWl/view?usp=sharing">
                Download CV
              </a>
            </button>
            <FiDownload className="text-black text-2xl lmd:text-xl group-hover:text-subtleWhite" />
          </div>
        </div>
        <div>
          <Image
            src={"/images/headshot.png"}
            alt="Headshot image of Preet"
            width={160}
            height={160}
            className="sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[280px] xl:h-[280px]"
          />
        </div>
      </section>
    </>
  )
}
