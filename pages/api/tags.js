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
  } else if (req.method === "GET") {
    const allTags = await prisma.tags.findMany()
    res.status(200).json({ allTags })
  } else if (req.method === "PATCH") {
    const { id, name, timing } = req.body
    const updatedTag = await prisma.tags.update({
      where: {
        id,
      },
      data: {
        name,
        timing,
      },
    })
    res.status(200).json({ msg: "Tag updated", updatedTag })
  }

  // Delete
  if (req.method === "DELETE") {
    const { id } = req.query
    const deletedTag = await prisma.tags.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json({ msg: "Tag deleted", deletedTag })
  }
}
