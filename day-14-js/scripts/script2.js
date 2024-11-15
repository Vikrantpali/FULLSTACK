//Condition Statements
//if -syntax
// if(condition){
//     code that run when condition is true
// }
// if-else -syntax
// if(condition){
//     code that run when condition is true
// }else if{
//     code that run when condition is false
// }
// if-else-if -syntax
// if(condition1){
//     code that run when condition is true
// }else if(Condition2){
//     code that run when condition2 is true and condition1 is false
// }
// .
// .
// else if(conditionN){
//     code that run when conditionN is true and all the conditions before are false 
// }else{
//     code that run when all the condition are false
// }
// switch-syntax
// switch(expression){
//     case value1:
//         code that ru if expression ===value1
//     break;
//     case value2:
//         code that ru if expression ===value2
//     break;
//     default:
//         code that runs when expression doesn't match any case
// }

let a = 6;

if (a % 2 === 0){
    console.log(a + " is Even")
    if(a < 10 && a > 5){
        console.log("a is less than 10 and greater tha 5")
    } else if(a < 20 && a > 10){
        console.log("a is less than 20 and greater tha 10")
    } else if(a < 30 && a > 20){
        console.log("a is less than 30 and greater tha 20")
    }
}
else{
    console.log(a + " is Odd")
}

if(a < 10 && a > 5){
    console.log("a is less than 10 and greater tha 5")
} else if(a < 20 && a > 10){
    console.log("a is less than 20 and greater tha 10")
} else if(a < 30 && a > 20){
    console.log("a is less than 30 and greater tha 20")
}

let firstnumber = 5;
let secondnumber = 8;
let operation = 1;
switch(operation){
    case 1:
        console.log(firstnumber + secondnumber)
        break;
    case 2:
        console.log(firstnumber - secondnumber)
        break;
        default:
        console.log(firstnumber + ' ' + secondnumber)
}

//iteration/loop

//for loop
// for(initialization; condition; increment/decrement){
//     //code that runs untill the condition is false
// }

//while loop
// initialization
// while(condition){
//     //code that runs untill the condition is false
//     //increment/decrement
// }

//do-while

// initialization
// do{
//     //code that runs untill the condition is false
//     //increment/decrement
// }while(condition)

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

for(let x = 1; x <= 6; x++){
    console.log(x)
}

let i = 1;
while(i <= 6){
    console.log(i)
    i++
}

let j = 1;
do {
    console.log(j)
    j++
} while(j <= 6)