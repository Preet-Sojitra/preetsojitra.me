import { useState } from "react"
import Dropdown from "react-dropdown"
import Project from "../components/Project"
import projects from "../data/projectsData"

export default function Projects() {
  const dropDownOptions = ["All"] // Default option

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      if (!dropDownOptions.includes(tag)) {
        dropDownOptions.push(tag)
      }
    })
  })

  const [dropDownValue, setDropDownValue] = useState("All")

  const handleDropDownChange = (e) => {
    setDropDownValue(e.value)
  }

  let filteredProjects = []

  if (dropDownValue === "All") {
    filteredProjects = projects.slice(0, 6)
  } else {
    filteredProjects = projects.filter((project) => {
      return project.tags.includes(dropDownValue)
    })
  }

  console.log(filteredProjects)

  return (
    <>
      <div className="mt-14">
        <h1 className="text-4xl font-bold text-primary xl:text-5xl">
          Projects
        </h1>

        <div className="mt-4 lmd:mt-6">
          <Dropdown
            options={dropDownOptions}
            placeholder="Filter by Tech Stack"
            className="w-4/5 sm:w-3/5 lmd:w-80"
            controlClassName="dropdownControl"
            menuClassName="dropdownMenu"
            arrowClassName="text-subtleWhite"
            placeholderClassName="dropdownPlaceholder"
            onChange={handleDropDownChange}
          />
        </div>

        <div className="mt-10 pb-10 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Project
              key={project.id}
              imageSrc={project.image}
              name={project.name}
              tags={project.tags}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </>
  )
}
