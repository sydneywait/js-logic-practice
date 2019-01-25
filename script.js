// Coins to Cash

// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.

// quarters
// nickels
// dimes
// pennies
// For each coin type, give yourself as many as you like.

const piggyBank = {
    quarters: 15,
    nickels: 12,
    dimes: 23,
    pennies: 156
}

// I like pennies
const piggyBankArray = []

function makeArray(objectName) {
    piggyBankArray.push(objectName.quarters)
    piggyBankArray.push(objectName.nickels)
    piggyBankArray.push(objectName.dimes)
    piggyBankArray.push(objectName.pennies)
    console.log(piggyBankArray);
    return piggyBankArray;
}

//Push each coin value to a number array
const QNDP = makeArray(piggyBank);
console.log(QNDP);



// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.
function convert_to_dollars(coinArray) {
    let dollarAmount = 0
    dollarAmount = dollarAmount + coinArray[0] * 0.25;
    dollarAmount = dollarAmount + coinArray[1] * 0.05;
    dollarAmount = dollarAmount + coinArray[2] * 0.10;
    dollarAmount = dollarAmount + coinArray[3] * 0.01;
    console.log(dollarAmount)
    return dollarAmount;

}
const totalCash = convert_to_dollars(QNDP);


// When done, output the value to the browser console.
console.log(`Your total cash is $${totalCash}`)

// Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

// const dollarAmount = 0.10
// const piggyBank = {}

// Your magic code here

// console.log(piggyBank)
// That should produce the following output.

function convert_to_coins(quarterTotal, dimeTotal, nickelTotal, pennyTotal) {

    const totalCoins = quarterTotal + dimeTotal + nickelTotal + pennyTotal;
    moneyStatement = `You have a total of $${totalCoins}`


    let piggyBank2 = {}

    quarterNum = quarterTotal / 0.25;
    piggyBank2.quarters = quarterNum;

    nickelNum = nickelTotal / 0.05;
    piggyBank2.nickels = nickelNum;

    dimeNum = dimeTotal / 0.10;
    piggyBank2.dimes = dimeNum;

    pennyNum = pennyTotal / 0.01;
    piggyBank2.pennies = pennyNum;


    piggyBankStatement = [moneyStatement, piggyBank2]

    return piggyBankStatement;
}

let coinCount = convert_to_coins(1.75, 0.50, 0.65, 0.73)

console.log(coinCount[0])
console.log(coinCount[1])


// touch grades.js
// code .
// Requirements
// Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {A:0, B:0, C:0, D:0, F:0} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {

    switch (true) {
        case scores[i] >= 91:
            console.log("A");
            grades.A = grades.A + 1;
            break;
        case scores[i] >= 81 && scores[i] <= 90:
            console.log("B");
            grades.B = grades.B + 1;
            break;
        case scores[i] >= 71 && scores[i] <= 80:
            console.log("C");
            grades.C = grades.C + 1;
            break;
        case scores[i] >= 61 && scores[i] <= 70:
            console.log("D");
            grades.D = grades.D + 1;
            break;
        case scores[i] >= 50 && scores[i] <= 60:
            grades.F = grades.F + 1;
            console.log("F");
            break;

        default:
            console.log("This is not working");
    }

}
    /*
  If the score is greater than 90, increment grades.A by 1.

  You can use a series of `if/then` blocks, but you could
  also achieve this with a switch statement.
*/

// Use console.info() to output the following criteria to the browser console.

// How many of each grade? Accomplish this with a for..in loop.

var text = "";
  var x;
  for (x in grades) {
    text += grades[x] + " ";
    console.info(A [text]}

// What is the lowest score? Sort the array and find out.
// What is the highest score?
// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
// Which grade had the fewest students achieve it?