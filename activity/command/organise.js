let fs = require("fs");
let path =require("path");


let types = {
    media: ["mp4", "mkv","flv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function fn (inputPath) {
    
   
    
    let content = fs.readdirSync(inputPath);
    let folderPath = path.join(inputPath,"organize");
    
    let organisePresent = fs.existsSync(folderPath);
    if(organisePresent) {
        console.log("directory is already created");
        return;
    }
    fs.mkdirSync(folderPath);
    let mediaPath = path.join(folderPath,"media");
    fs.mkdirSync(mediaPath);

    let archivespath = path.join(folderPath,"archives");
    fs.mkdirSync(archivespath);

    let documentsPath = path.join(folderPath,"documents");
    fs.mkdirSync(documentsPath);

    let appPath = path.join(folderPath,"app");
    fs.mkdirSync(appPath);

    let otherPath = path.join(folderPath,"other");
    fs.mkdirSync(otherPath);
  

   for(let i=0;i<content.length;i++){
       let filetype = path.extname(content[i]);
       let fileTypeSplit = filetype.split(".")[1];

       let folderName = "Other";

       for(key in types){
        // console.log(types1[key].length);
        for(let j= 0 ; j < types[key].length ; j++){
           if(types[key][j]==fileTypeSplit){
                 folderName =key;
                 break;

           }
        }
    }
    let sourcePath = path.join(inputPath,content[i]);

    let destinationPath = path.join(folderPath,folderName,content[i]);
    fs.copyFileSync(sourcePath,destinationPath);
   }
}


module.exports={
    call : fn 
}