import { useMemo, useState, useEffect } from "react"
import axios from "axios"
import Table from "../../components/Table"

export default function Admin() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const columns = useMemo(() => {
    return ["ID", "Name", "Timing"]
  })

  const [tags, setTags] = useState()

  // TODO: ADD loading state and error state and also toastify for success and error
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
          id: prev[prev.length - 1]?.id + 1 || 1,
          name: "Add Tag",
          timing: "Add Timing",
          isEditable: true,
        },
      ]
    })
  }

  const handleTagSave = () => {
    const lastTag = tags[tags.length - 1]
    try {
      axios
        .post(`${API_URL}/tags`, {
          name: lastTag.name,
          timing: parseInt(lastTag.timing),
        })
        .then((res) => {
          console.log(res)
        })
    } catch (error) {
      console.log(error)
    }
    // console.log(lastTag)
  }

  return (
    <>
      <h1 className="text-primary text-2xl ">View/Add Tags</h1>

      {tags && <Table columns={columns} data={tags} setData={setTags} />}

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
