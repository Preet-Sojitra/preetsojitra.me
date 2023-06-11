import { useMemo, useState, useEffect } from "react"
import axios from "axios"
import Table from "../../components/Table"

export default function Socials() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const columns = useMemo(() => {
    return ["ID", "Text"]
  })

  const [aboutMe, setAboutMe] = useState([])

  // TODO: ADD loading state and error state and also toastify for success and error
  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { about },
        } = await axios.get(`${API_URL}/about`)
        console.log(about)
        setAboutMe(about)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleTagAdd = () => {
    // console.log("Add tag")
    setAboutMe((prev) => {
      return [
        ...prev,
        {
          id: prev[prev.length - 1]?.id + 1 || 1,
          text: "Add Text",
          isEditable: true,
        },
      ]
    })
  }

  const handleTagSave = () => {
    const lastAboutMe = aboutMe[aboutMe.length - 1]
    try {
      const postData = async () => {
        axios
          .post(`${API_URL}/about`, {
            text: lastAboutMe.text,
          })
          .then((res) => {
            console.log(res.data)
          })
      }
      postData()
    } catch (error) {
      console.log(error)
    }

    // console.log(aboutMe)
  }

  return (
    <>
      <h1 className="text-primary text-2xl ">View/Add About</h1>

      {aboutMe && (
        <Table columns={columns} data={aboutMe} setData={setAboutMe} />
      )}

      <div className="mt-5 space-x-5">
        <button
          className=" bg-secondary font-medium px-5 py-1 text-xl rounded-md hover:bg-transparent hover:text-white duration-300 ease-in-out hover:border hover:border-secondary"
          onClick={handleTagAdd}
        >
          Add Tag
        </button>

        <button
          className=" font-medium mt-5 px-5 py-1 text-xl rounded-md text-white border-secondary border"
          onClick={handleTagSave}
        >
          Save
        </button>
      </div>
    </>
  )
}
