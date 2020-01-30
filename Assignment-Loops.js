let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";
console.log(declaration.length);
let declarationArray = declaration.split(" ");
console.log(declarationArray.length);
for (let w = 0; w < declarationArray.length; w++) {
    console.log(declarationArray[w]);
}


let shortWords = declarationArray.filter(d => d.length <= 7)
console.log(shortWords)
    
for(let i = 0; i< shortWords.length;i++){
    if(shortWords[i].startsWith("t")){
        

    }
}


