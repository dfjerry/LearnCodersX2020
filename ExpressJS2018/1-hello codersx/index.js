var express = require('express');
var app = express();//tao 1 cai app moi tra ve 1 cai app
var port = 3000;

app.get('/', function(request, response) {	
	response.send('<h1>codersx 2020</h1>');
});//gửi 1 get request, get lay du lieu hien thi len trinh duyet
//GET POST PUT DELETE PATCH
//request la ng dung gui len, response tu sever tra ve
app.listen(port, function(){
	console.log("Server listening on port" + port);
});