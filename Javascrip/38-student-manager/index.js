//Requirements:
//A student management app that is able to:
//- Show current student list
//- Add new students

//CÓ thể lưu data = dạng csv hoặc json
// 1. Show all students	
// 2.Create a new student
//3. Save & Exit
//readline-sync là để nhập và, readFileSync để đọc file data.json
var readlineSync = require('readline-sync');// readline-sync là để nhập vào
var fs = require('fs');

var students = [];

function loadData(){
	var fileContent = fs.readFileSync('./data.json'); // đọc file data.json
	students = JSON.parse(fileContent);//trả về lưu vào students
}

function showMenu(){
	console.log('1. SHow all students');
	console.log('2. Create a new student');
	console.log('3. Save & Exit');
	//nhap option de vao swich case 
	var option = readlineSync.question('> ');
switch(option){
	case '1':
	showStudents();
	showMenu();//để sau khi chọn 1 xong đc chọn tiếp
	break;
	case '2':
	showCreateStudent();
	showMenu();//để sau khi chọn 1 xong đc chọn tiếp
	break;
	case '3':
	saveAndExit();
	break;
	default:
	console.log('Wrong option');
	showMenu();
	break;
}

}

function showCreateStudent(){
	var name = readlineSync.question('name: ');
	var age = readlineSync.question('age: ');
	var student = {
		name: name,
		age: parseInt(age) //parseInt chuyen string thanh so
	};
	students.push(student);//push student vua tao vao students
}

function showStudents(){
	for(var student of students){
		console.log(student.name, student.age);//chay vong lap show ra students
	}
}

function saveAndExit(){
	var content = JSON.stringify(students);//Lưu students vào content 
	fs.writeFileSync('./data.json', content, {encoding: 'utf8'});//viết content vào data.json
}

function main(){
	loadData();//load data tu file JSON ra
	showMenu();
}
main();