//async-await(pban node >=7.6)

var fs = require('fs'); //module cua nodejs

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


async function run(){//async tra ve 1 promise
	var song1 = await readFilePromise('./song1.txt');//await phai co 1 promise nao do
	var song2 = await readFilePromise('./song2.txt');
	return [song1, song2];	
}
run().then(function(values){
	console.log(values);
})