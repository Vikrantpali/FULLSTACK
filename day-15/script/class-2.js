const names = ["Vikrant", "Achal", "Rajat", "Tanvi"];


//Array iteration Mathod

//forEach
// Array.forEach(function(element,array)){

// })
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])

names.forEach((name, index) =>{
    console.log(name  + ' : ' + index)
})

//map()

const number = [1, 2, 3, 4, 5]
const double = number.map(num => num*2);
console.log(double)

//Filter

const evenNumber = number.filter((num) => num % 2 === 0);
console.log(evenNumber)

const OddNumber = number.filter((num) => num % 2 !== 0);
console.log(OddNumber)

//objects

// const object_name ={
//     key1 : value1,
//     key2 : value2,
//     key3 : value3,
//     key4 : value4,
// };

const person ={
    firstName : 'john',
    lastName : 'Doe',
    age : 30,
    isEmployeed : true,
};

console.log(person.age)


const car = new Object();

console.log(car)

car.brand ='Toyota';
console.log(car)

car.model ='Corola';
console.log(car)

car.year = 2020;
console.log(car)

//DOM Manipulation

//Using ID
const header = document.getElementById('header')
header.innerHTML = 'Some Text'

//Using Class

document.getElementsByClassName('para').innerHTML = "This is para"

//Using Tag name

document.getElementsByTagName('main')

//Using Query selector

const element = document.querySelector('.para')
element.innerHTML = '<i>This is para</i>'

//Query Selector All

// const para = document.querySelectorAll('.para')
// para.innerHTML = 'This is para'

element.setAttribute("class", "newPara")

const para2 = document.querySelector('.para2')
para2.innerHTML = 'This text is added using JS'