
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const buffer = require('@turf/buffer')

app.listen(process.env.PORT || 3000);

app.use(express.static('public'));
app.use(bodyParser.json());



app.post('/bufferpoint', function(req, res){
  console.log(req.body);
  point = req.body;
  var buffered = buffer(point, +point.properties.bufferSize, point.properties.bufferUnit);
  res.json(buffered);
});