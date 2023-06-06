import { useMemo, useState, useEffect } from "react"
import axios from "axios"
import Table from "../../components/Table"

export default function Admin() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const columns = useMemo(() => {
    return ["ID", "Name", "Timing"]
  })

  const [tags, setTags] = useState()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { allTags },
        } = await axios.get(`${API_URL}/tags`)

        console.log(allTags)
        setTags(allTags)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleTagAdd = () => {
    // console.log("Add tag")
    setTags((prev) => {
      return [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          name: "Add Tag",
          timing: "Add Timing",
          isEditable: true,
        },
      ]
    })
  }

  const handleTagSave = () => {
    console.log(tags)
  }

  return (
    <>
      <h1 className="text-primary text-2xl ">View/Add Tags</h1>

      {tags && <Table columns={columns} data={tags} setTags={setTags} />}

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
