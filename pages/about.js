import Image from "next/image"
import Head from "next/head"

export default function About() {
  return (
    <>
      <Head>
        <title>About | Preet Sojitra</title>
        <meta
          name="description"
          content="Preet Sojitra is a Machine Learning Enthusiast, Full Stack Developer, Freelancer, Programmer and Student."
        />
        <meta
          name="keywords"
          content="Preet Sojitra, Preet, Sojitra, Preet Sojitra Portfolio, Preet Sojitra Website, Preet Sojitra Projects, Preet Sojitra Skills, Preet Sojitra Contact, Preet Sojitra About, Preet Sojitra Resume, Preet Sojitra CV, Preet Sojitra Machine Learning, Preet Sojitra Full Stack Developer, Preet Sojitra Freelancer, Preet Sojitra Programmer, Preet Sojitra Student"
        />

        <meta name="author" content="Preet Sojitra" />
      </Head>
      <div className="mt-14">
        <h1 className="text-primary text-[2.5rem] font-semibold text-center lmd:text-left">
          About Me
        </h1>

        <div className="text-subtleWhite text-[1.6rem] xl:text-3xl mt-4 space-y-5 leading-[1.5] xl:leading-[1.52] xl:space-y-8">
          <p>
            Hello, I'm Preet Sojitra, currently a pre-final year undergraduate
            student pursuing Computer Science at Pandit Deendayal Energy
            University in India. My primary focus lies in the realms of
            Artificial Intelligence, Machine Learning, and Data Science, with a
            keen interest in robotics. As a developer skilled in both frontend
            and backend technologies, I specialize in crafting websites for
            individuals and small businesses.
          </p>
          <p>
            Passionate about advancing my skills in AI, ML, and robotics, I am
            enthusiastic about exploring new opportunities that allow me to
            delve deeper into these fields. Beyond my academic pursuits, I am an
            avid learner who spends free time delving into the wonders of space
            and the universe.
          </p>
          <p>
            As a pre-final year student, I am open to collaborations and
            discussions regarding AI and ML projects. Feel free to
            <a
              className="text-primary ml-2 relative after:bg-primary after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-0 mr-2"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=preet.dev373@gmail.com"
              target="_blank"
            >
              reach out
            </a>
            if you have any questions or if you're interested in exploring
            potential collaborations in the exciting realms of Artificial
            Intelligence, Machine Learning, and Data Science. .
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
      name: "Python",
      imagePath: "python.svg",
    },
    {
      name: "TensorFlow",
      imagePath: "tensorflow.svg",
    },
    {
      name: "Keras",
      imagePath: "keras.png",
    },
    {
      name: "Scikit-Learn",
      imagePath: "scikit-learn.png",
    },
    {
      name: "NumPy",
      imagePath: "numpy.svg",
    },
    {
      name: "Pandas",
      imagePath: "pandas.svg",
    },
    {
      name: "Matplotlib",
      imagePath: "matplotlib.png",
    },
    {
      name: "Seaborn",
      imagePath: "seaborn.svg",
    },
    {
      name: "OpenCV",
      imagePath: "opencv.svg",
    },
    {
      name: "Flask",
      imagePath: "flask.png",
    },
    // Web
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
      name: "Java",
      imagePath: "java.svg",
    },
    {
      name: "C",
      imagePath: "c.png",
    },
    // Tools
    {
      name: "MongoDB",
      imagePath: "mongodb.svg",
    },
    {
      name: "PostgreSQL",
      imagePath: "postgresql.svg",
    },
    {
      name: "Supabase",
      imagePath: "supabase.png",
    },
    {
      name: "Prisma",
      imagePath: "prisma.png",
    },
    {
      name: "MySQL",
      imagePath: "mysql.svg",
    },
    {
      name: "ROS",
      imagePath: "ros.png",
    },
    {
      name: "Git",
      imagePath: "git.svg",
    },
    {
      name: "Linux",
      imagePath: "linux.png",
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
