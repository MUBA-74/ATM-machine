#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

console.log(chalk.blue("\n            WELCOME TO CODE WITH MUHAMMAD UMAR BIN AAMIR-ATM MACHINE      \n"));

let myBalance=50000;
let myPin=2468;
var FAST_CASH="number";

 
let pinAnswer=await inquirer.prompt([{

            name:"pin",
            type:"number",
            message: chalk.yellow("Enter your pin code:"),

}]);

if (pinAnswer.pin===myPin) {
    console.log(chalk.green("Correct Pin Code!!!"));


    let operationAns=await inquirer.prompt([{


           name:"operation",
           type:"list",
           message:"Please Select Your Operation:",
           choices:["WithDraw", "Check Balance"],


    }]); 
    
    if (operationAns.operation==="WithDraw") {
        let withdrawAns=await inquirer.prompt([{


            name:"WithDrawMethod",
            type:"list",
            message:"Please Select a WithDraw Method:",
            choices:["FASTCASH", "Enter Amount"],

        }]);
         if(withdrawAns.WithDrawMethod==="FASTCASH"){
          let fastcashAns=await inquirer.prompt([{

            name:"FAST_CASH",
            type:["list"],
            message: chalk.bgGreenBright("Please Select Your Amount:"),
            choices:["15000", "25000", "35000", "45000"],
            
          }])

          if(fastcashAns.FAST_CASH>myBalance){
                     
            console.log(chalk.red("INSUFFICIENT BALANCE"));
            
          }
         else{
             let myBalance=50000;
            myBalance-=fastcashAns.FAST_CASH;
            console.log(chalk.magenta(`${fastcashAns.FAST_CASH} WITHDRAWN SUCCESSFULLY!`));
            console.log(chalk.cyan(`${myBalance} is your remaining balance.`));
                
            
         }
         }
        else if(withdrawAns.WithDrawMethod==="Enter Amount"){

            let amountAns=await inquirer.prompt([{

                name:"amount",
                type:"number",
                message:"Enter Your Amount:",
            }]);
             
            
            if (amountAns.amount>myBalance) {
                
                console.log(chalk.red("INSUFFICIENT BALANCE"));
                
            }
    
            else {
                myBalance-=amountAns.amount;
                console.log(chalk.magenta(`${amountAns.amount} WITHDRAWN SUCCESSFULLY!`));
                console.log(chalk.cyan(`Your Remaining Balance is:${myBalance}`));
                
                
            }

        }
        
        
    }  else if (operationAns.operation==="Check Balance") {
        console.log(chalk.grey("Your Balance is:" +myBalance));
        
    }
                
    }

else {
    console.log(chalk.red("Incorrect Pin Number"));
   
}

