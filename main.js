//variables
//var:
// var name = "John";
// console.log(name); 
// //let:
// if (true) {
//   let x = 10;
//   console.log(x);
// }
// console.log(x); 

// //const:
// const birthYear = 1995;
//  //birthYear = 1996; 
// console.log(birthYear); 

// Arithmetic Operators
let a = 10;
let b = 5;

// Addition
let add = a + b; 
console.log("add:", add);

// Subtraction
let subtract = a - b; 
console.log("subtract:", subtract);

// Multiplication
let Product = a * b; 
console.log("Product:", Product);

// Division
let divide = a / b; 
console.log("divide:", divide);

// Modulus
let Modulus = a % b; 
console.log("Modulus:", Modulus);

// Exponentiation
let Power = a ** b; 
console.log("Power:", Power);

//increment
var s = 5;

// Pre increment
var preincrement = ++s; 
console.log("value of preincrement:", preincrement);

// Post increment
var l = 8;
var postincrement = l++; 
console.log("value of Postincrement:", postincrement); 
console.log("New value of l:", l);


//decrement
var s = 10;

// Pre decrement
var predecrement = --s; 
console.log("value of Predecrement:", predecrement);

// Post decrement
var l = 6;
var postdecrement = l--; 
console.log("value of Postdecrement:", postdecrement); 
console.log("New value of l:", l);

//Assignment operators
x = 10;
console.log("x =", x); 

// Addition Assignment
x += 5; x=x+5
console.log("x += 5:", x); 

// Subtraction Assignment
x -= 3;
console.log("x -= 3:", x);

//Multiplication Assignment
x *=2
console.log("x *= 2:", x);

// Division Assignment
x /= 4;
console.log("x /= 4:", x); 

// Remainder Assignment
x %= 2; 
console.log("x %= 2:", x); 

// Exponentiation Assignment
x = 2; 
x **= 3; 
console.log("x **= 3:", x); 

//comparison operators:
//  (==)
console.log(5 == '5'); 

// (!=)
console.log(5 != '5');

// (===)
console.log(5 === '5'); 

// (!==)
console.log(5 !== '5'); 

// (>)
console.log(7 > 5); 

//  (>=)
console.log(5 >= 5); 

// (<)
console.log(3 < 5); 

// (<=)
console.log(5 <= 5); 


//logical operator:

let d = 5, f = 10;

// AND (&&)
console.log(d > 10 && f > 0); 

// OR (||)
console.log(d > 0 || f < 0); 

// NOT (!) 
console.log(!(d > f)); 

//spread operator:
const arr1 = [4, 5, 6];
const arr2 = [7, 8];
const arr3 = [...arr1, ...arr2]; 
console.log("arr3:",arr3); 


//concat method:
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
const result = arr4.concat(arr5);
console.log(result); 


//Data types

let number = 42;                     
console.log("Number:", number);     

let text = "Hello";                  
console.log("String:", text);       

let star = true;                   
console.log("Boolean:", star);     

let value;                 
console.log("Undefined:", value); 

let values = null;             
console.log("Null:", values);    

let word = Symbol('id');        
console.log("Symbol:", word);    

let Number = 9007089999997655n;   
console.log("BigInt:", Number);    



//if statement
var age = 18;

if (age >= 18) {
    console.log("This is a book");
}

//if else statement
var age = 16;

if (age >= 18) {
    console.log("This is a book");
} 
else {
    console.log("This is not a book");
}

//if,elseif,else statement
var score = 85;

if (score >= 90) {
    console.log("I am working in the office");
} 
else if (score >= 80) {
    console.log("I am working in the house");
} 
else {
    console.log("I am not work");
}



//Switch Statement
const day = "Thursday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  case "Wednesday":
    console.log("Midweek day");
    break;
  case "Thursday":
    console.log("It's Thursday");
    break;
  case "Friday":
    console.log("last day");
    break;
  case "Saturday":
  case "Sunday":
    console.log("End of the week");
    break;
  default:
    console.log("Invalid day");
}


//login page
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log("Username:", username);
  console.log("Password:", password);
}


//Array  Destructuring Method:
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;
console.log(first,second);  



 //for loop
 for(let i=0;i<5;i++)
  console.log(i);

 //for in loop
 //object method:
 const person = { name: 'Priya', age: 21, place: 'Thanjavur' };

for (let key in person) {
  //concat method
    console.log(key + ': ' + person[key]);
}

//Array Method:
let colors = ['red','green','black'];

for(let key in colors){
  console.log(colors [key]);
}

//for of method:
for(let color of colors){
  console.log("color:"+ color);
}

// //while loop
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//do while
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);


//break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      break; 
  }
  console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
      continue; 
  }
  console.log(i);
}


// //class Method
// class Person {
//   constructor() {
//       this.name = 'Priya';
//       this.age = 21;
//   }

//   sayHello() {
//       console.log(`Hello, my name is ${this.name}
//        and I am ${this.age} years old.`);
//   }
// }

// // Creating an instance
// const Person = new Person();

// // Calling the method
// Person.sayHello(); 
