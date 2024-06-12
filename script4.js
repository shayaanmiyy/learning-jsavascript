// Write a program to calculate the area of a rectangle. Prompt the user to enter the length and width of the rectangle as inputs. Then, use the multiplication operator to calculate the area by multiplying the length and width togethe

function areaOfRectangle() {
    let l = prompt("Enter Length");
    let b = prompt("Enter Width");
    let area = l * b;
    logger(["The Area of the Rectangle is ", area]);
}

// Develop a program that calculates the total cost of purchasing multiple items at a store. Each item has a price and quantity. Prompt the user to enter the price and quantity of each item. Use the multiplication operator to calculate the total cost of each item (price * quantity) and then sum up all the costs to find the total amount.

let counter = 0;

function handleSubmit(form) {
    let formData = new FormData(form);
    let formJson = {};
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
    printItemCosts(transformToArray(formJson))

}

function transformToArray(jsonObj) {
    let resultArray = [];
    let itemCount = Object.keys(jsonObj).length / 3;

    for (let i = 1; i <= itemCount; i++) {
        let item = {};
        item[`itemName${i}`] = jsonObj[`itemName${i}`];
        item[`itemPrice${i}`] = jsonObj[`itemPrice${i}`];
        item[`itemQuantity${i}`] = jsonObj[`itemQuantity${i}`];
        resultArray.push(item);
    }

    return resultArray;
}

function printItemCosts(items) {
    let answer = []
    for (let i = 0; i < items.length; i++) {
        let itemName = items[i][`itemName${i + 1}`];
        let itemPrice = parseFloat(items[i][`itemPrice${i + 1}`]);
        let itemQuantity = parseInt(items[i][`itemQuantity${i + 1}`]);
        let totalCost = itemPrice * itemQuantity;
        answer.push(`${itemName} Cost You Rs. ${totalCost.toLocaleString('en-IN')}`)
    }
    logger(["Item Cost - \n", answer.toString()]);
}

function addForm() {
    counter++;
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
                </div>`
    document.getElementById('inputForm').insertAdjacentHTML('beforeend', formHtml);
}

// Create a program to calculate the monthly salary of an employee. Prompt the user to enter the hourly wage and the number of hours worked in a month. Use the multiplication operator to calculate the monthly salary by multiplying the hourly wage and the number of hours worked.

function employeeSalary() {
    let salary = prompt("What is your Hourly Salary?");
    let workinghour = prompt("How long did your worked in a month? (in hours)");
    let asnwer;
    if (Number(workinghour) && Number(salary)) {
        asnwer = `Your Montly Salary for the time you wokred will be ${salary * workinghour}Rs`
    } else {
        asnwer = "You have entered wrong prompt. Please Refresh to continue"
    }
    logger(["Employee Salary ", asnwer])
}


// Write a program that calculates the distance travelled by a car given its speed and time travelled. Prompt the user to enter the speed of the car (in km/h) and the time travelled (in hours). Use the multiplication operator to calculate the distance travelled by multiplying the speed and time together.

function distaceTravelled() {
    let speed = prompt("Enter the everage speed you have driven (in KM/h)");
    let time = prompt("What is the Time spent (in hours)");
    let answer;
    if (time) {
        answer = `You have travelled  ${speed * time} KM`
    } else {
        alert = "You have entered wrong prompt. Please Refresh to continue"
    }

    logger(["Distance Travelled ", answer])
}

// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

function isThisInRange() {
    let range = [];
    let answer = false;
    for (let i = 50; i < 100; i++) {
        range.push(i)
    }
    let givenInteger = [66, 41, 88];
    givenInteger.forEach(num => {
        if (range.includes(num)) {
            answer = true;
        }
    });
    logger([`The given Integer ${givenInteger.toString()} are in between 50 - 99`])
}

// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.   For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

function replaceDolarr($) {
    var x = 10;
    var y = 30;
    var z = 300; // 40, -20, 
    let ops = ["+", "-", "/", "*"];
    let answer = "n/a";
    ops.forEach(o => {
        if (o == '*' && x * y == z) {
            answer = o;
        }
        if (o == '+' && x + y == z) {
            answer = o;
        }
        if (o == '-' && x - y == z) {
            answer = o;
        }
        if (o == '/' && x / y == z) {
            answer = o;
        }

    });
    logger(["replaceDolar ",`We Found ${answer} to be answer where value of z is ${z}`]);
}
// We cannot evalute based on variable
function replaceDolar() {
    replaceDolarr('*')
};

// Write a JavaScript program to create the NOR value of two given booleans. In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

function nor() {
    let x = false;
    let y = false;
    // for this method we will use || operator
    logger([(!(x || y))]); // Here I have spefied || opertor and ! to make it NOR
}

let functionList = [
   "areaOfRectangle", "addForm", "employeeSalary", "distaceTravelled", "isThisInRange", "replaceDolar", "nor"
]

let functionHtml = '';
functionList.forEach((item) => {
    functionHtml += `<button class="btn btn-primary" onclick="${item}()">${item}</button> &emsp;`
})


const mainBody = document.getElementsByTagName('main');
mainBody[0].innerHTML = `
<style>button { margin: 10px auto; }</style>
    <h1>JavaScript Sprint: Javascript: Operators and Expressions</h1>
    <div class="wrapper mx-auto ms-5">${functionHtml}</div>
`;


function logger(parm) {
    let resultDiv = document.getElementById('resultDiv')
    resultDiv.value = [...parm]
    console.log(...parm); // destucuring it to log all the values
}
