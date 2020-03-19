//setTimeout
//clearTimeout
//setTimeout(fn, ms);//milliseconds   //dc goi boi 2 hay nhieu tham so

console.log('Start');
var done = function(){
	console.log('Finish');
}
var timeoutID = setTimeout(done , 1000);//nhieu truong hop lon hon 1000ms
console.log('Done');
//Chạy dòng 5 rồi set time 1000ms (1s) rồi chạy dòng 10 và cuối cùng là dòng 9

//clearTimeout(timeoutID); //giữa chừng không muốn done chạy nữa thì dùng clear
