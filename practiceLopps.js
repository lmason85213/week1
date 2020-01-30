let count = -5; 
while(count < 10 ){
    console.log("while : " + count)
    count++;
}
//at this point count will be at least 10 
do{
    console.log("do  while : " + count)
    count++;
}while(count < 20)

//now will count to 20 

let arX = [1,3,4,43,3,88,14,6,234,64,531,13,343,137,17,];

//the below will do all the same thing loop thru the array 

arX.forEach(thing => console.log("for each " + thing));

for(let i =0; i <arX.length;i++){//if you wanted to add 2 just need to put i +=2 instead of i++
    console.log("for " + i + " " + arX[i])//for loop with i gives you control on what you want to look at 
}
//this one counts the number of the array and gives you the number indexOf

for(const num of arX){
    console.log("for of " + num)
}

let arY = [29,34,11,8,62,61,63,29,24,12,18,20,30,37,42,65,70,88,98,2];

//print out the ones greater than 10 

for(let j = 0; j < arY.length;j++){
    if(arY[j] > 10){
        console.log("I am > 10 : " + arY[j]);
    }
}

//print even numbers 

for(let k =0; k < arY.length; k++){
    if(arY[k] %2 ==0){
        console.log(arY[k] + " is even #");
    }
}

//total all numbers 

let sum = arY.reduce((total,number) => total + number );
console.log("The sum is : " + sum);

//this is the ave of the numbers

let ave = sum / arY.length;
console.log("Ave of arY : " + ave)

//print #'s < ave 

for(let l = 0; l < arY.length; l++){
    if(arY[l] < ave){
        console.log(" I am less than the ave # : " + arY[l])
    }
}
