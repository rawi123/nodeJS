const fs=require('fs');

fs.writeFileSync("notes.txt","2nd"); 
fs.appendFileSync('notes.txt', 'data to append');