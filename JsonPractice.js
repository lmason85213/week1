let client = { 
    name: "Lindsey",
    address:{   adress: "4307 Andalusia Trail",
                city: "Arlington",
                state: "TX"
            },
    networth: 20,
    riskTolerance: "High",
    nextVisit: "July 1, 2020",
    children: ["Arianna","Adonis","Donovan","Sophia"]

}

 let searchChild = "Arianna";
console.log(client.name); //you can access any of the properties of the variable above with the dot. syntax
console.log(`${client.name} lives in ${client.address.city} and has a net worth of : ${client.networth}`);
// the client.address.city grabs the info from the address object inside the client object 


for(const child of client.children){  //this shows searchChild 
    if(child === searchChild)  
    console.log(`How is young ${child} ?`);
}

for (const children of client.children){  //this loops thru the array children in the client object
    console.log(`---->${children}`)
}

console.table(client); //gives you a table of your information 
console.table(client.children);  // gives you table of the children in the client.children

client.networth += 10; 
console.log(client.networth);

client.children.push("Stephen");
client.children.push("Karen");  //thie functions you can use is just like array functions 
console.log(client.children[4].length);
client.email = "go2masongroup@gmail.com"; // this will add a new property of email to the client object 


