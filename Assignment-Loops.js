let declaration = "We hold these truths to be self-evident, that all men are created equal,that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";
console.log(declaration.length);
//#1:
let declarationArray = declaration.split(" "); // could put split(/[ ,;.]/) < this is looking for tokens and get rid of all puncutation 

//can also do above like this : and the below will take out the puncutation and take out any empty arrays 
let words = declaration.split(/([ ,;.:-])/); //and return a new array with just wordsd and no puncutuation 
//the above code will give me array words that contain - length so exclude them 
words = words.filter(w => w.length > 0);
//or instead of above you can do : 
let smallwords = words.filter(w => w.length > 0 && w.length <= 7); //instead of doing the above line of code 
//above is also can but used for #2

//or we can do: 
declaration = declaration.replace(/[,;.:-]/g, ""); //this will replace all puncuation with no space
words = declaration.split(" "); //then we can just split on space 


console.log(declarationArray.length);
for (let w = 0; w < declarationArray.length; w++) {
    console.log(declarationArray[w]);
}

//#2:
let shortWords = declarationArray.filter(d => d.length <= 7)
console.table(shortWords)


//#3:

for (let i = 0; i < smallWords.length; i++) {  //the for loop will go thru the array 
    
    if (smallWords[i].startsWith("t")) {  //now we are looking on ly for the words that start with t 
        smallWords[i] = smallWords[i].toUpperCase(); // now we are changing all the words that start with t 
                                                   //and making them to uppercase words 
    }
}
console.table(smallWords)



//below just uppercase words but did not change it in the array:
for (const word of smallWords) {
    if (word.startsWith("t")) {
        word = word.toUpperCase();
    }
}



