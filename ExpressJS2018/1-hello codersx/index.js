//req query
var express = require('express');
var bodyParser = require('body-parser');

var userRouter = require('./routers/user.route');

var port = 3000;

var app = express();//tao 1 cai app moi tra ve 1 cai app

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
// app.get('/', function(req, res) {	
// 	res.send('<h1>codersx 2020</h1>');
// });//gửi 1 get request, get lay du lieu hien thi len trinh duyet
//GET POST PUT DELETE PATCH
//request la ng dung gui len, response tu sever tra ve

app.get('/', function(req, res) {	
	res.render('index', { //path khong acan .pug, tso thu 2 obj
		name: 'AAA'
	});
});

app.use('/users', userRouter);

app.listen(port, function(){
	console.log("Server listening on port" + port);
});