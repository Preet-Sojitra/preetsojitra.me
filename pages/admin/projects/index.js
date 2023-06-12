import { useState, useEffect } from "react"
import axios from "axios"
// import projects from "../../data/projectsData"
import Dropdown from "react-dropdown"
import Project from "../../../components/Project"

export default function Projects() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const [projects, setProjects] = useState([])

  // TODO: ADD loading state and error state and also toastify for success and error
  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { allProjects },
        } = await axios.get(`${API_URL}/project`)
        console.log(allProjects)
        setProjects(allProjects)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

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
    filteredProjects = projects
  } else {
    filteredProjects = projects.filter((project) => {
      return project.tags.includes(dropDownValue)
    })
  }

  const handleDelete = (id) => {
    console.log(id)

    try {
      axios.delete(`${API_URL}/project?id=${id}`).then((res) => {
        console.log(res.data)
        setProjects(projects.filter((project) => project.id !== id))
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  return (
    <>
      <h1 className="text-primary text-2xl ">View Projects</h1>

      <div className="mt-5 space-x-5">
        <div className="mt-4 lmd:mt-6">
          <Dropdown
            options={dropDownOptions}
            value={dropDownValue}
            className="w-[90%] sm:w-3/5 lmd:w-80"
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
              id={project.id}
              imageSrc={project.imageLink}
              name={project.name}
              tags={project.tags}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
              isAdmin={true}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  )
}
