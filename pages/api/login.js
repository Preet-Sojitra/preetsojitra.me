// export default function handler(req, res) {
//   if (req.method === "GET") {
//     const { password } = req.body

//     console.log(req.body)
//     console.log(process.env.ADMIN_PASSWORD)

//     if (password === process.env.ADMIN_PASSWORD) {
//       res.status(200).json({ message: "Success" })
//     } else {
//       res.status(401).json({ message: "Incorrect password" })
//     }
//   }
// }

export default function handler(req, res) {
  res.status(200).json()
}
