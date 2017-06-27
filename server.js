'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('views engine', 'jade');

//to use handlebars as engine template discomment next line
//app.set('view engine', 'hbs'); 

app.get('/', function (req, res) {
  res.render('index', {server_list: ['a', 'b']});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);