import { useState, useEffect } from "react"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { AiFillCheckSquare } from "react-icons/ai"
import axios from "axios"
import { useRouter } from "next/router"

export default function Table({ columns, data, setData }) {
  //   console.log(data)
  // console.log(columns)

  const router = useRouter()
  // console.log(router.pathname)

  // Extract "social" from "/admin/social"
  // console.log(router.pathname.split("/"))
  const path = router.pathname.split("/")[2]

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)

  // TODO: Edit and Delete functionality

  const handleChange = (e, row) => {
    // console.log(row)
    const { name, value } = e.target
    // console.log(value)

    setData((prev) => {
      const updatedData = prev.map((data) => {
        if (data.id === row.id) {
          // Update the value for the specific row
          return { ...data, [name]: value }
        }
        return data
      })

      return updatedData
    })
  }

  const handleDelete = (row) => {
    // console.log(row.id)
    try {
      axios.delete(`${API_URL}/${path}?id=${row.id}`).then((res) => {
        // console.log(res.data)
        setData((prev) => {
          const updatedData = prev.filter((data) => data.id !== row.id)
          return updatedData
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (row) => {
    // console.log(row)
    setIsEditButtonClicked(true)
    setData((prev) => {
      const updatedData = prev.map((data) => {
        if (data.id === row.id) {
          return { ...data, isEditable: true }
        }
        return data
      })
      return updatedData
    })
  }

  const handleEditSave = (row) => {
    const requestBody = {
      id: row.id,
      name: row.name,
    }

    if (row.timing) {
      requestBody.timing = parseInt(row.timing)
    }
    if (row.text) {
      requestBody.text = row.text
    }
    if (row.link) {
      requestBody.link = row.link
    }

    try {
      axios.patch(`${API_URL}/${path}`, requestBody).then((res) => {
        // console.log(res.data)
        setData((prev) => {
          const updatedData = prev.map((data) => {
            if (data.id === row.id) {
              return { ...data, isEditable: false }
            }
            return data
          })
          return updatedData
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <table className="w-full mt-5  text-white">
        <thead className="text-xl">
          <tr>
            {columns.map((column) => (
              <th key={column} className="border border-gray-700 p-2">
                {column}
              </th>
            ))}
            <th className="border border-gray-700 p-2">Edit / Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column}
                  className="text-center border border-gray-700 p-2 text-lg"
                >
                  {column.toLowerCase() === columns[1].toLowerCase() ||
                  (columns.length > 2 &&
                    column.toLowerCase() === columns[2].toLowerCase()) ? (
                    <>
                      {column.toLowerCase() === "text" ? (
                        <textarea
                          className="bg-transparent w-full text-center"
                          value={row[column.toLowerCase()]}
                          onChange={(e) => handleChange(e, row)}
                          readOnly={row?.isEditable ? false : true}
                          name={column.toLowerCase()}
                          rows={5}
                        />
                      ) : (
                        <input
                          type="text"
                          className="bg-transparent w-full text-center"
                          value={row[column.toLowerCase()]}
                          onChange={(e) => handleChange(e, row)}
                          readOnly={row?.isEditable ? false : true}
                          name={column.toLowerCase()}
                        />
                      )}
                    </>
                  ) : (
                    row[column.toLowerCase()]
                  )}
                </td>
              ))}
              <td className="text-center border border-gray-700 p-3 text-lg flex justify-center gap-3">
                <AiFillEdit
                  className="text-green-500 text-2xl cursor-pointer"
                  onClick={() => handleEdit(row)}
                />
                <AiFillDelete
                  className="text-red-500 text-2xl cursor-pointer"
                  onClick={() => handleDelete(row)}
                />

                {isEditButtonClicked && (
                  <>
                    <AiFillCheckSquare
                      className="text-green-500 text-2xl cursor-pointer"
                      onClick={() => handleEditSave(row)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
