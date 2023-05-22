import Image from "next/image"

export default function About() {
  return (
    <>
      <div className="mt-14">
        <h1 className="text-primary text-[2.5rem] font-semibold text-center lmd:text-left">
          About Me
        </h1>

        <div className="text-subtleWhite text-[1.6rem] xl:text-3xl mt-4 space-y-5 leading-[1.5] xl:leading-[1.52] xl:space-y-8">
          <p>
            Hello, my name is Preet Sojitra, and I am currently pursuing my
            undergraduate degree in Computer Science from Pandit Deendayal
            Energy University in India. As a frontend developer with experience
            in backend development, I specialize in creating websites for
            individuals and small businesses.
          </p>
          <p>
            My passion lies in the fields of machine learning and data science,
            and I am constantly seeking new opportunities to explore and deepen
            my understanding of these areas. I am also interested in Data
            Structures and Algorithms and strive to improve my programming
            skills continually.
          </p>
          <p>
            I am currently available for collaboration regarding projects
            related to machine learning or web development.Feel free to
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=preet.dev373@gmail.com"
              target="_blank"
            >
              contact me
            </a>
            .
          </p>
          <p>
            Apart from my academic pursuits, I am an avid learner and spend my
            free time learning about space and the universe.
          </p>
        </div>
      </div>

      <Skills />
    </>
  )
}

function Skills() {
  const skills = [
    {
      name: "NextJS",
      imagePath: "nextjs.png",
    },
    {
      name: "ReactJS",
      imagePath: "reactJs.svg",
    },
    {
      name: "ExpressJS",
      imagePath: "express.svg",
    },
    {
      name: "NodeJS",
      imagePath: "nodejs.svg",
    },
    {
      name: "JavaScript",
      imagePath: "javascript.svg",
    },
    {
      name: "TailwindCSS",
      imagePath: "tailwindcss.png",
    },
    {
      name: "Python",
      imagePath: "python.svg",
    },
    {
      name: "Java",
      imagePath: "java.svg",
    },
    {
      name: "C",
      imagePath: "c.png",
    },
    {
      name: "MongoDB",
      imagePath: "mongodb.svg",
    },
    {
      name: "MySQL",
      imagePath: "mysql.svg",
    },

    {
      name: "Git",
      imagePath: "git.svg",
    },

    {
      name: "Bash",
      imagePath: "bash.svg",
    },
    {
      name: "Figma",
      imagePath: "figma.svg",
    },
  ]

  return (
    <>
      <div className="mt-16 pb-16">
        <h1 className="text-primary text-[2.5rem] lmd:text-5xl font-semibold text-center ">
          Skills
        </h1>

        <div className="text-subtleWhite flex flex-wrap gap-10 mt-8 lmd:mt-10 lmd:gap-12 justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <Image
                alt={skill.name}
                src={`/images/skills/${skill.imagePath}`}
                width={60}
                height={60}
                className="lmd:w-[70px] lmd:h-[70px]"
              />
              <h1 className="text-2xl mt-3 lmd:text-[1.6rem]">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
