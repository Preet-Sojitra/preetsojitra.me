import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Login() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

  const router = useRouter()

  const [loginData, setLoginData] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log(loginData)
    try {
      const res = await axios.post(`${API_URL}/login`, loginData)
      const data = await res.data
      router.replace("/admin")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-4/5 w-full items-center justify-center pt-40">
      <div className="m-4 w-full rounded bg-secondary p-8 shadow-lg md:mx-auto md:max-w-sm">
        <span className="mb-4 block w-full text-2xl font-semibold uppercase ">
          Login
        </span>
        <form className="mb-4">
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="mb-1 block text-lg">
              Username or Email
            </label>
            <input
              className="focus:shadow-outline w-full rounded  bg-inputFieldColor p-2 outline-none"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="mb-1 block text-xl">
              Password
            </label>
            <input
              className="focus:shadow-outline w-full rounded bg-inputFieldColor p-2 outline-none"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="rounded bg-black px-4 py-2 text-sm font-semibold uppercase text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
