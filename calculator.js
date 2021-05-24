const prompt = require("prompt-sync")(); // Please don't touch me :)
/*
// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);
*/
const number1 = prompt(" enter first number: ");
const number2 = prompt(" enter second number: ");
const operation = prompt("operations are (+,-,*,/) choose one:");


if(operation === "+") {console.log(`${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`);}

else if(operation === "-") {console.log(`${number1} - ${number2} = ${parseInt(number1) - parseInt(number2)}`);}

else if(operation === "*") {console.log(`${number1} * ${number2} = ${parseInt(number1) * parseInt(number2)}`);}

else if(operation === "/") {console.log(`${number1} / ${number2} = ${parseInt(number1) / parseInt(number2)}`);}

else { console.log("wrong operation chosen");}

