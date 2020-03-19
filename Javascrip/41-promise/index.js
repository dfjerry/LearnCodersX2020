//Promise
//Trong JS có 1 object Promise
// vd: var promise = new Promise();
// var fs = require('promise-fs'); //module cua npm

// function onDone(song) {//on 1 cai gi day la xong 1 cai gi day
// 	console.log(song);
// }

// function onError(error){//in ra loi neu co loi
// 	console.log(error);
// }

// function readFile(path){
// 	return fs.readFile(path, {encoding: 'utf8'});
// }

// readFile('song1.txt')//doc file song1
// .then(onDone)//console.log song 1
// .then(function(){// doc file song 2
// 	return readFile('song2.txt');
// })
// .then(onDone) //console.log song 2
// .catch(onError);

//Khởi tạo Promise -- tao module giong o tren
var fs = require('fs'); //module cua nodejs

function readFilePromise(path){ //path - đường dẫn vào file đó
	return new Promise(function(resolve, reject){// resolve: trả về dữ liệu nếu không có lỗi, reject: trả về reject nếu có lỗi
		fs.readFile(path, {encoding: 'utf8'}, function(err, data){
			if(err){// nếu có lỗi thì sẽ xuất hiện err --> trả về true và báo lỗi, còn ko có lỗi -->false --> chạy resolve
				reject(err);//co loi truyen err vao reject
			}else{
				resolve(data);//ko co loi truyen data vao resolve
			}
		});
	});	
}

readFilePromise('song1.txt')
.then(function(song1){
	console.log(song1);
})
.catch(function(error){
	console.log(error);
});

