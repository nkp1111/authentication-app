const express = require("express")
const router = express.Router()

const { cloudinary } = require("../cloudinary")
const User = require("../db/userSchema")

router.post("/edit", async (req, res) => {
  const { image, name, email, password, bio, phone, _id } = req.body

  const imgResult = await cloudinary.uploader
    .upload(image, {
      folder: "Auth-app"
    })

  let imageUrl = { url: imgResult.url, secure: imgResult.secure_url }

  const user = await User.findById(_id)

  user.name = name
  user.image = imageUrl
  user.phone = phone
  user.bio = bio
  user.username = email
  try {
    await user.setPassword(password)
    const newUser = await user.save()
    res.cookie("sessionId", req.session.id)
    res.send({ "success": "User updated", user: newUser })
    return
  } catch (error) {
    res.send({ "error": "Error Updating profile" })
  }
})

module.exports = router
