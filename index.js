var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var newMessage = "Hey " + chalk.blue("There!!!");
var nextMessage = chalk.green("This sentence is green!");
var fourthMessage = chalk.blue.underline.bold("Another sentence");

console.log(message);
console.log(newMessage);
console.log(nextMessage);
console.log(fourthMessage);