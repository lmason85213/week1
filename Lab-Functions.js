function getSeconds() {
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds;

}
let curSeconds;
curSeconds = getSeconds();
console.log("Current Seconds = " + curSeconds);

function getMinutes() {
    let date = new Date();
    let mins = date.getMinutes();
    return mins;
}
let curMins;
curMins = getMinutes();
console.log("The current mins is " + curMins);

function getHour() {
    let date = new Date();
    let hour = date.getHours();
    return hour;
}
let curHour;
curHour = getHour();
console.log("The current hour is " + curHour);

console.log("The current hour is " + curHour + " and the current mins is " + curMins + " with the current seconds is " + curSeconds + " So the current time is " + curHour + curMins + curSeconds);

//the code below will gve you the # position in the alphabet for each letter
let name = "Lindsey";
for (let i = 0; i < name.length; i++) {
    let x = position(name.charAt(i));
    console.log(x);
}

function position(character) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    return alpha.indexOf(character) + 1;
}

function reverse(s){
    let o =[];
    for(let i= s.length-1,j=0; i >= 0; i--,j++){
        o[j] = s[i];
        return o.join('');
    }

}
function changeText(string) {
    let date = new Date();
    let secs = date.getSeconds();

    if (secs < 30) {
        return string.toUpperCase();

    } else  {
        return string.toLowerCase();
    }
}

console.log(changeText("Hello"));