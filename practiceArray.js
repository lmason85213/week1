let strArr = ["This is it", "Wubba Lubba Dub Dub", "Magic is in the air","I'm not done yet","Hi","How are you today?","Meow","orange you happy i didn't say banana","queso is yummy","tacos for life"];

strArr.forEach(s => console.log("my for each loop "+ s));
console.log();

//print elements longer than 8 
let longer8 = strArr.filter(e => e.length > 8);
console.log(`I am longer than 8 : ${longer8}`);
console.log();

//print elements containing "B"
let containsB = strArr.filter(str => str.toLowerCase().includes("b"));
console.log("These contain the letter B : "+ containsB);
console.log();

//print elemnts start with " H"
let startsWithH = strArr.filter(h => h.toLowerCase().startsWith("h"));
console.log("I start with h : " + startsWithH);
console.log();

//print elements longer than 7 and end with 't
let longer7EndT = strArr.filter(l => l.length >7 && l.toLowerCase().endsWith("t"));
console.log(`i am longer than 7 and end with t:  ${longer7EndT}`);
console.log();

//remove last 3 elements and add to start of array
let pop1 = strArr.pop();
let pop2 = strArr.pop();
let pop3 = strArr.pop();
strArr.unshift(pop1,pop2,pop3);

console.log("new array : " + strArr);
console.log();

//cut out the middle element of your array 
middle = Math.round(strArr.length/2);
console.log(`the middle index of my array is : ${middle}`);

let sply = strArr.splice(middle,1);
console.log(`this is spliced out : ${sply}`);
console.log();

//count all characters in your string 
let str = strArr.join("");
console.log(str.length);

//you can also do this to count all characters in a string 
let sumOfCharaters=0;
console.log(sumOfCharaters)
for(let l =0; l<strArr.length;l++){
    sumOfCharaters += strArr[l].length;
}
console.log(sumOfCharaters);

