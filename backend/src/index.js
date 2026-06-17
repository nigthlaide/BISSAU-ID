const express = require('express')

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Bissau ID backend funcionando')
})

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`)
})
