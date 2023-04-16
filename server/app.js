const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: require('find-config')('config.env') })

const port = process.env.PORT || 5000
const databaseUrl = process.env.DATABASE_URL

const dbConnection = require("./db/connection")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ home: "home" })
})

app.listen(port, () => {
  // mongoose database connection
  dbConnection(databaseUrl)
  console.log(`Server is running on port ${port}`)
})