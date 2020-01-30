let purchase1 = 16.99;
let purchase2 = 22.99;
let purchase3 = 8.99; 
let purchase4 = 2.99; 

let subtotal = purchase1 + purchase2 + purchase3 + purchase4;
let salesTax = 0.08 * subtotal / 100;
let total = subtotal + salesTax; 


console.log("Your purchase comes to " + subtotal +  " plus tax of "+ salesTax.toFixed(2) + " for a total of " + total.toFixed(2) + ". Thanks for shopping with Edge Tech");