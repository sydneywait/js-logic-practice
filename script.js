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

    const totalCoins = quarterTotal+dimeTotal+nickelTotal+pennyTotal;
    moneyStatement = `You have a total of $${totalCoins}`


    let piggyBank2 = {}
    
    quarterNum = quarterTotal / 0.25;
    piggyBank2.quarters = quarterNum;
    
    nickelNum = nickelTotal / 0.05;
    piggyBank2.nickels=nickelNum;
    
    dimeNum = dimeTotal / 0.10;
    piggyBank2.dimes=dimeNum;
    
    pennyNum = pennyTotal / 0.01;
    piggyBank2.pennies=pennyNum;


    piggyBankStatement = [moneyStatement, piggyBank2]
    
return piggyBankStatement;
}

let coinCount=convert_to_coins(1.75, 0.50, 0.65, 0.73)

console.log(coinCount[0])
console.log(coinCount[1])