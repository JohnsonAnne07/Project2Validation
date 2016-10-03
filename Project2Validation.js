/**
 *   @author Johnson, Anne (johnson.anne07@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2B || created: 10.5.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const CURRENT_YEAR = 2016;

let continueResponse;
let policyNumber, dueDay, dueMonth, dueYear, birthYear, numberAccidents, monthlyInsurancePremium, customerAge;
let customerFirstName, customerLastName;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNumber();
        setCustomerFirstName();
        setCustomerLastName();
        setDueDay();
        setDueMonth();
        setDueYear();
        setBirthYear();
        setNumberAccidents();
        setCustomerAge();
        setMonthlyInsurancePremium();
        printMonthlyInsurancePremium();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1  || isNaN(continueResponse)) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 10000) + 1);  //JavaScript random number 1 - 10000
}

function setDueDay() {
    const MAX_DUE_DAY = 32;
    dueDay = Number(PROMPT.question(`\nPlease enter the day of your premium due date (in XX format): `));
    if ((dueDay < 0 || dueDay > MAX_DUE_DAY) || isNaN(dueDay)) {
        console.log(`${dueDay} is an incorrect value. Please try again.`);
        return setDueDay();
    }
}

function setDueMonth() {
    const MAX_DUE_MONTH = 13;
    dueMonth = Number(PROMPT.question(`\nPlease enter the month of your premium due month (in XX format): `));
    if (dueMonth < 0 || dueMonth > MAX_DUE_MONTH || isNaN(dueMonth)) {
        console.log(`${dueMonth} is an incorrect value. Please try again.`);
        return setDueMonth();
    }
}

function setDueYear() {
    const MAX_DUE_YEAR = 2025,
        MIN_DUE_YEAR = 2015;
    dueYear = Number(PROMPT.question(`\nPlease enter the year of your premium due year (in XXXX format): `));
    if (dueYear > MAX_DUE_YEAR || dueYear < MIN_DUE_YEAR  || isNaN(dueYear)) {
        console.log(`${dueYear} is an incorrect value. Please try again.`);
        return setDueYear();
    }
}

function setNumberAccidents() {
    const MAX_ACCIDENTS = 4;
    numberAccidents = Number(PROMPT.question(`\nPlease enter the number of at-fault accidents in the last three years: `));
    if (numberAccidents > MAX_ACCIDENTS || numberAccidents < 0  || isNaN(numberAccidents)) {
        console.log(`${numberAccidents} is an incorrect value. Please try again.`);
        return setNumberAccidents();
    }
}

function setBirthYear() {
    const MIN_BIRTHYEAR = 1906,
        MAX_BIRTHYEAR = 2002;
    birthYear = Number(PROMPT.question(`\nPlease enter your birth year (in XXXX format): `));
    if (birthYear > MAX_BIRTHYEAR || birthYear < MIN_BIRTHYEAR  || isNaN(birthYear)) {
        console.log(`${birthYear} is an incorrect value. Please try again.`);
        return setBirthYear();
    }
}

function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter your name: `);
}

function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter last name: `);
}

function setCustomerAge() {
    customerAge = CURRENT_YEAR - birthYear;
}

function setMonthlyInsurancePremium() {
    monthlyInsurancePremium = 0;
    const BASE_PRICE = 100;
    if (customerAge > 0) {
        if (customerAge > 15 && customerAge < 30) {
            monthlyInsurancePremium = BASE_PRICE + 20 + (numberAccidents * 50);
        } else if (customerAge >= 30 && customerAge < 45) {
            monthlyInsurancePremium = BASE_PRICE + 10 + (numberAccidents * 50);
        } else if (customerAge >= 60) {
            monthlyInsurancePremium = BASE_PRICE + 30 + (numberAccidents * 50);
        }
    }
}

function printMonthlyInsurancePremium() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${customerFirstName}'s bill: \$${monthlyInsurancePremium}. Customer#: ${policyNumber}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}