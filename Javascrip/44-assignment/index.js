
var axios = require('axios');
var fs = require('fs');
/*
fs.readFile(
  './data.json', 
  { encoding: 'utf8'}, 
  function(err, data) {
    console.log('Data loaded from disk', data);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(res) {
        console.log('Data downloaded from url', res.data);
      });
  }
);
*/
function readFile1(path){
  return new Promise(function(resolve, reject) {
  axios.get(path)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})
}
function readFile2(path){
  return new Promise(function(resolve, reject) {
    fs.readFile(path,  { encoding: 'utf8'},  function(err, data){
    console.log('Data loaded from disk', data);
  })
}
  )}
async function run(){
  var value1 = await readFile1('https://jsonplaceholder.typicode.com/todos/1');
  var value2 = await readFile2('./data.json');
}
run().then(function(values) {
	console.log(values);
})