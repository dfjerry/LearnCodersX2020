//npm - node package manager
//sau khi cai xong chi viec require
//camelCase
var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
//Hoi tieng me de ban la gi
var languages =  [];
var language = readlineSync.question('What is your mother language?');

languages.push(language);

console.log(languages);
//my pet
var pet = {};
var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Pet gender: (Male/Female)');
var Weight = readlineSync.question('Weight');
pet.name = name;
pet.gender = gender;
pet.Weight = parseInt(Weight);
//paserInt đổi dữ liệu nhập thành kiểu số
console.log(pet);
