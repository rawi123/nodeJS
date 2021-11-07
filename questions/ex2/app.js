const fs=require("fs")
// fs.writeFileSync("file.txt","first ex")
// fs.copyFileSync('file.txt', 'fileCopy.txt');
// fs.renameSync("fileCopy.txt","123.txt");
// const fileNames=fs.readdirSync("../questions");
// console.log(fileNames);
const read=fs.readFileSync("../questions/123.txt")
console.log(read);