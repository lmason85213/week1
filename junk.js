// console.log("Hello World!");
// let age = 29; 
// let name = "Lindsey";
// let address; 
// address = "4307 Andalusia Trail";
// let birthday = "03/12/1990";

// console.log("My name is " + name + " and my age is "+ age + " and my address is " + address + " my birthday is " + birthday);

// function hello(person){
//     let temp = "Hello " + person + "!";
//     return temp;
// }

// let msg = hello("Lindsey");
// console.log(msg);

//this function lets you get the date of any number you want to add to it or subtract from it just need to put it in the addDate(#)
// function addDate(addValue) {
//     let today = new Date();
//     today.setDate(today.getDate() + addValue);
//     let strTomorrow = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
//     return strTomorrow;
// }

// let todayPlus1 = addDate(20);
// console.log(todayPlus1);

// let a, b, c;
// a = 5;
// b = 7;
// c = 7;

// console.log(add3Numbers(a, b, c));

// function add3Numbers(num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     return sum;
// }

// let ans = calculator(10,7,"/");
// console.log(ans);
/**calculator 
 * takes 2 numbers and runs them aainst the specified operators for example
 * calculator(10,40,"+")  result 50
 * calculator(10,40,"-") result 30
 * calculator(10,40,"*") result 400
calculator(10,40,"/") result 4 * 
 * @param num - first number to be operated on 
 * @param num2 - second number 
 * @param operator - what math operation we want to do, the operator can be "+","-","/","*","%","^"
 * 
 * 
//  */
// function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case "+":
//             result = num1 = +num2;
//             break;
//         case "-":
//             result = num1 -= num2;
//             break;
//         case "*":
//             result = num1 *= num2; 
//             break; 
//          case "/":
//              result = num1 /= num2; 
//              break; 
//         case "%":
//             result = num1 %= num2; 
//             break; 
//         case "^":
//             result = num1 ^= num2; 
//             break ; 
//         default:
//             result = NaN;    


//     }
//     return result; 


// }

// let date = new Date(); 
// console.log(date);

// let jumping = increment(6);
// console.log(jumping)


// function increment(jump) {
//     let date = new Date();
//     let currentHour = date.getHours();
//     let currentSec = date.getSeconds();
//     let count =0;

//     for (let i = currentHour; i < currentSec; i += jump) {
//         count++;
//         console.log(i)
//     }
    
// return count;
// }


//     function findTallestChild(child1, child2, child3) {
//         if (child1 > child2 && child1 > child3) {
//             console.log('the first child is the tallest');
//         } else if (child2 > child3) {
//             console.log("the second child is the tallest");
//         } else {
//             console.log("The third child is the tallest");
//         }
    
//     }


//let max = Math.max(654,134,789)  //same as above just simplier 
//console.log(max); 

//let ar = [654,789,123,456,987,321]
//let min = Math.min(...ar); //this spreads out the array and checks for the min value of the set of numbers 
//console.log(min);    //the dots spreads out the array ... 

//takes 4 arguments and call it 3 times
// function tellFortune(numKids, partner, geoLocation, jobTitle){
//     let future = `You will be ${jobTitle} in ${geoLocation}, and married to ${partner} with ${numKids} kids.`;
//     console.log(future);

// }

// tellFortune("bball player", "spain", "Shaq", 3 ); 
// tellFortune("stunt double", "Japan", "Ryan Gosling", 3000); 
// tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);


