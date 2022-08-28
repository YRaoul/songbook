// environment
require("dotenv").config()
require("./environment")
console.log("! Running in " + process.env.NODE_ENV)

// dependancies
const createServer = require("./createServer")

createServer().start()
