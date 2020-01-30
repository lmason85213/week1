let date = new Date();
let hour = date.getHours();
console.log(date);
console.log(hour);
if(hour <= 5 && hour <= 6){
    console.log("Take vitamins and get kids ready for school");
}
else if(hour == 6){
    console.log("Driving to school")
}
else if(hour <=7 || hour <=13){
    console.log("In class learning to code")
}
else if(hour == 13){
    console.log("Going home from school")
}
else if (hour <= 14){
    console.log("at home enjoying me time")
}
else if (hour == 15 || hour < 16){
    console.log("Getting kids from school and doing homework")
}
else if (hour >= 22 || hour <= 5){
    console.log("Get some rest");
}

