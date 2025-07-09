let express = require("express")
let bodyParser = require("body-parser")
require("dotenv").config()
let router = require("../src/routers/router.js")
let db = require("../db.js")

let app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use("/",router)

module.exports = app