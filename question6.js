var readlineSync = require('readline-sync');
let grade1=parseInt(readlineSync.question('Enter English grade point : '));
let grade2=parseInt(readlineSync.question('Enter Hindi grade point : '));
let grade3=parseInt(readlineSync.question('Enter Malayalam grade point : '));
let grade4=parseInt(readlineSync.question('Enter Chemistry grade point : '));
let grade5=parseInt(readlineSync.question('Enter Biology grade point : '));
let grade6=parseInt(readlineSync.question('Enter Physics grade point : '));
let grade7=parseInt(readlineSync.question('Enter Mathematics grade point : '));
let grade8=parseInt(readlineSync.question('Enter Social Science grade point : '));
let result=grade1+grade2+grade3+grade4+grade5+grade6+grade7+grade8;
if(result>=60){
    console.log("Congratulations.. You have Passed")
}else{
    console.log("You have failed")
}