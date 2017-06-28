'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
const bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

bookRouter.route('/')
		.get(function(req, res){
			res.send('/Books')
		});

bookRouter.route('/single')
		.get(function(req, res){
			res.send('/Books/Single')
		});

app.use('/Books', bookRouter);
//to use handlebars as engine template discomment next line
//app.set('view engine', 'hbs'); 

app.get('/', function (req, res) {
  res.render('index', {server_list: ['a', 'b']});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);