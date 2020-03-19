//if ... else if ... else
//Syntax: cu phap;
//if(condition: dieukien1){
	//statement1; (tuyen bo' lam gi do)
//}else if(condition 2){
	//statement2;
//}else{
	//statement3;
//}

//Example: calculate bus ticket fee
// - if age < 15, discount 20%
//- if age > 60, discount 10%
//- otherwise 10000/ticket --neu khong thi 10000/ve'
function getTicketFee(){
	var basePrice = 10000;
	if(person.age<15){
		return basePrice*0.8;
	}else if(person.age > 60){
		return basePrice*0.9;
	}else{
		return basePrice;
	}
}
var person = {
	age: 65,
};
var fee = getTicketFee(person);
console.log(fee);

