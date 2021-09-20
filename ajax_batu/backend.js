const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.text());
const port = 3000
app.use(express.static('public'))
app.post('/calc', (req, res) => {
  console.log(req.body);
  res.send((parseInt(req.body) * 2854) + " MNT");
})

app.listen(port, () => {
})