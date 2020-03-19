//scope - pham vi hoat dong 1 bien
//1. Global scope -- TW
//2. Local scope -- dia phuong
//when a function is executed --> create a new scope

var a = 1;//nam trong global scope

function random() {
	var b = Math.random();
	console.log(b);
	console.log(a);
	a = 5;//bien a la bien global nen hoat dong dc o ca local

}
random();
function doSomething(){
	a = 10;
}
doSomething();
console.log(a);