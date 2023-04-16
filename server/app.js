const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: require('find-config')('config.env') })
const dbConnection = require("./db/connection")
const userRoute = require("./routes/user")

const port = process.env.PORT || 5000
const databaseUrl = process.env.DATABASE_URL


app.use(cors())
app.use(express.json())

app.use("/user", userRoute)

app.get("/", (req, res) => {
  res.json({ home: "home" })
})

app.listen(port, () => {
  // mongoose database connection
  dbConnection(databaseUrl)
  console.log(`Server is running on port ${port}`)
})