//real way to read a  json file 
const fs = require('fs'); 

let volcanoes= []; 
fs.readFile('volcanoes.json', {encoding: 'utf-8'}, (err,data) => {
    if(err){
        console.error(err) 
        return
    }
    volcanoes = JSON.parse(data);
    console.log(volcanoes.length);
    volcanoes.forEach(v => v.DEATHS = +v.DEATHS);  //this method just changes deaths to a number instead of a string 

    // let listOfDeadlyVolcanoes; 
    // listOfDeadlyVolcanoes = volcanoes.filter(v => v.DEATHS |= 0 > 0);  //filter says test every volcanoe in list 
    // console.table(listOfDeadlyVolcanoes);                                              //and if it is true then we will save it to a new array 
                                                                    //the purpose of filter is to do a if statement and will save to a new list 
    
           //the below is the same as doing a filter  that is above                                                         
    // listOfDeadlyVolcanoes = []; 
    // for(const vol of volcanoes){
    //     if(vol.DEATH |0 > 0){
    //         listOfDeadlyVolcanoes.push(vol);
    //     }
    // }

    //or if you put filter(v => v.Name.includes('Island')) will print out all the names that have island in it 
    
    //below gives us all the deaths in one number for all volcanoes 
    let deaths = volcanoes.reduce((total,v) => total + v.DEATHS,0);  //0 is initializing the starting point to 0 
    console.table(`number of deaths: ${deaths}`); 
    let aveDeaths = deaths /volcanoes.length;        //or can do ${(deaths /volcanoes.length).toFixed(0)}
    console.table(`ave deaths: ${aveDeaths.toFixed(0)}`);


    //below is the aveerage of elevations in the volcanoes so total elevation / total number of volcanoes 
    let elevationTotals = volcanoes.reduce((total,v) => total + v.Elevation,0);  //if you want to mutiply u need to initialize at 1 not 0 
    console.log(`Total elevation : ${elevationTotals.toFixed(0)}`);
    let aveElevation = elevationTotals / volcanoes.length; ;
    console.log(`ave # of elevation : ${aveElevation.toFixed(0)}`); 
                                  //toFixed will give you a certian amount of decimals
    

     // reduce will just combine all of the strings together                              
    let little = ["String", "dog","kitten","butt"];  
    let all = little.reduce((temp,s) => temp +  "-" + s) 
    console.log(all)
    //can also do join 
    all = little.join("-"); 
    console.log(all);
    
    let names = volcanoes.map(v => v.Name); 
    //console.table(names);











})