#! /usr/bin/env node

import  inquirer  from "inquirer";


const  answers = await inquirer.prompt([
    {
    name: "firstNumber",
    type: "number",
    message : "please enter your  first number",
    },
    {
    name : "SecondNumber",
    type : "number",
    message : "please enter your second number",
    },
    {
    name :"operator",
    type : "list",
    message : "choose the operator to perform the operation ",
    choices  : ["Addition", "subtraction", "Multiplication", "Division" ]
    },
])

// conditional statement 
if (answers.operator === "Addition"){
    console.log(answers.firstNumber +  answers.SecondNumber);

}else if(answers.operator === "subtraction"){
    console.log(answers.firstNumber - answers.SecondNumber);

}else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.SecondNumber);
    
}else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.SecondNumber);
    
}else{
    console.log("please select correct operator");
    
}

