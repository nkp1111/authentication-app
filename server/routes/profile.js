const express = require("express")
const router = express.Router()

const { cloudinary } = require("../cloudinary")
const User = require("../db/userSchema")

router.post("/edit", (req, res) => {
  const { image, name, email, password, bio, phone, id } = req.body
  console.log(name, phone, email, password, bio, id)

  cloudinary.uploader
    .upload(image, {
      folder: "Auth-app"
    })
    .then(async res => {

      const imageUrl = { url: res.url, secure: res.secure_url }
      const user = await User.findById(id)
      user.name = name
      user.image = imageUrl
      user.phone = phone
      user.bio = bio
      user.username = email
      try {
        const newUser = await User.register(user, password)
        res.cookie("sessionId", req.session.id)
        res.send({ success: "User updated", user: newUser })
      } catch (error) {
        res.send({ error: "Error Updating profile" })
      }
    })
})


router.get("/show", (req, res) => {
  console.log(req.user, req.cookies)
  res.send({ error: "Error while getting Info" })
})
module.exports = router
