let volcanoes = require('./volcanoes.json');

// this is the total deaths from all volcanoes 
let totalDead = 0;
for (const v of volcanoes) {
    totalDead += v.DEATHS * 1;
}

console.log(`total deaths from volcanoes: ${totalDead}`)


//the below is what volcanoes erupted from any country 
function eruptedIn(country) {
    for (const v of volcanoes) {
        if (v.Country == country) {
            console.table(v)
        }
    }
}

eruptedIn("Italy"); //always need to make sure you call your function if you dont it is just sitting there idle 



//show volcanoes erupted in specifed year 

function eruptedInYear(year) {
    for (const v of volcanoes) {
        if (v.Year == year) {
            console.table(v)
        }
    }
}

// how may volcanoes in spefic country return number of volcanoes for the country 
function countEruptions(country) {
    let count = 0;
    for (const v of volcanoes) {
        if (v.Country == country) {
            count++;
        }
    }
    return count; //make sure that you return is after the for loop 
}

countEruptions("Italy");

let catchTheCount = countEruptions("New Zealand");
console.log(`There are ${catchTheCount} volcanoes that have erupted in New Zealand`);

catchTheCount = countEruptions("Ecuador");
console.log(`Ecuador has ${catchTheCount} volcanoes that have erupted`);


//count volcanoes erupted between year 1 to year 2 

function eruptionsBetween(year1, year2) {
    let add = 0;
    for (const v of volcanoes) {
        if (v.Year >= year1 && v.Year <= year2) {
            add++;
        }
    }
    return add;
}

let eruptionCount = eruptionsBetween(1990, 2000);
console.log(`There are ${eruptionCount} volcanoes that were between 1990 and 2000`);

//gary showed us a site called freelancer.com and it is a place that you can do free lance work 
//he said usually people have a little expereince but there are some work there that we might be able to do now 


//will show you how many volcanoes erupted past a certian elevation 

function elevationAboveHeight(Elevation) {
    let count = 0;
    for (const vol of volcanoes) {
        if (vol.Elevation >= Elevation)  //what elevation greater than the elevation that i inputed 
            count++;
    }
    return count;
}

let height = elevationAboveHeight(1000);
console.log(`There are ${height} volcanoes that has elevation above 1000`);

height = elevationAboveHeight(2000); 
console.log(`There are ${height} volcanoes with elevation above 2000`);

//when we code we shold not do just one number we should make our code to work with any number 

//list of volcanoes in a country

function listOfVolcanoes(country) {
    let volcanoesList = [];
    for (const v of volcanoes) {
        if (v.Country == country) {
            volcanoesList.push(v)
        }
    }
    return volcanoesList; 
}

let list = listOfVolcanoes("Greece");
console.table(list)

let list2 = volcanoes.filter(v => v.Country == "Italy"); //same as above but only can do italy but is the same 
console.table(list2); 