//Sync vs Asynv(Synchoronous vs Asynchronous)

var fs = require('fs');
//SYNC
// console.log('Start');
// var song1 = fs.readFileSync('song1.txt', {encoding: 'utf8'});//doc file song1 
// console.log(song1);
// var song2 = fs.readFileSync('song2.txt', { encoding: 'utf8'});//doc file song 2
// console.log(song2);
// console.log('End');
//KET QUA
// Start
// Song1.txt
// song2.txt
// End


//ASYNC
console.log('Start');
fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, data){//function nay chinh la cacllback
	console.log(data); //data = song1.txt
});
console.log('End');
//KET QUA
// Start
// End
// song1.txt -- lam viec nay lau nhat nen no dc tra ve cuoi cung

// Sync
// |------------------|-------------|-----------|------->
// Make coffe      Coffe done      wear done   done
//                 wear clothers   make bed    

// Async
// |------------|-------------|-----------|------------->
// make coffe   wear clothers make bed done  

//Read / Write to FS gửi 1 lệnh đến hđh, trả về song, khá là lâu
//Network    
