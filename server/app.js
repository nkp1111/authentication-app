const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: require('find-config')('config.env') })
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const MongoStore = require("connect-mongo")

const dbConnection = require("./db/connection")
const User = require("./db/userSchema")
const userRoute = require("./routes/user")
const profileRoute = require("./routes/profile")

const port = process.env.PORT || 5000
const databaseUrl = process.env.DATABASE_URL
let store = MongoStore.create({
  mongoUrl: databaseUrl,
  secret: "AbadSecret",
  touchAfter: 24 * 60 * 60
})

store.on("error", function (e) {
  console.log("session store error", e)
})

app.use(cors())
app.use(express.json())
app.use(session({
  store: store,
  name: 'session',
  secret: "AbadSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use("/user", userRoute)
app.use("/profile", profileRoute)

app.get("/", (req, res) => {
  res.json({ home: "home" })
})

app.listen(port, () => {
  // mongoose database connection
  dbConnection(databaseUrl)
  console.log(`Server is running on port ${port}`)
})