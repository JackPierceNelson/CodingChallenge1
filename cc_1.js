// Task 1: Variables and Data Types

let employeeName = "Jack"; // Declare a variable employeeName using let and assign it the employee's name "Jack "as a string.
const employeeID = 12; // Declare a variable employeeID using const and assign it the employee's ID  12 as a number.
var isActive = true; // Declare a variable isActive using var and assign it a boolean value true to indicate the employee is currently active.

console.log(employeeName, typeof(employeeName)); // Log variable employeeName value and its type to the console
console.log(employeeID, typeof(employeeID)); // Log variable value employeeID and its type to the console
console.log(isActive, typeof(isActive)); // Log variable value isActive and its type to the console

// Task 2: Compound Data Types

let products = ["shirt", "shoes", "shorts"]; // Declare an array products using let and initialize it with product names: shirt, shoes, and shorts

// Declare an object productDetails using const with properties name: Jordans, price: 150, and inStock: Yes.

const productDetails = { 
    name: "Jordans",
    price: 150,
    inStock: true,
}   

console.log(products, productDetails); // logging the array and object to the console.

// Task 3: Assignment Operators

let accountBalance = 3000; // Initial Account Balance consists of 3000

console.log("Initial Account Balance:", accountBalance); // Output: Initial Account Balance: 3000

// Updating the values of the Account Balance.

accountBalance += 5; // accountBalance = acountBalance + 5
console.log("Updated Account Balance:", accountBalance); // Output: Updated Account Balance = 3005

accountBalance -= 4; // accountBalance = accountBalance -5 
console.log("Updated Account Balance:", accountBalance); // Output: Updated Account Balance = 3001

accountBalance *= 1.5; // accountBalance = acountBalance * 1.5
console.log("Updated Account Balance:", accountBalance); // Output: Updated Account Balance = 4501.5

accountBalance /= 10; // accountBalance = acountBalance / 10
console.log("Updated Account Balance:", accountBalance); // Output: Updated Account Balance = 450.15

accountBalance %= 10; // accountBalance = acountBalance modulus 10 
console.log("Updated Account Balance:", accountBalance); // Output: Updated Account Balance = 0.14999999999997726

// Task 4: Comparison Operators

let employeeScore1 = 100;
let employeeScore2 = 90;

console.log("Is employeeScore1 greater than employeeScore2?",employeeScore1 > employeeScore2); // Is employeeScore1 greater than employeeScore2? Output = true

console.log("Is employeeScore1 less than employeeScore2?", employeeScore1 < employeeScore2); // Is employeeScore1 less than employeeScore2? Output = false

console.log("Is employeeScore1 greater than or = to employeeScore2?",employeeScore1 >= employeeScore2); // Is employeeScore1 greater than or = to employeeScore2? Output = true

console.log("Is employeeScore1 less than or = to employeeScore2?", employeeScore1 <= employeeScore2); // Is employeeScore1 less than or = to employeeScore2? Output = false

console.log("Is employeeScore1 strictly equal to employeeScore2?", employeeScore1 === employeeScore2); // Is employeeScore1 strictly equal to employeeScore2? Output = false

console.log("Is employeeScore1 strictly not equal to employeeScore2?", employeeScore1 !== employeeScore2); // Is employeeScore1 strictly not equal to employeeScore2? Output = true

// Task 5:  Logical Operators

let hasKeycard = true; 
let hasPermission = false;

console.log("Has Key card and has permission?", hasKeycard && hasPermission); // Output: false -- both conditions of variables are true

console.log("Has Key card or has permission?", hasKeycard || hasPermission); // Output: true -- both conditions of variables are true

console.log(!hasKeycard); // Output: false -- nullifies the boolean value   