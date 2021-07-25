let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organiseObj = require("./command/organise");


inputArr = process.argv.slice(2);
let inputPath = inputArr[1];
if(inputPath == undefined){
    inputPath = process.cwd();
}
 if(inputArr[0] == "help"){
//   console.log(inputArr[1]);
    helpObj.call(inputPath);
}
else if(inputArr[0] == "tree"){
    
    // console.log(inputArr[1]);
    treeObj.call(inputPath);
}
else if(inputArr[0] == "organise"){
// console.log(inputArr[1]);

    organiseObj.call(inputPath);
}

