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

//const:
const birthYear = 1995;
 //birthYear = 1996; 
console.log(birthYear); 

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


//Login Page
function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  console.log("Username:", username);
  console.log("Password:", password);

  // Display entered details
  let outputText = `<h2>Details</h2>
      <p>Username: ${username}</p>
      <p>Password: ${password}</p>`;
  document.getElementById('output').innerHTML = outputText;
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

do {
    console.log(i);
    i++;
} while (i < 5);


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


//Bitwise operator
//AND (&):
let and = 5 & 3;
console.log(and); 

//Bitwise OR (|):
let or = 5 | 3;
console.log(or); 

//Bitwise XOR (^) :
let xor = 5 ^ 3;
console.log(xor); 

//Bitwise NOT (~)
let not = ~5;
console.log(not);

//Left Shift (<<)
let shift = 5 << 1;
console.log(shift); 

// Right Shift (>>)
let rshift = 5 >> 1;
console.log(rshift); 


//Zero-fill Right Shift (>>>)
let zero = 5 >>> 1;
console.log(zero); 


//Array methods:
//Push
// let arr = [1,2,3]
// arr.push(4);
// console.log(arr)

// //Pop()
// let val = [1,2,3,4]
// val.pop(4);
// console.log(val)

// //Shift()
// let val1 = [1, 2, 3];
// val1.shift();
// console.log(val1);  

// //Unshift()
// let val2 = [2, 3];
// val2.unshift(1);
// console.log(val2); 

// //Slice()
// let val3 = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 3); 
// console.log(newArr);  

// //Splice()
// let val4 = [1, 2, 3, 4, 5];
// val4.splice(2, 1, 6);  
// console.log(val4);  


//concat()
const arr4 = [1,2,3];
const arr5 = [4,5,6];
const result = arr4.concat(arr5);
console.log(result); 

//foreach()
let val5 = [1, 2, 3];
val5.forEach(function(item) {
  console.log(item);  
});

//map()
let val6 = [1, 2, 3];
let result1 = val6.map(x => x * 2);
console.log(result1);  

//filter()
let val7 = [1, 2, 3, 4, 5];
let result2 = val7.filter(x => x > 2);
console.log(result2);  

//find()
let fin = [1, 2, 3, 4];
let result3 = fin.find(x => x > 2);
console.log(result3);  

//findIndex()
let prob = [1, 2, 3, 4];
let index = prob.findIndex(x => x > 2);
console.log(index);  

//indexOf()
  let off = [1, 2, 3, 2];
  console.log(off.indexOf(2));  
  
  //includes()
  let des = [1, 2, 3];
console.log(des.includes(2)); 

//reverse()
let rev = [1, 2, 3];
rev.reverse();
console.log(rev);  

//sort()
let sor = [3, 1, 4, 1, 5];
sor.sort();
console.log(sor);  

//join()
let van = ['Hello', 'World'];
let joined = van.join(' ');
console.log(joined);  // Output: "Hello World"

//some()
let som = [1, 2, 3, 4];
let hasLargeNumber = som.some(x => x > 3);
console.log(hasLargeNumber);  

//values
let vac = ['a', 'b', 'c'];
let iterator = vac.values();
for (let value of iterator) {
    console.log(value);  
}

//every()
let ever = [1, 2, 3, 4];
let allPositive = ever.every(x => x > 0);
console.log(allPositive);

//Fill
let fil = [1, 2, 3, 4, 5];
fil.fill(0, 2, 4);  
console.log(fil);  

// copyWithin
let copy = [1, 2, 3, 4, 5];
copy.copyWithin(0, 3);  
console.log(copy);  

//Flat()
let flat = [1, [2, [3, [4]], 5]];
let flatArr = flat.flat(2);  
console.log(flatArr);  

// Flatmap()
let map = [1, 2, 3];
let total = map.flatMap(x => [x, x * 2]);
console.log(total);  

// isArray()
let array = [1, 2, 3];
let tot = Array.isArray(array);
console.log(tot);  

//of
let of = Array.of(1, 2, 3);
console.log(of);  











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
