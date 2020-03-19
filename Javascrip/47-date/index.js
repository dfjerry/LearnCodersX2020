//Date
//moment.js 
// var moment = require('moment');

// // var now = new Date(); //obj ngay thang
// // var myBirthday = new Date(1990, 4, 17); //17/5/1990, thang n-1

// // //number of milliseconds from 1-1-1970( +0) VN: +7, Nhat: +9
// // console.log(now.getTime());
// // console.log(myBirthday.getTime());

var now = moment('2020-01-11 00:00');
console.log(now.formNow());//in ra khoảng cách thời gian hiện tại đến bên trong moment
console.log(now.format('YYYY/MM/DD'));	//in ra năm tháng ngày của giá trị bên trong moment
var date = new Date('2019/10/28');
 console.log(date);
