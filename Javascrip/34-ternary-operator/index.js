//ternary operator
//syntax--cu phap
//condition ? expression when true: expression when false
function tossCoin(){
	var value = Math.random();
//đây là dùng ternary operator
	var result = (value < 0.5) ? 'Sấp' : 'Ngửa';
//	đây là dùng if else
if(value<0.5){
	result = 'Sấp';
}else{
	result = 'Ngửa';
}
console.log(result);
}
tossCoin();