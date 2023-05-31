import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  if (req.method === "POST") {
    const { name, timing } = req.body
    const newTag = await prisma.tags.create({
      data: {
        name,
        timing,
      },
    })
    res.status(200).json({ newTag })
  } else {
    const allTags = await prisma.tags.findMany()
    res.status(200).json({ allTags })
  }
}
