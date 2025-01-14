/*! Here is the right code I hope you liked the quiz !*/

// JavaScript Debugging Quiz - Corrected Version

// Question 1: What is the result of this function?
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Expected result: 15

// Question 2: What is the error here and how can it be fixed?
function subtract(a, b = 0) {
    return a - b;
}
console.log(subtract(10)); // Expected result: 10 - 0 = 10

// Question 3: What is the result of this loop?
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Expected result: 0, 1, 2, 3, 4
// Actual result: 0, 1, 2, 3, 4

// Question 4: What is the error in this function and how can it be fixed?
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Expected result: 5 * 1 = 5

// Question 5: What is the error here and how can it be fixed?
var message = "Hello, World!";
console.log(message); // Expected result: "Hello, World!"
