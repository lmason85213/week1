console.log("Hello World!");
let age = 29; 
let name = "Lindsey";
let address; 
address = "4307 Andalusia Trail";
let birthday = 03/12/1990;

console.log("My nasme is " + name + " and my age is "+ age + " and my address is " + address + " my birthday is " + birthday);

let days = (new Date() - new Date(1990,2,12) / (100 * 60*60*24));
console.log("I am "+ days + " old in days");


function seconds_year() {
    var dateObj = new Date();
    var dateInit = new Date(dateObj.getFullYear(), "0", "1");
        dateInit = Math.round(dateInit.getTime()/1000);

    var dateCurrent = Math.round(dateObj.getTime()/1000);

    return dateCurrent - dateInit;
}

console.log("There are " + seconds_year() + " Seconds in a year");

let date = new Date('March 12 1990'); 
let now = Date.now();
let sec = now - date; 
console.log(now);
console.log(date);
console.log("I am " +sec + "  secs old");