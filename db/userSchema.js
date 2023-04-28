const mongoose = require("mongoose")
// const uniqueValidator = require("mongoose-unique-validator")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = new mongoose.Schema({
  // passportLocalMongoose plugin comes with username and password
  name: {
    type: String
  },
  image: {
    url: { type: String },
    secure: { type: String }
  },
  bio: {
    type: String
  },
  phone: {
    type: String,
  }
})

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", UserSchema)

module.exports = User