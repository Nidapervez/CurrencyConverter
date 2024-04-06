#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("       WELCOME TO  CURRENCY CONVERTOR     "));
const currency :any = {
USD: 1,   //base currency
PKR:280
CAD:1.25,
AUD:1.35,
GBP:0.75, 
JPY:110,
CHF:0.90, 
MXN:20.00,
SGD:1.35,
TRY:32.03,
EUR:0.91,
PKR:277.54,
INR:74.57,
BDT :109.60,
KWD :0.31,
NZD:1.66,
HKD:7.83,
OMR:0.38,
SAR:3.75,
RSD:108.13,
NPR:133.08,
MAD:10.06,
KRW:1.100,
SEK:8.50,
EGP:47.33,
IRR:42075,
};
let currencySelection = await inquirer.prompt([{
    name:"from",
    type:"list",
    message:("Select Currency you want to convert"),
    choices:["USD","PKR","CAD","AUD","GBP", "JPY","CHF","MXN","SGD","TRY","EUR","AUD","PKR","INR","BDT","KWD","NZD","HKD","MXN","OMR","SAR","RSD","NPR","MAD",
    "KRW","SEK","EGP","IRR"],
},
{
    name:"to",
    type:"list",
    message:"Select Currency you want to convert",
    choices:["USD","PKR","CAD","AUD","GBP","JPY","CHF","MXN","SGD","TRY","EUR","AUD","PKR","INR","BDT","KWD","NZD","HKD","MXN","OMR","SAR","RSD","NPR","MAD",
    "KRW","SEK","EGP","IRR"],
},
{
    name:"Amount",
    message:"Enter your amount to convert",
    type:"number",
 }
 ]
 )
let fromamount= currency[currencySelection.from]
let toamount =currency[currencySelection.to]
let amount= currencySelection.Amount;
let basicAmount=amount / fromamount;
let covertedAmount = basicAmount*toamount;
let FinalAmount=Math.round(covertedAmount);
console.log(chalk.blue(`This is the converted Amount ${FinalAmount}`));