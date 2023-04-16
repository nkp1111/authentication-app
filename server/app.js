const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: require('find-config')('config.env') })
const dbConnection = require("./db/connection")
const userRoute = require("./routes/user")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./db/userSchema")

const port = process.env.PORT || 5000
const databaseUrl = process.env.DATABASE_URL


app.use(cors())
app.use(express.json())
app.use(session({
  secret: "AbadSecret",
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use("/user", userRoute)

app.get("/", (req, res) => {
  res.json({ home: "home" })
})

app.listen(port, () => {
  // mongoose database connection
  dbConnection(databaseUrl)
  console.log(`Server is running on port ${port}`)
})