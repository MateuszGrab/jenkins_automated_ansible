var file_name_path = process.argv[2]
//console.log(file_name_path);
var fs = require('fs');
var file = fs.readFileSync(file_name_path, 'utf8')
//console.log(file);
var obj = JSON.parse(file);

console.log(obj.PARAM2)
