let name ='john ';//string
const age = 30; //Number
var Teach = false; //Boolean
let students = ["john", "ED"]; //Array
let person = { name: "Bob", age: 34}; //Object
let unknown = null; //null
let notDefined; //Undefined

notDefined = 'Javascript'
/*
const can not be overwritten
name = 'ED'
age = 31 */

// alert(name + age)

let a = 5;
let b = 8;

// Arithmatic Operators
let c = a + b; //Addition
console.log(c);
console.log(8 - 5); //Subtraction
console.log(a * b);//Multiplication
console.log(b / a); //Division
console.log(b % a); //modulus (Reminder)

//Comparision Operators
let d = 5;
let e = 5;

console.log(d !== e); // not equal to
console.log(d == e); //Equals to
console.log(d === e); //Equals
console.log(d < e); //Less Than
console.log(d > e); //Greater Than 
console.log(d <= e); //less than or equals to
console.log(d >= e); //Greater than or equals to

//Logical Operators
let  userage = 17
let andOperator = (5 <= userage) && (userage <= 15) //And Operator
console.log(andOperator)
let orOperator = (7 <= userage) || (userage <= 15) //Or Operator
console.log(orOperator)
let notOperator = !(18 <= userage) //Not Operator
console.log(notOperator)

document.getElementById('para').innerHTML = "This is the para";
