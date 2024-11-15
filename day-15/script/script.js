//Creating/Declaring a function

//Method-1

// function function_name(){
//     //code that gets executed when this function is called/invoked
// }
// function_name();

function greet(){
    alert("Hi Everyone");
}
// greet();

// function function_name(parameter){
//     //code that gets executed when this function is called/invoked
// }
// function_name(value)

function goodmorning(name){
    alert("Good morning " + name);
}
// goodmorning('vikrant')

// function function_name(parameter1, parameter2){
//     //code that gets executed when this function is called/invoked
// }
// function_name(value1, value2)
let d = 4;

function addition(a, b){
    let c = a + b;
    alert(c);
}
// addition(5, 6)

// const variable/function_name =function(){
//     code that gets executed when this function is called/invoked
// }
// variable/function_name()

//Method-2
const greetwithoutparameter = function(){
    alert("Good Morning")
}
// greetwithoutparameter();

// const variable/function_name =function(parameter){
//     code that gets executed when this function is called/invoked
// }
// variable/function_name(value)

const greeting = function (name){
    alert("Good Morning " + name);
}
// greeting('Raju')

// const variable/function_name =function(parameter1, parameter2){
//     code that gets executed when this function is called/invoked
// }
// variable/function_name(value1, value2)

const product = function (a, b){
    alert(a * b);
}
// product(3, 5)


//Method-3/Arrow function

// const variable/function_name = () => {
//     code that gets executed when this function is called/invoked
// }
// variable/function_name()

const welcome = () =>{
    alert("Welcome to my website")
}
// welcome()

// const variable/function_name = (parameter) => {
//     code that gets executed when this function is called/invoked
// }
// variable/function_name(value)

const Thanks = (name) =>{
    alert("Hey " + name + " Thanks for visiting");
}
// Thanks('Vikrant')

// const variable/function_name = (parameter1, parameter2) => {
//     code that gets executed when this function is called/invoked
// }
// variable/function_name(value1, value2)

const Difference = (a, b) =>{
    alert(a - b);
}

// Difference(5, 4)

const subtract = (a, b) =>{
    return a - b;
}
// const result = subtract(5, 1);
// alert(result)

// alert(subtract(500, 121))

const isEven = (num) => {
    if(num % 2 === 0){
        return "Even";
    } else{
        return "Odd";
    }
}

// alert(isEven(3));


const names = ["Vikrant", "Achal", "Rajat", "Tanvi"];
             // 0           1       2       3
console.log(names[4]);

names.push("virat");//Add an Element/value in Array at the end

console.log(names[4]);

names.pop();//Removes the last element/value in array

console.log(names[4]);

names.shift(); //Removes the first Element/ Value in an Array

console.log(names[0]);

names.unshift("Rohit");//Add an Element/value in the beginning Array

console.log(names[0]);