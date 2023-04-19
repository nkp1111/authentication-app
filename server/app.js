const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path');
require("dotenv").config({ path: require('find-config')('config.env') })
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const MongoStore = require("connect-mongo")
const cookieParser = require("cookie-parser")

const dbConnection = require("./db/connection")
const User = require("./db/userSchema")
const userRoute = require("./routes/user")
const profileRoute = require("./routes/profile")

const port = process.env.PORT || 5000
const databaseUrl = process.env.DATABASE_URL
let store = MongoStore.create({
  mongoUrl: databaseUrl,
  secret: "AbadSecret",
  touchAfter: 7 * 24 * 60 * 60
})

store.on("error", function (e) {
  console.log("session store error", e)
})

app.use(cookieParser())
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
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


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));


app.use("/user", userRoute)
app.use("/profile", profileRoute)

app.get("/", (req, res) => {
  res.json({ home: "home" })
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

app.listen(port, () => {
  // mongoose database connection
  dbConnection(databaseUrl)
  console.log(`Server is running on port ${port}`)
})