import { useState } from "react"
import axios, { all } from "axios"
import { useRouter } from "next/router"

export default function Page() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const router = useRouter()

  const { id, imageSrc, name, tags, liveLink, codeLink } = router.query

  const [projectData, setProjectData] = useState({
    name,
    liveLink,
    codeLink,
  })

  const [allTags, setAllTags] = useState(tags)

  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProjectData({ ...projectData, [name]: value })
  }

  const handleTags = (e) => {
    const { value } = e.target
    setAllTags(value.split(","))
  }

  const handleFileChange = (e) => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ ...projectData, tags })
    // console.log(tags)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "portfolio")
    formData.append("name", projectData.name)
    formData.append("liveLink", projectData.liveLink)
    formData.append("codeLink", projectData.codeLink)
    formData.append("tags", allTags)
    formData.append("imageSrc", imageSrc)
    formData.append("id", id)

    axios
      .patch(`${API_URL}/project`, formData)
      .then((res) => {
        console.log(res.data)
        //   setFile(null)
        //   setProjectData({
        //     name: "",
        //     liveLink: "",
        //     codeLink: "",
        //   })
        //   setTags([""])
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log(err.response.data.error)
      })
  }

  return (
    <>
      <div className="mt-14">
        <h1 className="text-4xl font-bold text-primary xl:text-5xl">
          Edit Project: {name}
        </h1>

        <form>
          <div className="mt-10 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-5">
              <label
                htmlFor="name"
                className="text-subtleWhite text-xl font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
                onChange={handleChange}
                value={projectData.name}
              />
            </div>
            <div className="flex flex-col gap-5">
              <label
                htmlFor="liveLink"
                className="text-subtleWhite text-xl font-semibold"
              >
                Live Link
              </label>
              <input
                type="text"
                name="liveLink"
                id="liveLink"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
                onChange={handleChange}
                value={projectData.liveLink}
              />
            </div>
          </div>
          <div className="mt-10 space-y-8">
            <div className="flex flex-col gap-5">
              <label
                htmlFor="codeLink"
                className="text-subtleWhite text-xl font-semibold"
              >
                Code Link
              </label>
              <input
                type="text"
                name="codeLink"
                id="codeLink"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
                onChange={handleChange}
                value={projectData.codeLink}
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-subtleWhite text-xl font-semibold">
                Tags
              </label>
              <input
                type="text"
                name="codeLink"
                id="codeLink"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl w-full"
                placeholder="Separate tags with commas"
                onChange={handleTags}
                value={allTags}
              />
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <div className="flex flex-col gap-5">
              <label className="text-subtleWhite text-xl font-semibold">
                Upload Image
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className=" p-2 rounded-md text-subtleWhite text-xl w-full"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              className="bg-secondary px-4 py-2 rounded-md text-xl"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
