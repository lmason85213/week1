let quote = " We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

let gov = quote.indexOf("Governments");

console.log(gov);

let all = quote.substring(46,72);

console.log(all);

let re = quote.replace(/taht/gi,"that");


console.log(re);


console.log(quote.length);