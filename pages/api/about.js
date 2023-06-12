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
  }

  if (req.method === "GET") {
    const about = await prisma.about.findMany()
    res.status(200).json({ about })
  }

  if (req.method === "PATCH") {
    const { id, text } = req.body
    const updatedAboutPara = await prisma.about.update({
      where: {
        id,
      },
      data: {
        text,
      },
    })
    res.status(200).json({ msg: "About Updated", updatedAboutPara })
  }

  if (req.method === "DELETE") {
    const { id } = req.query
    const deletedAboutPara = await prisma.about.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json({ msg: "About Deleted", deletedAboutPara })
  }
}
