// Write a program to calculate the area of a rectangle. Prompt the user to enter the length and width of the rectangle as inputs. Then, use the multiplication operator to calculate the area by multiplying the length and width together

function areaOfRectangle() {
  const l = prompt("Enter Length"); // Ask User to enter Length
  const b = prompt("Enter Width"); // Ask User to enter Width
  if (Number(l) && Number(b)) {
    // Check if entered value is Number or String
    logger(["The Area of the Rectangle is ", l * b]); // Print The Value to frontend
  } else {
    alert("Please Enter Number"); // Alert User
  }
}

// Develop a program that calculates the total cost of purchasing multiple items at a store. Each item has a price and quantity. Prompt the user to enter the price and quantity of each item. Use the multiplication operator to calculate the total cost of each item (price * quantity) and then sum up all the costs to find the total amount.

let counter = 0; // keep record of form ids

function handleSubmit(form) {
  // Function called on html onsubmit
  const formData = new FormData(form); // Create FormData
  let formJson = {}; // Simple JSON
  formData.forEach((value, key) => {
    if (formJson[key]) {
      if (!Array.isArray(formJson[key])) {
        formJson[key] = [formJson[key]];
      }
      formJson[key].push(value);
    } else {
      formJson[key] = value;
    }
  });
  printItemCosts(transformToArray(formJson));
}

function transformToArray(jsonObj) {
  const resultArray = []; // Creating Objects of Each Items
  const itemCount = Object.keys(jsonObj).length / 3; // if 9 values means user has entered 3 Fruits
  // Creating a New JSON with more simple result
  for (let i = 1; i <= itemCount; i++) {
    const item = {};
    item[`itemName${i}`] = jsonObj[`itemName${i}`];
    item[`itemPrice${i}`] = jsonObj[`itemPrice${i}`];
    item[`itemQuantity${i}`] = jsonObj[`itemQuantity${i}`];
    resultArray.push(item);
  }

  return resultArray;
}

function printItemCosts(items) {
  const answer = []; // Creating Result arrays
  for (let i = 0; i < items.length; i++) {
    const itemName = items[i][`itemName${i + 1}`]; // Name Check
    const itemPrice = parseFloat(items[i][`itemPrice${i + 1}`]); // Item Price
    const itemQuantity = parseInt(items[i][`itemQuantity${i + 1}`]); // Item Cost
    const totalCost = itemPrice * itemQuantity; // Evaluting Them
    answer.push(
      `${itemName} Cost You Rs. ${totalCost.toLocaleString("en-IN")}`
    ); // Pushing the Results
  }
  logger(["Item Cost - \n", answer.toString()]); // Showing it in String
}

function addForm() {
  // Function called on HTML Button Click
  counter++; // Increment the counter to update the IDs
  formHtml = `<div class="col-3 border rounded p-3 mt-2 mb-2">
                    <h4 class="h4 text-center">ITEM ${counter}</h4>
                    <hr>
                    <div class="mb-3">
                        <label for="itemName${counter}" class="form-label">Item Name</label>
                        <input type="text" required name="itemName${counter}" class="form-control" id="itemName${counter}">
                    </div>
                    <div class="mb-3">
                        <label for="itemPrice" class="form-label">Item Price</label>
                        <input type="number" required name="itemPrice${counter}" class="form-control" id="itemPrice${counter}">
                    </div>
                    <div class="mb-3">
                        <label for="itemQuantity${counter}" class="form-label">Item Quantity</label>
                        <input type="number" required name="itemQuantity${counter}" class="form-control" id="itemQuantity${counter}">
                    </div>
                </div>`;
  document
    .getElementById("inputForm")
    .insertAdjacentHTML("beforeend", formHtml); //innerHtml+= will append the entire HTML and will remove old inserted values
}

// Create a program to calculate the monthly salary of an employee. Prompt the user to enter the hourly wage and the number of hours worked in a month. Use the multiplication operator to calculate the monthly salary by multiplying the hourly wage and the number of hours worked.

function employeeSalary() {
  const salary = prompt("What is your Hourly Salary?"); // Prompt User
  const workinghour = prompt("How long did your worked in a month? (in hours)"); // Prompt User
  let answer;
  if (Number(workinghour) && Number(salary)) {
    // Check for Numbers
    answer = `Your Montly Salary for the time you wokred will be ${
      salary * workinghour
    }Rs`;
  } else {
    answer = "You have entered wrong prompt. Please Refresh to continue";
  }
  logger(["Employee Salary ", answer]);
}

// Write a program that calculates the distance travelled by a car given its speed and time travelled. Prompt the user to enter the speed of the car (in km/h) and the time travelled (in hours). Use the multiplication operator to calculate the distance travelled by multiplying the speed and time together.

function distaceTravelled() {
  const speed = prompt("Enter the everage speed you have driven (in KM/h)"); // Prompt User Input
  const time = prompt("What is the Time spent (in hours)"); // Prompt User Input
  let answer;
  if (Number(time) && Number(speed)) {
    // Check for Numbers
    answer = `You have travelled ${speed * time} KM`;
  } else if (time == "" || speed == "") {
    alert("Please Enter Value!");
  } else {
    alert = "You have entered wrong prompt. Please Refresh to continue";
  }
  logger(["Distance Travelled ", answer]);
}

// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

function findNumberInRange() {
  const range = []; // Create Array
  let answer = false;
  for (let i = 50; i < 100; i++) {
    range.push(i); // creating Numbers Arrays from 50 - 100
  }
  const givenInteger = []; // Given Values
  for (let i = 0; i < 3; i++) {
    let enteredValue = parseInt(prompt("Any Value between 1 - 1000"));
    if (Number(enteredValue)) {
      givenInteger.push(enteredValue);
    } else {
      alert("You have entere wrong Input, Please Try Again");
      break
    }
  }
  givenInteger.forEach((num) => {
    // Loop through each of them
    if (range.includes(num)) {
      // Check if Exists in range array
      answer = true;
    }
  });
  if (answer) {
    logger([
      `The given Integer ${givenInteger.toString()} are in between 50 - 99`,
    ]);
  } else {
    logger([`The given Integer ${givenInteger.toString()} are not in Range`]);
  }
}

// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.   For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

function operatorCheck() {
  const x = 10;
  const y = 30;
  const z = 300; // 40, -20,
  const ops = ["+", "-", "/", "*"];
  let answer = "n/a";
  ops.forEach((o) => {
    if (o == "*" && x * y == z) {
      // checking if * works?
      answer = o;
    }
    if (o == "+" && x + y == z) {
      // checking if + works?
      answer = o;
    }
    if (o == "-" && x - y == z) {
      // checking if - works?
      answer = o;
    }
    if (o == "/" && x / y == z) {
      // // checking if / works?
      answer = o;
    }
  });
  logger([
    "replaceDolar ",
    `We Found ${answer} to be answer where value of z is ${z}`,
  ]);
}

// Write a JavaScript program to create the NOR value of two given booleans. In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

function nor() {
  const x = false;
  const y = false;
  // for this method we will use || operator
  logger([!(x || y)]); // Here I have spefied || opertor and ! to make it NOR
}

let functionList = [
  "areaOfRectangle",
  "addForm",
  "employeeSalary",
  "distaceTravelled",
  "findNumberInRange",
  "operatorCheck",
  "nor",
];

let functionHtml = "";
functionList.forEach((item) => {
  functionHtml += `<button class="btn btn-primary" onclick="${item}()">${item}</button> &emsp;`;
});

const mainBody = document.getElementsByTagName("main");
mainBody[0].innerHTML = `
<style>button { margin: 10px auto; }</style>
    <h1>JavaScript Sprint: Javascript: Operators and Expressions</h1>
    <div class="wrapper mx-auto ms-5">${functionHtml}</div>
`;

function logger(parm) {
  let resultDiv = document.getElementById("resultDiv");
  resultDiv.value = [...parm];
  console.log(...parm); // destucuring it to log all the values
}
