//node build-in modules
var fs = require('fs'); //ko can ./ vi ko cung` 1 folder, no se tu tim file fs

var text = fs.readFileSync('./song.txt', {encoding: 'utf8'});//doc file song.txt tra ve kieu unicode
console.log(text);
fs.writeFileSync('./song-2.txt', 'I am Coders.Tokyo');//tao ra 1 file song-2.txt va trong do co chua 'I am Coders.Tokyo'

var text2 = fs.readFileSync('./song-2.txt', {encoding: 'utf8'});
console.log(text2);