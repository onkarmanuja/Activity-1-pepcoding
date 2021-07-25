let fs = require("fs");


function fn (path) {
let content = fs.readdirSync(path);
for(let i=0; i<content.length;i++){
    console.log(content[i]);
}  
}

module.exports={
    call : fn 
}