const mongoose = require("mongoose")
// const uniqueValidator = require("mongoose-unique-validator")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = new mongoose.Schema({})

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", UserSchema)

module.exports = User