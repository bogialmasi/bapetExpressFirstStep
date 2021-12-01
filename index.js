const express = require('express')

const app = express()

const port = 4444
 
app.get('/', function (req, res) {
  res.send('Árvíztűrő tükörfúrógép')
})

app.post('/colors', (req, res) => {

})
 
app.listen(port)