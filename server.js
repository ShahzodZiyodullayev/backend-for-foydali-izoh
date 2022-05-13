const express = require('express')
const app = express()
const cors = require('cors')
const JSONData = require("./data.json")

app.use(cors())

app.get("/ok", (req, res) => {
  res.send(JSONData)
})

app.listen(2000, () => {
  console.log("Server is running on 2000 port...")
})