import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  if (req.method === "POST") {
    const { text } = req.body
    const newAboutPara = await prisma.about.create({
      data: {
        text,
      },
    })
    res.status(200).json({ newAboutPara })
  } else if (req.method === "GET") {
    const about = await prisma.about.findMany()
    res.status(200).json({ about })
  }
}
