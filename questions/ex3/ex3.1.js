import { name,add,reduce,sayName } from "./exportFrom.mjs";
import fs from 'fs';
fs.writeFileSync("rawi.txt","this is imported fs");
//cannot import env files
console.log(name);
console.log(add(1,2));
console.log(reduce(5,2));
console.log(sayName("rawi"));
// import vs require:
// require can be called anywhere import in the beggining

// require only work with js

// ES modules can be loaded dynamically via the import() function unlike require().
// require not able to load partially while import can

// import -export
// require -module.exports