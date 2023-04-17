const express = require("express")
const router = express.Router()
// multer for handling file upload
const multer = require("multer")

const { storage } = require("../cloudinary")
const upload = multer({ storage })


router.post("/edit", (req, res) => {
  console.log("edit")
  console.log(req.body)
  res.send({ "success": "Edited info" })
})

module.exports = router
