//if .. else

//syntax: -- cu phap

//if(condition){       (dieu kien)
	//statement when true;
//}else{
	//statement when false
//}
function tossCoin(){ //-toss: quăng
	var value = Math.random;
	if(value < 0.5){
		console.log('Mặt sấp');
	}else{
		console.log('Mặt ngửa');
	}
}
tossCoin();
