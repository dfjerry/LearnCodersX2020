//setInterval
//clearInterval
//setInterval(fn,ms); cứ mỗi giây thực hiện hàm fn 1 lần
// var i=0;
// var intervalID = setInterval(function(){
// 	++i;
// 	console.log(i);
// 	if(i===5){
// 		clearInterval(intervalID);
// 	}
// }, 1000);

//Write a function count for 1 to 10
//return a promise

async function countFrom(a, b){
	var count = await setInterval(function(){
		return a;
		a++;
		if(a === b){
			clearInterval(count);
		}
	}, 1000);
}

countFrom(1, 10).then(function(value){
	console.log(value);
});