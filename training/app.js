const validator=require("validator");
const chalk = require('chalk');
console.log(chalk.bgGreen.bold(validator.isURL("www.google.com")));
