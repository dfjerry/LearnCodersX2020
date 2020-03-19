//node co

var fs = require('fs'); //module cua nodejs
var co = require('co');//modle co cua npm

function readFilePromise(path){ //path - đường dẫn vào file đó
	return new Promise(function(resolve, reject){// resolve: trả về dữ liệu nếu không có lỗi, reject: trả về reject nếu có lỗi
		fs.readFile(path, {encoding: 'utf8'}, function(err, data){
			if(err){// nếu có lỗi thì sẽ xuất hiện err --> trả về true và báo lỗi, còn ko có lỗi -->false --> chạy resolve
				reject(err);
			}else{
				resolve(data);
			}
		});
	});	
};
//Cach 1
co(function*(){ //google generator function
	var values = yield[
		readFilePromise('./song1.txt'),
		readFilePromise('./song3.txt'),
		readFilePromise('./song2.txt')
	]
	//tra ve giong promise
	return values;
}).then(function(values){
	console.log(values);
}).catch(function(error){
	console.log(error);
});
//Cach 2
//co.wrap ko tra ve promise, co.wrap tra ve 1 ham, ham do tra ve promise
var readFiles = co.wrap(function*(files){//files o day la ['song1.txt', 'song2.txt', 'song3.txt']
	var values = yield files.map(function(file){	//[String] -> [Promise] dung map + readFIlePromise
		return readFilePromise(file);
	});
	return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
.then(function(values){
	console.log(values);
});