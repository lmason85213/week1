let rainbow = ['red', 'orange', "yellow", "green", "blue",  "indigo", "violet"]; //multiple variables
console.log(...rainbow) //... is a spread operator that works on arrays and spreads them out

let bro = 'Ben';
let sis = "Rachel";
let favTvShow = "Goblin Slayer";
let disease = "Trimethylaminuria";
let fruit = "pineapple";


// to add to brother's name at the end
 bro += ' Wolfe';
//  bro = bro + ' Wolfe';
 bro = 'Mr. ' + bro; // puts mr. at the beginning
 //bro = bro.concat('Mr. ', bro ) //Mr. Ben Wolfe
console.log(bro);

let numOfPets = 2;
let outsideTemp = 68;
let price = 2.99;
let altitudeOfAirplane = 33000;
let sqrFtOfHouse = 1800;
let var1 = 5; 
let var2 = 10;
let var3 = 15; 
let var4 = 20; 
let var5 = 25; 
console.log("This is variable 3 before the changes =  " + var3);
var3 +=10;
var3-= 1;
var3 %= 7;
console.log(var3);

let num = Math.sqrt(1024);
console.log(" The square root of 1024 is " + num);
let num1 =  Math.pow(7,3);
console.log(" 7 to the 3rd power is " + num1);
let num2 = 5 ** 3;
console.log(" 5 to the third power is " + num2);
num3 = Math.floor(4.9999999); //gives you the closest number to the floor
console.log(num3);
num4 = Math.ceil(4.00001);
console.log(num4); //gives you the closest number to the ceiling

let num5;
for(let index = 0; index <20; index++){
num5 = Math.random()*20; //give me a random number between 0 and 20
num5 = Math.floor(num5); //you add this so that it does not give you decimals
console.log(num5);
}
//match()
let str = "this is just a test string of strings. Isn't it?";
var res = str.match(/i[a-t]/ig);// anything that starts with i and includes a -t
console.log(res);
var res1 = str.match(/t[a-t]*/ig);//start with t and * says have something between a-t and a space
console.log(res1);
var res3 = str.split(" ");// split on the spaces
console.log(res3);
var res4 = str.substr(4,10); //
console.log(res4);
var res5 = str.substring(4,10); //start at 4 end at 9
console.log(res5);

let underline = "hi".repeat(30);
console.log(underline);