
//----------------------------------------Different ways to do loops: ------------------------------
//for loops: 
//are good for when you know the # of times that you want to loop thru 
//for(let i = 0; i < someArray.length; i ++)

//below is for arrays
// for(let ele of someArray)  
// for(et i in someArray)

//do/while 
//is do some stuff > not done if true repeat if false leave 
//like a game are you dead want to play again  or like atm done ith withdrawl want anything else 

//while do stuff > then ok and have functions such as filter any reduce 
//need to change something or youwill stay in loop forever 

// for(let i = -5; i < 10; i +=2){  //this printed just the odd numbers from -5 to 10 
//     console.log('----' +i);    
// }

// for(let i =0; i <10; i++){
//     console.log('---->' + i); 
// }

// for( let i = 0; i<=100; i ++){
//    //console.log(i);
// }
// console.log("done");

//----------------------------Arrays----------------------------------

// let ar = [1,2,3,4,5,6,-8,1,91,60,50,78,95,-1654,8416,321,5648,95,651]; 

// console.log(Math.min(...ar));  //smallest # in array

// //the below is the  long way of looping thru #'s and giving the smallest
// let smallest = ar[0];  
// for(const num of ar){
//     if(num < smallest){
//         smallest = num;
//     }
// }
// console.log(smallest)


// //below is the long way of looping thru #'s and giving the biggest number
// let biggest =ar[0];
// for(const num of ar){
//     if(num > biggest){
//         biggest = num;
//     }
// }
// console.log(biggest)



// for(let i =0; i <ar.length; i ++){  // this will show every element in the array 
//     console.log(`${i} :  original #: ${ar[i]}`);  // this will show the  position and the value 
// }

// for(let i =0; i <ar.length; i++){  // this will show every element in the array 
//     //multiply current element by 5 and save back to array 
//     ar[i] *= 5; 
//     console.log(`${i} : Times by 5 :  ${ar[i]}`);  // this will show the  position and the value 
// }

// for(let i =0; i < ar.length; i++){ // if greater than 20 && less then 80 
//     if(ar[i] >= 20 && ar[i] < 80){
    //         console.log('> 20 and < 80 : ' + ar[i]);
    //     }
    //     if(ar[i] % 2 ==0){
//         console.log('I am even : '+ ar[i]);
//     }
//     if(ar[i] % 7 == 0){
//         console.log('Divisible by 7 : ' + ar[i])
//     }
// }

// //or can do 
// for(let num of ar){
    //     if(num <=20 || num > 80){
//         console.log(num); 
//     }
// }

// //but you wouldnt be able to multiply all #'s by 5 


// let states = ["Texas","Pennsylvania","Ohio","West Virgina","Kansas","MaryLand","New Jersy","New York","Colorado","Nevada"]; 

// //#1: words that start with new and include letter x 
// for(let i =0; i < states.length;i++){
//     if(states[i].startsWith("New") || states[i].includes("x")) {
//         console.log(states[i])
//     }
// }

// let sorting = states.filter(m => m.startsWith("New") || m.includes("x"));
// console.log(sorting)

// //or could do 
// for(const state of states){
//     if(state.indexOf('x') >=0){
//         console.log('inde Of an X : ' + state)
//     } 
// }

// //#2: below will sort in alphabetic order 
// let order = states.sort();
// console.log(order);

// //#3: the longest state name : 
// let longestStateName = states[0];
// for(const state of states){
//     if(state.length > longestStateName.length){
//         longestStateName = state;
//     }
// }
// console.log('longest state name is: ' + longestStateName);


//below will also show the array and it contents
//console.log(states.filter(s => s));

//will also loop thru array abd show contents
//  for(const state of states){
//      console.log('for of: ' + state);
//  }



