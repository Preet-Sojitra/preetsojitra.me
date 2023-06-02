export default function handler(req, res) {
  if (req.method === "POST") {
    const { password } = req.body

    // console.log(req.body)
    // console.log(process.env.ADMIN_PASSWORD)

    if (password === process.env.ADMIN_PASSWORD) {
      res.status(200).json({ message: "Success" })
    } else {
      res.status(401).json({ message: "Incorrect password" })
    }
  } else {
    res.status(400).json({ message: "Only POST requests allowed" })
  }
}
