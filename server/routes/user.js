const express = require("express")
const router = express.Router()

const User = require("../db/userSchema")

router.post("/register", async (req, res) => {
  // add user in database
  const { email, password } = req.body
  try {
    if (email && password) {
      const newUser = User({ email, password })
      await newUser.save()
      res.send({ "success": "user added" })
    }
  } catch (error) {
    console.log(error)
    res.send({ "error": "User is not added" })
  }
})

router.post("/login", async (req, res) => {
  // check user in database
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })

    if (!user) {
      res.send({ "error": "User is not found" })
    } else if (user.password !== password) {
      res.send({ "error": "Email or Password is incorrect" })
    } else {
      res.send({ "success": "User found", user })
    }

  } catch (error) {
    console.log(error)
    res.send({ "error": "Error connecting to database" })
  }
})

module.exports = router