console.log("Hello");

var data; // variable declaration
data = []; // Initailze variable with empty object

// Variable Of Different data Types
let string = "THIS IS A STRING"; // String
let number = 123456789; // number
let boolean = true; // Boolean !true
let nullVar = null; // null
let notDefined; // undefined
let object = []; // Object


var name = "JavaScriprt";
var age = 25;
var isLearning = true;

// String Concatenation
let string1 = "digital";
let string2 = "polygon";

let concatString = string1 + string2;
console.log(concatString)

// Arithmatics Aperations

let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
console.log(addition, subtraction, multiplication, division);

// Conversion
let convertString = "123";
let convertedString = parseFloat(convertString);
console.log(typeof convertedString);

let convertNumber = 453;
let convertedNumber = convertNumber.toString();
console.log(typeof convertedNumber);

// Template Literals
let introduc = `Hello, my name is ${name} and I am ${age} years old.`
console.log(introduc);

// Updating Variables
let counter = 0;
counter++;
counter += 1;
counter += 1;
console.log(counter);

// Boolean Value
let isMember = true;
let welcomestatus // = isMember ? "Welcome member!" : "Please Signup"

if (isMember) {
    welcomestatus = "Welcome member!"
} else {
    welcomestatus = "Please Signup";
}
console.log(welcomestatus);
// Manipulating Objects
let person =
{
    firstName: "Shayaan",
    lastName: "Momin",
    age: 22
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

// Arrays & Indexing
let dataTypes = ["String", 123, true];
console.log(dataTypes[1]); // 123 is the second