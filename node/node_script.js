var file_name_path = process.argv[2]
var fs = require('fs');
var file = fs.readFileSync(file_name_path, 'utf8')
var obj = JSON.parse(file);

console.log(obj.param1)
