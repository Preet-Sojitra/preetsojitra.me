import { PrismaClient } from "@prisma/client"
import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

const upload = multer({ dest: "uploads/" })

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const config = {
  api: {
    bodyParser: false, // Bruh not setting this to false will make you lose your mind. I lost mine. This cost me 2 hours of my life. :(
  },
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.log("Error uploading file: ", err)
        return res.status(500).json({ error: err.message })
      }

      // Access the file via req.file
      // console.log(req.file)
      // console.log(req.body)
      const { path, mimetype } = req.file

      try {
        // Upload image to cloudinary
        const uploadedImage = await cloudinary.uploader.upload(path, {
          resource_type: "auto",
          folder: "portfolio/projects",
        })

        // console.log(uploadedImage)
        const { secure_url } = uploadedImage

        // Store project details in database
        const { name, liveLink, codeLink, tags } = req.body

        const prisma = new PrismaClient()
        const project = await prisma.projects.create({
          data: {
            name: name || "",
            liveLink: liveLink || "",
            codeLink: codeLink || "",
            tags: tags || [],
            imageSrc: secure_url,
          },
        })

        // Delete the file from the uploads folder
        fs.unlinkSync(path, (err) => {
          if (err) {
            console.log("Error deleting file: ", err)
          }
        })

        res.status(200).json({
          message: "Image Uploaded and details stored successfully",
          data: project,
        })
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    })
  }

  if (req.method === "GET") {
    const prisma = new PrismaClient()
    const projects = await prisma.projects.findMany()

    res.status(200).json({ allProjects: projects })
  }

  if (req.method === "DELETE") {
    const { id } = req.query

    const prisma = new PrismaClient()
    const deletedProject = await prisma.projects.delete({
      where: {
        id: Number(id),
      },
    })

    res.status(200).json({ message: "Project Deleted", deletedProject })
  }

  if (req.method === "PATCH") {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.log("Error uploading file: ", err)
        return res.status(500).json({ error: err.message })
      }

      // Access the file via req.file
      // console.log(req.file)
      // console.log(req.body)

      try {
        let imageSrc

        if (req?.file) {
          const { path, mimetype } = req.file

          // Upload image to cloudinary
          const uploadedImage = await cloudinary.uploader.upload(path, {
            resource_type: "auto",
            folder: "portfolio/projects",
          })

          // console.log(uploadedImage)
          const { secure_url } = uploadedImage
          imageSrc = secure_url

          // Delete the file from the uploads folder
          fs.unlinkSync(path, (err) => {
            if (err) {
              console.log("Error deleting file: ", err)
            }
          })
        } else {
          // Use already hosted image
          imageSrc = req.body.imageSrc
        }

        // Store project details in database
        const { id, name, liveLink, codeLink, tags } = req.body

        const prisma = new PrismaClient()
        const project = await prisma.projects.update({
          where: {
            id: Number(id),
          },
          data: {
            name: name,
            liveLink: liveLink,
            codeLink: codeLink,
            tags: tags,
            imageLink: imageSrc,
          },
        })

        res.status(200).json({
          message: "Image Uploaded and details stored successfully",
          data: project,
        })
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    })
  }
}
