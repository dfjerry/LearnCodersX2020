//JSON object
//1. stringify - Convert an object to a JSONG string --Chuyển đổi 1 obj trong js thành 1 JSON string
//2. parse - Convert a JSON string to an object-- Chuyển đổi 1 JSON string thành 1 obj

/*
var myDog = {
	name: 'Milu',
	age: 1,
	dead: false
}
console.log(myDog);
var myDogString = JSON.stringify(myDog);
console.log(myDogString);
console.log(typeof myDogString); // string
var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat.name);//return Tom, true vi day la 1 obj sau khi da parse
// console.log(myCatString.name);//ko .name dc vi day la chuoi ko phai obj
*/

//Exercise
//1. Show all students
//2.Create a new student
//3. Save and exit
//Lưu ở file text ./data.json, gợi ý sử dụng fs.readFileSync, JSON.parse
var fs = require('fs');

var student = function(name, age, lop){
	this.name = name;
	this.age = age;
	this.lop = lop;
}
var students = [];
fs.writeFileSync('./student.json', students);

while(choose){
	switch(choose){
		case 1:
		console.log("Show all students");
		showAll();
		case 2:
		console.log("Create a new students");
		createStudent();
		case 3:
		console.log("Save and exit");
		saveAndExit();
	}
}



