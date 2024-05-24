#! /usr/bin/env node 
import inquirer from "inquirer";

// 1 # computer will generate rondom nomber
// 2 # user imput forguesing number
// 3 # compare using input with computer generated no

const rondomNumber = Math.floor(Math.random()*10);
const answers = await inquirer.prompt([
    {
        message: "please guess a number between 1 to 10",
        name: "usergussednumber",
        type: "number",
    }
]);
if(answers["usergussedNumber"] === rondomNumber){
    console.log("CONGRATS! YOU GUSSED RIGHT NUMBER"); 
}
else{
    console.log("SORRY! YOU GOT WRONG NUMBER");
}

