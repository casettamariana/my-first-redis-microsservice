const express = require('express')
const routes = require('./routes')
const app = express()

const PORT = 3000

app.use(express.json())

app.use('/', routes)

app.listen(3000, () => console.log(`> server running at http://localhost:${PORT}`))
