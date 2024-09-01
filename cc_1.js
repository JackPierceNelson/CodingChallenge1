// Task 1: Variables and Data Types

let employeeName = "Jack";
const employeeID = 12;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

// Task 2: Compound Data Types

let products = ["shirt", "shoes", "shorts"];
const productDetails = {
    name: Jordans,
    price: 150,
    inStock: Yes,
}

console.log(products, productDetails);

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

console.log(employeeScore1 > employeeScore2); // Is employeeScore1 greater than employeeScore2? Output = true

console.log(employeeScore1 < employeeScore2); // Is employeeScore1 less than employeeScore2? Output = false

console.log(employeeScore1 >= employeeScore2); // Is employeeScore1 greater than or = to employeeScore2? Output = true

console.log(employeeScore1 <= employeeScore2); // Is employeeScore1 less than or = to employeeScore2? Output = false

console.log(employeeScore1 === employeeScore2); // Is employeeScore1 strictly equal to employeeScore2? Output = false

console.log(employeeScore1 !== employeeScore2); // Is employeeScore1 strictly not equal to employeeScore2? Output = true

// Task 5:  Logical Operators

let hasKeycard = true; 
let hasPermission = true;

console.log(hasKeycard && hasPermission); // Output: true -- both conditions of variables are true

console.log(hasKeycard || hasPermission); // Output: true -- both conditions of variables are true

console.log(!hasKeycard); // Output: false -- nullifies the boolean value