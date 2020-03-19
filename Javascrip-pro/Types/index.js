var someKey = 'foo';
var obj = {
  [someKey]: 'some value'
};
console.log(obj);
var someKey = 'foo';
var anotherObj = {
  someKey: 'some value'
};
console.log(anotherObj);
var email = 'test@example.com';
var user = {
	email: email,
  password: '123456'
};
console.log(user);
var fruits = {
  0: 'Apple',
  1: 'Orange',
	2: 'Avocado',
	length: 3
};
console.log(fruits[2]);
console.log(fruits.length);
var game = [
	[0, 1, 0],
	[1, 0, 0],
	[1, 0, 1]
];
console.log(game[2][2]);
var sayHi = 'Hi, ';
console.log(sayHi + 'CodersX');
var result = 0;
function sum(a, b) {
      var result = a + b;
      return result;
    }
    sum(2, 3);
    console.log(result); // undefined


    function inverse(number) {
  number = -number; // number bị thay đổi
  return number;
}
var a = 5;
var b = inverse(a);
console.log(a, b);

function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}
var obj = {};
var newObj = addProperty(obj, 'name', 'David');
console.log(obj, newObj);