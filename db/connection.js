const mongoose = require("mongoose")

const connectToMongoose = (url) => {
  // connect to mongoose with given url
  mongoose.connect(url)
    .then(() => {
      console.log("Mongoose connected")
    })
    .catch(err => {
      console.log("error happened during mongoose connection")
      console.log(err)
    })
}

module.exports = connectToMongoose