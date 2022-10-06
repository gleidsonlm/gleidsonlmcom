// https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-java-script/funcoes/functions

/* 2. Check the Balance
    2a) Create one object with two proprieties, both Array type:
    - Income;
    - Expense.
    2b) Create a function to:
    - Calculate the total of income and expense;
    - Show the balance total;
    - Output a message if it's positive or negative.
*/

let balance = {
    income: [1200, 120.19, 200.00, 427.93],
    expense: [499.99,257.13,171.00,120.00,900],
}

// Sum the array items wiht a loop
function sum(array) {
    let total = 0;
    for(let value of array){
        total += value
    } return total
}
//Total of income
const incomeTotal = sum(balance.income)
//Total of expense
const expenseTotal = sum(balance.expense)
//Balance calculation
const balanceTotal = incomeTotal - expenseTotal
//Balance is positive or negative
const balanceText = (balanceTotal < 0) ? "negative" : "positive"
//Output message about balance
console.log(`Your balance is "${balanceText}" $ ${balanceTotal.toFixed(2)}
Incomes = $ ${incomeTotal.toFixed(2)}
Expenses = $ ${expenseTotal.toFixed(2)}
`)


// for (let credit in income) {
//     // console.log(income[credit]);
//     creditSum += income[credit]
//     console.log(creditSum.length())
// }

// console.log(income)


/* 1. Convert Grades to Scales
    Change grades set in number for a scale set in characters:
    - A: From 90 to above
    - B: Between 80 and 89
    - C: Between 70 and 79
    - D: Between 60 and 69
    - E: Bellow 60
*/
/*let gradeScale = function(gradeNumber){
    if(isNaN(gradeNumber)||gradeNumber > 100 || gradeNumber < 0 || gradeNumber ==""){
        throw new Error("Please, grade a number between 0 and 100."); 
    } else if(gradeNumber < 60) {
        return "E"
    } else if(gradeNumber >= 60 && gradeNumber < 70) {
        return "D"
    } else if(gradeNumber >= 70 && gradeNumber < 80) {
        return "C"
    } else if(gradeNumber >= 80 && gradeNumber < 90) {
        return "B"
    } else if(gradeNumber >= 90 && gradeNumber <= 100) {
        return "A"
    } else {
        return "Not defined"
    }
}
try{
    console.log(gradeScale("100"))
}
catch(catchAll){
    console.log(catchAll)
} */

/* //Loops and Using For, While, For...Of,

let person = {
    firstname: "John",
    lastname: "Doe",
    weight: 100,
    height: 2,
} 
for (let details in person) {
    console.log(person[details])
    console.log(details)
}

const piArray = Array.from(String(Math.PI))   
for(let piNumbers of piArray){
    console.log(piNumbers)
}

for (let i = 70; i < 1000; i+=7) {
    if (i > 700) {
        break;
    } else if (i === 0) {
        continue;
    }
    console.log(i)
}

let i = 70
while(i>10) {
    console.log(i)
    i /= 2
} */

/* // Using Throw, Try, Catch
function PrintGuestName(guestName='') {
    let BadWord = [
        'BadWord1'
    ];
    if (guestName == BadWord) {
        throw new Error ("No bad words")
    } else if (guestName == null) {
        throw new Error ("Guest's name is null")
    } else if (guestName == '') {
        console.log("Guest")
    } else {
        console.log("guestName")
    }
}
try {
    PrintGuestName("BadWord1")
}
catch(catchAll) {
    console.log(catchAll)
} */

/* // Using Switch
//// Given a person list
let persona = "U2"
//// Prints who's there
switch (persona) {
    case "I":
    case "Me":
    case "Myself":
    case "Moi":
        console.log ("I'm there")
        break
    case "U2":
        console.log ("With or Without You")
        break
    case "You":
        console.log ("S2")
        break
} */

/* //Using if and else
let temperature
const checkTemperature = function(temperature){
    let temperature_is_string = (typeof temperature === String);
    let temperature_is_underfined = temperature == undefined || temperature === "" || temperature === null;
    let hipothermia = temperature <= 35;
    let healthy = temperature > 35 && temperature < 38;
    let feverMidle = temperature >= 38 && temperature < 39;
    let feverHigh = temperature >=39 && temperature < 40;
    let feverXHigh = temperature >=40;
    if (temperature_is_underfined) {
        console.log(
            `
            The script malfuntioned with 'empty' (or 'undefined') value for temperature.")
            DEBUG temperature=" ${temperature} " ; type= " ${typeof temperature} "
            `
        )
    } else if (temperature_is_string) {
        console.log("Insert a temperature number with 2 digits. Eg: 37.")
    } else if (hipothermia) {
        console.log("You're probably with hipothermia, seek immediate medical help.")
    } else if (healthy) {
        console.log("You're probably healthy, but check with your doctor anyway.")
    } else if (feverMidle){
        console.log("You're probably with a mild fever, check with your doctor.")
    } else if (feverHigh) {
        console.log("You're probably with a high fever, check with your doctor right away.")
    } else if (feverXHigh){
        console.log("You're probably with a very high fever, seek immediate medical help.")
    } else {
        console.log(
            `The script didn't function as expected, please contact the administrator.
            DEBUG temperature=" ${temperature} " ; type= " ${typeof temperature} "
            ` 
        )
    }
}
checkTemperature(35) */