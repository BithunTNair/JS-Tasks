var readlineSync = require('readline-sync');
let a=parseInt(readlineSync.question('Please enter your age : '));

if(a>=18){
    console.log("Congratulations you are eligible to vote")
}else{
    console.log("Oh sorry..you are not eligible to vote")
}