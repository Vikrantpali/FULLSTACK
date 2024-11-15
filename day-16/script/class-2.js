const number = [1, 2, 3, 4, 5]

const sum = number.reduce((total, num) => total + num, 0);

console.log(sum)

const firstEven = number.find((num) => num % 2 === 0);

console.log(firstEven)

const firstEvenIndex = number.findIndex((num) => num % 2 === 0);

console.log(firstEvenIndex)

//Templete literals

const name = 'Jonh'
const greeting = `Hello, ${name}`

alert(greeting)

//Destructuring
const [a, b] =[1, 2];

console.log('a = ', a)

const {Firstname, age} = {Firstname: 'vikrant', age: 25}

console.log(Firstname)

//Spread Operator

const arr1 = [1, 2];
const arr2 = [...arr1, 2, 3, 4, 5];

console.log(arr2)

//Rest Operator
function add(...num){
    return num.reduce((acc, curr) => acc + curr, 0);
}
console.log(add(1, 2, 3))

//using Addition