const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../db/userSchema")

router.post("/register", async (req, res) => {
  // add user in database
  const { username, password } = req.body
  try {
    if (username && password) {
      const newUser = User({ username })
      await User.register(newUser, password)
      res.send({ "success": "user added" })
    }
  } catch (error) {
    console.log(error)
    res.send({ "error": "User is not added" })
  }
})

router.post("/login",
  passport.authenticate("local"),
  (req, res) => {
    // check user in database
    res.send({ "success": "Successfully logged in" })
  })

module.exports = router