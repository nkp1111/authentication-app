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
      const user = await User.register(newUser, password)
      req.login(user, err => {
        if (err) {
          res.send({ "error": "Error during login" })
        }
      })
      res.cookie("sessionId", req.session.id)
      res.send({ "success": "User added", user })
    }
  } catch (error) {
    res.send({ "error": "User is not added" })
  }
})

router.post("/login",
  passport.authenticate("local"),
  (req, res) => {
    // login user in database
    req.login(req.user, err => {
      if (err) {
        res.send({ "error": "Error during login" })
      }
    })
    res.cookie("sessionId", req.session.id)
    res.send({ "success": "Successfully logged in", user: req.user })
  })

router.post("/logout", (req, res) => {
  // logout user in database
  if (req.isAuthenticated()) {
    req.logout(function (err) {
      if (err) {
        res.send({ "error": "Something went wrong!" })
      } else {
        res.send({ "success": "Successfully logged out!" })
      }
    })
  } else {
    res.send({ "error": "Please log In..." })
  }
})

module.exports = router