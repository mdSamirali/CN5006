
console.log("This is my First program")
console.log("My Monthly salary is 50000 pound")

const num1 = 4;
const num2 = 8; 
// Adding two numbers 
const sum = num1+num2;
//displaying sum of Two Numbers 
console.log(sum +" is the total of "+num1 +"and "+num2);

//Checking if a number is positive or Negative 
const prompt = require('prompt-sync')();
console.log("Starting");
const name = prompt('Enter your Name: ');
console.log(`Hello, ${name}`);

const number = parseInt(prompt("Enter a Number: "));

if(number>0){
    console.log("The number is positive");
}
else{
    console.log("The number is Negative");
}

// Code for basic arithmetic operations
const number1= parseInt(prompt("Enter 1st number: "));
const number2= parseInt(prompt("Enter 2nd number: "));

const sum2 = number1+number2;
const diff = number1-number2;
const mul = number1*number2;
const div = number1/number2;

console.log("The Sum of "+number1+" and "+number2+" is: "+ sum2);
console.log("The Difference of "+number1+" and "+number2+" is: "+ diff);
console.log("The Multiplication of "+number1+" and "+number2+" is: "+ mul);
console.log("The Division of "+number1+" and "+number2+" is: "+ div);

