const express = require('express');
const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.send(`2 + 2 = ${2 + 2}`)
})


app.listen(port, () => {
  console.log(`El servidor http://localhost:${port} esta listo`)
})