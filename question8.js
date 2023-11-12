var readlineSync = require('readline-sync');
let age=parseInt(readlineSync.question('Please enter your age : '));
if(age<0){
    console.log("Sorry..This value is not considered as an age")
}else if(age>=0 && age<=12){
    console.log("You are a Child")
}else if(age>=13 && age<=19){
    console.log("You are a Teenager")
}else if(age>=20 && age<=59){
    console.log("You are an Adult")
}else if(age>=60 && age<=150){
    console.log("You are a Senior")
}else{
    console.log("It is not valid")
}

