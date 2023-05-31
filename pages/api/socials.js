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
  } else {
    const allSocials = await prisma.socials.findMany()
    res.status(200).json({ allSocials })
  }
}
