import { useState, useEffect } from "react"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"

export default function Table({ columns, data, setTags }) {
  //   console.log(data)
  //   console.log(columns)

  const handleChange = (e, row) => {
    // console.log(row)
    const { name, value } = e.target
    // console.log(value)

    setTags((prev) => {
      const updatedTags = prev.map((tag) => {
        if (tag.id === row.id) {
          // Update the value for the specific row
          return { ...tag, [name]: value }
        }
        return tag
      })

      return updatedTags
    })
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
                  {column.toLowerCase() === "name" ||
                  column.toLowerCase() === "timing" ? (
                    <input
                      type="text"
                      className="bg-transparent w-full text-center"
                      value={row[column.toLowerCase()]}
                      onChange={(e) => handleChange(e, row)}
                      readOnly={row?.isEditable ? false : true}
                      name={column.toLowerCase()}
                    />
                  ) : (
                    row[column.toLowerCase()]
                  )}
                </td>
              ))}
              <td className="text-center border border-gray-700 p-3 text-lg flex justify-center gap-3">
                <AiFillEdit className="text-green-500 text-2xl cursor-pointer" />
                <AiFillDelete className="text-red-500 text-2xl cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
