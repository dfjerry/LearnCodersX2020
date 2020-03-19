/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
// 1. Show all contact
// 2. Add contact
// 3. Edit contact
// 4. Find contact
// 5. Delete contact
// 6. Save and Exit
var readlineSync = require('readline-sync'); //modole nhập vào dữ liệu
var fs = require('fs'); //require module fs

var contacts = []; // tạo 1 danh bạ contacts

function loadData(){
	var fileContent = fs.readFileSync('./data.json'); //load file data.json
	contacts = JSON.parse(fileContent); //Chuyển fileContent từ dạng string JSON về dạng đối tượng và mảng gán vào mảng contacts	
}

function showContact(){
	for(var i = 0;i < contacts.length; i++){
		console.log('id: ' + i +', name: ' + contacts[i].name + ', Phone Number: ' + contacts[i].phoneNumber);
	}
	showMenu();
}

function showCreateContact(){
	var name = readlineSync.question('name: ');
	var phoneNumber = readlineSync.question('phoneNumber: ');
	var contact = {
		name: name,
		phoneNumber: parseInt(phoneNumber) //Chuyển dạng string thành dạng int (số)
	}
	contacts.push(contact);
	showMenu();
}

function showEditContact(){
	showContact();
	var index = readlineSync.question('Do you want edit contact: ');
	contacts.splice(index, 1, edit());//sua contact bang splice, tu vi tri index nhap vao, sua 1
	showMenu();
}
function edit(){
	var newName = readlineSync.question('Do you want edit name: ');
	var newPhoneNumber = readlineSync.question('Do you want phone number: ');
	var newContact = {
		Name: newName,
		phoneNumber: newPhoneNumber
	}
	console.log(newContact);
	return newContact;//tra ve newContact cho showEdit
	showMenu();
}
function deleteContact(){
	showContact();
	var index = readlineSync.question('Do you want delete contact: ');
	contacts.splice(index, 1);
	showMenu();
}

function findContact(){
	var find = readlineSync.question('Do you want find: ');
	if(Number(find)){//tai sao phai them Number(find)
		contacts = contacts.filter(function(contact) {
			return contact.phoneNumber.indexOf(find) > -1;//tim theo sdt
		})
		for(contact of contacts) {
      		console.log(contact.name, contact.phoneNumber);
     	}
	}else{
		contacts = contacts.filter(function(contact) {
			return contact.name.toLowerCase().indexOf(find.toLowerCase()) > -1;
		})
		for(contact of contacts) {
      		console.log(contact.name, contact.phoneNumber);
     	}
	}
showMenu();
}

function saveAndExit(){
	var content = JSON.stringify(contacts); //tạo 1 contact  = contacts kiểu string JSON
	fs.writeFileSync('./data.json', content, {encoding: 'utf8'});//Viết content vào file data.json theo kiểu utf8(unicode)
}

function showMenu(){
	console.log('Telephone Directory ');
	console.log('1. Show all contact');
	console.log('2. Add contact');
	console.log('3. Edit contact');
	console.log('4. Find contact');
	console.log('5. Delete contact');
	console.log('6. Save & Exit!');
	console.log('---------------------');
	var option = readlineSync.question('Choose your option: ');//Ng dùng chọn option
	switch(option){
		case '1':
		showContact();
		break;
		case '2':
		showCreateContact();
		break;
		case '3':
		showEditContact();
		break;
		case '4':
		findContact();
		break;
		case '5':
		deleteContact();
		break;
		case '6':
		saveAndExit();
		break;
		default:
		console.log('Wrong to pick, pick again!');
		showMenu();
		break;
	}
}

function main(){
	loadData();// việc đầu tiên là load Data.
	showMenu();//show menu để người dùng có thể thao tác
}
main();
