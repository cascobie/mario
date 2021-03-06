const express = require('express')
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

// set static folder
app.use(express.static(path.join(__dirname, "public")))

// start server
server.listen(PORT, () => console.log(`server running on port ${PORT}`))