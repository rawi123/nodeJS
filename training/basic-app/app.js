const fs=require("fs");
const notes=require("./functionality")

{
// const validator=require("validator");
// const chalk = require('chalk');
// console.log(chalk.bgGreen.bold(validator.isURL("www.google.com")));
}
//video-18 change data
{
// const buffer=fs.readFileSync("1-json.json");
// const bufferData=JSON.parse(buffer.toString());
// bufferData.name="Rawi";
// bufferData.planet="Earth";
// bufferData.age=20;
// console.log(bufferData);
// fs.writeFileSync("1-json.json",JSON.stringify(bufferData))
}

//add remove
// notes.addNote("ab","b");
// notes.removeNote("ab");
// notes.listNotes();
notes.readNote("a")