import { name,add,reduce,sayName } from "./exportFrom.mjs";
import fs from 'fs';
fs.writeFileSync("rawi.txt","this is imported fs");
console.log(name);
console.log(add(1,2));
console.log(reduce(5,2));
console.log(sayName("rawi"));