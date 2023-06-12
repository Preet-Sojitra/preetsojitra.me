import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  if (req.method === "POST") {
    const { name, link } = req.body
    const newSocial = await prisma.socials.create({
      data: {
        name,
        link,
      },
    })
    res.status(200).json({ newSocial })
  }
  if (req.method === "GET") {
    const allSocials = await prisma.socials.findMany()
    res.status(200).json({ allSocials })
  }
  if (req.method === "PATCH") {
    const { id, name, link } = req.body
    const updatedSocial = await prisma.socials.update({
      where: {
        id,
      },
      data: {
        name,
        link,
      },
    })
    res.status(200).json({ msg: "Social Updated", updatedSocial })
  }

  if (req.method === "DELETE") {
    const { id } = req.query
    const deletedSocial = await prisma.socials.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json({ msg: "Social Deleted", deletedSocial })
  }
}
