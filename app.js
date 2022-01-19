// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneUsIs = {
    "JPY": 114.33, // japan yen
    "SPA": 0.88, // spanish euro
    "GBP": 0.73, // british pound
}

let oneJpyIs = {
    "SPA": 0.0077, // spanish euro 
    "USD": 0.0087, // us dollar
    "GBP": 0.0064, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInUsd to dollars
    let valueInYen = valueInDollar * 114.33;
    //return the dollar value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convert the given valueInJpy to dollars
    let valueInPound = valueInYen * 0.0064;
    //return the dollar value
    return valueInPound;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};