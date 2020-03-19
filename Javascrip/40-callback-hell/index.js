//callback hell
var fs = require('fs'); //Dung Async
//module fs
//Sync
// var song1 = fs.readFileSync('song1.txt', {encoding: 'utf8'});
// var song2 = fs.readFileSync('song2.txt', {encoding: 'utf8'});
// var song3 = fs.readFileSync('song3.txt', {encoding: 'utf8'});
// console.log(song1, song2, song3);

//Async
fs.readFile('./song1.txt', {encoding: 'utf8'}, function(err1, song1){
	console.log(song1);
	fs.readFile('./song2.txt', {encoding: 'utf8'}, function(err2, song2){
		console.log(song2);
		fs.readFile('./song3.txt', {encoding: 'utf8'}, function(err3, song3){
			console.log(song3);
		});
	});
});
//Như trên gọi là callback hell, tức là các callback lồng nhau quá nhiều (nested = long nhau)