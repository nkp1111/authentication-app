const express = require("express")
const router = express.Router()

const { cloudinary } = require("../cloudinary")

router.post("/edit", (req, res) => {
  const { image, name, email, password, bio, phone, id } = req.body
  console.log(name, phone, email, password, bio, id)

  cloudinary.uploader
    .upload(image, {
      folder: "Auth-app"
    })
    .then(res => {
      console.log(res)
      const imageUrl = { url: res.url, secure: res.secure_url }
    })

  res.send({ "success": "Edited info" })
})

module.exports = router
