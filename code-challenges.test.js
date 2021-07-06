// ASSESSMENT 3: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input = 6
// Expected output = [1, 1, 2, 3, 5, 8]

// Example input = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// create a test describing a function named fibonacciArray
describe("fibonacciArray", () => {
    //write test statement to describe what the function does
    test("it takes in a number and returns an array of that length containing the numbers of the fibonacci", () => {
        //expect statements to indicate expected inputs and outputs of the function
        expect(fibonacciArray(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciArray(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })

})

// b) Create the function that makes the test pass.


const fibonacciArray= (num) => {
    //Here I attempted to use a recursive solution but did not know how to proceed past the first if statement
    if (num <= 2) 
    // if (num <= 2) return 1;
    return fibonacciArray(num - 1) + fibonacciArray(num - 2);
  }
//was not able to get test to pass



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// //write out describe function giving the name of said function
describe("oddNumbersSorted", () => {
    //write out test statement describing what the function is doing
    test("it takes in an array and returns a new array of only odd nnumbers sorted from least to greatest", () => {
        //write out expect statements to show expected inputs and outputs
        expect(oddNumbersSorted(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNumbersSorted(fullArr2)).toEqual([-823, 7, 23])
    })
})
//test failed as expected without the function defined

// b) Create the function that makes the test pass.
//declare function named oddNumberSorted
const oddNumbersSorted = (array) => {
    //use .filter higher order function to that takes in an array
    return array.filter((value) => {
        //return odd values only
        return value % 2 !== 0 
    })
}
console.log(oddNumbersSorted(fullArr1));

//was able to filter out even numbers, but was not able to figure out how to filter out words




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.



var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []


//write name of function in describe statement
fdescribe("accumulatingSum", () => {
    //write out test statement to describe what the test is doing
    test("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        //write out expect statements to display expected inputs and outputs 
        var numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        var numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        var numbersToAdd3 = []
        // Expected output: []
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})

//test fails as expected without the function being defined

// b) Create the function that makes the test pass.
//define accumulatingSum with the a parameter of array
//set a variable named newArray to take in the accunulating sum
const accumulatingSum = (array) => {
    let newArray = []
        //attempted to use .map and function arrows to get new array but was not able to figure out how to proceed further
        return newArray.map(sum => value => sum += value(0))
}
console.log(accumulatingSum(numbersToAdd1))