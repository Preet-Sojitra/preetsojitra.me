import Sidebar from "./Sidebar"
import Dashboard from "./DashboardLayout"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
})

export default function AdminLayout({ children }) {
  return (
    <>
      <div className={`${poppins.variable} grid grid-cols-1-4`}>
        <Sidebar />

        <Dashboard>{children}</Dashboard>
      </div>
    </>
  )
}
