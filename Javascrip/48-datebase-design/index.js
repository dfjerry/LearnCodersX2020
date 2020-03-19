//database design
var classes = [
	{
	 id: 0,
	 name: '1A',
	 teacher: 0
	},
	{
	id: 1,
	name: '2A', 
	 teacher: 1
	},
	{
	id: 2,
	name: '3A',
	 teacher: 2
	 },
	{
	id: 3,
	name: '4A',
	 teacher: 3
	},
	{
	id: 4,
	name: '5A',
	teacher: 4
	}
];

var teachers = [
	{
	 	name: 'Quynh',
	 	age: 25
	 },
	 {
	 	name: 'Chinh',
	 	age: 26
	 },
	{
	 	name: 'Nguyet',
	 	age: 27
	 },
	 {
	 	name: 'Huong',
	 	age: 28
	 },
	 {
		name: 'Hien teuk',
		age: 29
	}
]
var students = [
	{id: 0, name: 'Minh', height: 120, class: 0},
	{id: 0, name: 'Minh', height: 120, class: 0},
	{id: 0, name: 'Minh', height: 120, class: 0},
	{id: 0, name: 'Tu', height: 120, class: 1},
]
// var class1A = classes.find(function(x) {
// 	return x.name === '1A';
// });
// console.log(class1A.student.lenght);

function getStudentsInClass(className) {
	var classObject = classes.find(function(x) {
		return x.name === className;//tra ve x giong className nhap vao
	});//tra ve dc object giong voi ten lop minh tim

	var getStudentsInClass = students.filter(function(student) {
		return student.class === classObject.id;
	});
	return getStudentsInClass;
}
var getStudentsInClass = getStudentsInClass('2A');
console.log(getStudentsInClass);

//Design database for a e-magazine website(trang bao dien tu)

//Design database for a e-commerce website(trang mua ban online)

