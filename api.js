const express = require("express")
const path = require("path")
const cors = require("cors")

const api = express()

api.use(cors({
  origin: "http://localhost:5000"
}))

api.use(express.static(path.join(__dirname, "public")))

api.use("/", express.static("index.html"))

module.exports = api