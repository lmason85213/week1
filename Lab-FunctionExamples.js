
let msg; 
let name = "Lindsey"; 
for(let index = 0; index < name.length; index++){  //this for loop loops thru my name and translates it to military code
    msg += translate(name.charAt(index)) + " ";
}
console.log(msg);

function translate(letter) {
    let militaryCode = " ";

    switch (letter.toUpperCase()) {
        case "A":
            militaryCode = "Alpha";
            berak;
        case "B":
            militaryCode = "Bravo";
            break;
        case "C":
            militaryCode = "Charlie";
            break;
        case "D":
            militaryCode = " Delta";
            break;
        case "E":
            militaryCode = "Echo"
            break;
        case "F":
            militaryCode = "Foxtrot";
            break;
        case "G":
            militaryCode = " Golf";
            break;
        case "H":
            militaryCode = "Hotel";
            break;
        case "I":
            militaryCode = "India";
            break;
        case "J":
            militaryCode = " Juliett";
            break;
        case "K":
            militaryCode = "Kilo";
            break;
        case "L":
            militaryCode = "Lima";
            break;
        case "M":
            militaryCode = "Mike";
            break;
        case "N":
            militaryCode = "November";
            break;
        case "O":
            militaryCode = "Oscar";
            break;
        case "P":
            militaryCode = "Papa";
            break;
        case "Q":
            militaryCode = "Quebec";
            break;
        case "R":
            militaryCode = "Romeo";
            break;
        case "S":
            militaryCode = "Sierra";
            break;
        case "T":
            militaryCode = "Tango";
            break;
        case "U":
            militaryCode = "Uniform";
            break;
        case "V":
            militaryCode = "Victor";
            break;
        case "W":
            militaryCode = "Whiskey";
            break;
        case "X":
            militaryCode = "X-Ray";
            break;
        case "Y":
            militaryCode = "Yankee";
            break;
        case "Z":
            militaryCode = "Zulu";
            break;
        default:
            console.log("Enter a letter");
            break;
    }
    return militaryCode;
}

console.log(translate("z"));