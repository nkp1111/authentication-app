const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: require('find-config')('config.env') })

console.log(process.env.PORT, process.env.DATABASE_URL)

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("home")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})