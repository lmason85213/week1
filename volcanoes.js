let volcanoes = require('./volcanoes.json');
eruptedIn70s();
volcanoesItaly();

// Find the volcanoes in Italy
// Create a function to count volcanoes for a given country. Return the number of volcanoes for the country
//           function countEruptions(country)
// Count the number of volcanoes between 1900 and 2000
// Add up how many people died in all eruptions. There is a field called DEATH in the valcano data use it.
//      The DEATH attribute is sometimes a string so to convert it to a number 
//      you need to do something like this --- volcano.DEATH*1 to convert it to a number

function eruptedIn70s() {
    for (const volcano of volcanoes) {
        if (volcano.Year == 1970)
            console.table(volcano);
    }
}
//find valcanoes in italy 
function volcanoesItaly() {
    for (const vol of volcanoes) {
        if (vol.Country == "Italy") {
            console.table(vol)
        }
    }
}
//find valcanoes before year 0 

let count = 0;
for (const vol of volcanoes) {
    if (vol.Year > 0) {
        count++;
    }
}
console.log(`There are ${count} deaths by volcanoes after year 0 `);


//count valcanoes between 1900 and 2000

let between1900and2000 = 0;
for (const vol of volcanoes) {
    if (vol.Year >= 1990 && vol.Year <= 2000) {
        between1900and2000++;
    }
}
console.log(`There are ${between1900and2000} volcanoes between 1900 and 2000`);



//count how many died from all valcanoes
let died = 0;
for (const vol of volcanoes) {
    died += vol.DEATHS * 1;
}
console.log(`There are ${died} deaths from volcanoes`);

