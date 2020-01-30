let names =[]; 
names.push("Z");
names.push("Y"); 
names.push("X"); 
names.push("W"); 
names.push("Lindsey");//push puts it at the end of an array 

console.log(names); // this will print the array 

let last = names.pop(); //will remove the end of the array 

console.log(last);

names.unshift("A");
names.unshift("B");
names.unshift("C");// unshift adds it to the front or beginning of the array shifts everyone else to the right 
names.unshift("D");
names.unshift("E");
names.unshift("F");
names.unshift("Mason");
console.log(names);

let first = names.shift(); //shift removes the first thingin array and shifts every one else to the left 
names.push(first);
console.log(names);
//can also do 
names.unshift(names.pop()); //remove from the start add to the end 
names.push(names.shift()) ;//removes from end add to the start

let rev = names.reverse(); //this will reverse the array
console.log(rev);

let sply = names.splice(2,2); // 1st parameter is where you want to start 2nd parameter is how many you want to be removed
console.log("This is my splice: " + sply);            //this will also change the original array 

names.slice(2,2); //same as splice but only gies you a copy of the array and does not effect the original array 

names.sort(); // sorts them in alphebetical order 
console.log(names);

names.reverse(); //reverses array 
console.log(names); 

let whereIsW = names.indexOf("W"); // this tells you the position of W 
console.log(whereIsW);

let w = names.includes("B");  //this doesnt say where it is just if it is in the array and will give true or false 
console.log(w);

let ages =[32,33,16,40,55,65,20,17,65,48,75]; 
let newArray = ages.filter(checkAdult); //will look thru all of the ages array and check to see if they are 18 or older 
console.log(newArray); 


ages.forEach(age => console.log( "----> Age: " + age));

ages.forEach(age => showAge(age)); 
function showAge(age){
    if(age < 10){
        console.log("Child " + age)
    }else if (age >=10 && age <20){
        console.log("Teenager " + age)
    }
    else if (age >=20 && age <40){
        console.log("Young Adult " + age )
    }
    else if (age >= 40){
        console.log("Just plain old " + age)
    }
}

let newArray1 = ages.filter(age => age <= 18); //this does he same thing as above but ages less than 18 
console.log(newArray1);

let newArray2 = ages.filter(age => age >= 35); //this does he same thing as above but ages less than 18 
console.log(newArray2);

console.log("There " + newArray2.length + " people over 35");

console.log("The last person in the new array of ages over 35 is " +  newArray2[newArray2.length -1]); //will find the end of the array 

 let old = ages.find(age => (age > 33));//finds 1st age older than 33
 console.log("1st age over 33: " + old); 

 let old1 = ages.findIndex(age => (age > 33)); //finds the index of or position in array the 1st instance
 console.log("the 1st index of someone older than 33: " + old1 + "which has the age of : " + old);


let newArr1 = ages.every(age => (age > 5)); //checks if every single item in array passes test 
console.log(newArr1);

let some = ages.some(age => (age >40));// check if any item is true 
console.log(some);

function checkAdult(age){
    return age >= 18;
}


let name = ["Liya","Rain","Lindsey","Peyton","Jarvis","Q","Alexis","John","Julius ","Brian"]; 

newArr = name.filter(name => name.length == 4);
console.log(newArr);

let newName = name.join(" * "); //joins items of array together with what you would like 
console.log(newName)

let newValue = ages.reduce((total,age) => total + age ); // will reduce array to single value from left to right and reduceRight()just adds them from right to left
console.log(newValue)

newArr1 = name.filter(name => name.charAt(1) == "a"); //this helps you find what names have the letter a in the seond position in the names charAt will help
console.log(newArr1)

newArr2 = name.filter(name => name.startsWith("J") && name.length == 4); //or can do charAt(0) =="J"
console.log(newArr2);


