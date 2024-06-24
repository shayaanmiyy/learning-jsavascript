const resultDiv = document.getElementById("resultDiv");
function printAnswer(data) {
  resultDiv.value = data;
}

// Understanding control structures and looping mechanisms in JavaScript. By completing tasks related to if-else statements, switch-case structures, and various loop types.

// Task 1
function score() {
  const score = prompt("Enter your score"); // Ask user to enter prompt
  let userMesage = "";
  // Check for each score grades
  if (score > 100) {
    userMesage = "Score Cannot be greater than 100";
  } else if (score >= 90) {
    userMesage = "You Got A Grade";
  } else if (score >= 80) {
    userMesage = "You Got B Grade";
  } else if (score >= 70) {
    userMesage = "You Got C Grade";
  } else if (score >= 60) {
    userMesage = "You Got D Grade";
  } else if (score < 60) {
    userMesage = "Below 60";
  } else {
    userMesage = `You have entered ${score} which is Invalid!`;
  }

  alert(userMesage);
}

// Task 2
function buzzfizz() {
  const fizzNumber = 3; //Default fizz number
  const buzzNumber = 5; // Default buzz number
  let answer = "";
  for (i = 0; i <= 100; i++) {
    if (i % fizzNumber === 0 && i % buzzNumber === 0) {
      answer += "FizzBuzz \n";
    } else if (i % fizzNumber === 0) {
      answer += "Fizz \n";
    } else if (i % buzzNumber === 0) {
      answer += "Buzz \n";
    } else {
      answer += i + " \n";
    }
  }
  printAnswer(answer);
}

function printTringle() {
  let answer = ""; // Answer will be printed here
  for (let i = 1; i <= 10; i++) {
    let starPattern = "";
    for (let j = 1; j <= i; j++) {
      starPattern += "*";
    }
    answer += `${starPattern} \n`;
  }
  return printAnswer(answer);
}

function printSquare() {
  const squareLastNumber = 10; // height of the square
  let answer = "";
  for (let i = 1; i <= squareLastNumber; i++) {
    let starPattern = "";
    if (i == 1 || i == squareLastNumber) {
      starPattern += "**********";
    } else {
      starPattern = "*";
    }

    answer += `${starPattern} \n`;
  }
  return printAnswer(answer);
}

function printDiamonds() {
  // Diamond
  const diamondValue = 10;
  const half = diamondValue / 2;
  let answer = "";
  //  First Create A Diamond
  for (let i = 1; i <= half; i++) {
    let starPattern = "";
    for (let j = i; j < half; j++) {
      starPattern += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      starPattern += "*";
    }
    answer += `${starPattern} \n`;
  }
  // Create Diamond Again and Reverse it
  for (let i = half - 1; i >= 1; i--) {
    let starPattern = "";
    for (let j = half; j > i; j--) {
      starPattern += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      starPattern += "*";
    }
    answer += `${starPattern} \n`;
  }
  return printAnswer(answer);
}

// Functions Ticket Start Here

// Extract Unique Character from Strings
function getUnique(string) {
  const splittedstring = string.split(""); // Split
  const tempArr = []; // Temporary Data Zone
  splittedstring.forEach((words) => {
    if (!tempArr.includes(words)) {
      tempArr.push(words); // Push Unique Ones
    }
  });
  printAnswer(tempArr.join(""));
}

function countWordPresence(string, word) {
  const splittedstring = string.split("");
  const counter = 0;
  splittedstring.forEach((alphabet) => {
    if (alphabet == word) {
      counter++;
    }
  });
  printAnswer(`The word ${string} contains ${counter} ${word}`);
}

function askUser(type) {
  if (type == "fw") { // Find Words In Sentence
    let string = prompt("Enter Your Sentence").toLowerCase();
    const fincWord = prompt("Enter Word to count").toLowerCase();
    countWordPresence(string, fincWord);
  }
  if (type == "us") { // unique Strings
    let string = prompt(
      "Enter Your Sentence (Leave Empty For Quick Brown Fox)"
    ).toLowerCase();
    if (string == "") {
      string = "thequickbrownfoxjumpsoverthelazydog";
    }
    getUnique(string);
  }
}

function listLongestCountryByName() {
  const countries = [];
  for (let i = 0; i < 3; i++) {
    let c = prompt("Enter any Country Name for Your Choice");
    countries.push(c); // Crate Array with User Entered Data
  }
  let value = 0; // DEafult Value
  let rankCountry;
  countries.forEach((country) => {
    // Iterate through Each
    let countrylength = country.split("").length;
    if (countrylength > value) {
      value = countrylength; // Save String Length
      rankCountry = country; // Save Country Name
    }
  });
  let printValue = `The ${rankCountry} has highest word Count of ${value} Letters`;
  printAnswer(printValue);
}

function palindrome() {
  const palindromeString = prompt(
    "Enter String you want to check. (Ex. racecar, madam"
  );
  const palindromeCheck = palindromeString.split("").reverse().join(""); // Main Formula Split Reverse Join
  let answer;
  palindromeString == palindromeCheck ? (answer = true) : (answer = false); // Match Both The String
  printAnswer(
    `The string ${palindromeString} is ${
      answer ? "a Palindrome String" : "not a palindrome string"
    }`
  );
}

function findRepeatLetter() {
  const string =
    prompt("Please Enter String (Empty would be abcdabced") || "abcdabced";
  const splittedstring = string.split(""); // splitting and converting into array
  const tempArr = []; // Temporal Zone
  let uniqueString = 0; // deafult Count
  splittedstring.forEach((words) => {
    // Iterating through Each Item
    if (tempArr[words]) {
      // Creating New Data with key : count
      tempArr[words]++; // key : count
    } else {
      tempArr[words] = 1; // key : 1
    }
  });
  splittedstring.forEach((words) => {
    if (tempArr[words] == 1) {
      // Check Item Having 1 in them
      uniqueString = words; // That is our unique Words
    }
  });
  printAnswer(`In ${string} we found "${uniqueString}" as unique word`);
}

function sortArray() {
  const givenArray = [
    12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
  ];
  let sortedArray = givenArray.sort((a, b) => {
    return b - a; //sorting givenArray by javascript in defined functions
  });
  printAnswer(sortedArray);
}

function bubbleSort() {
  const givenArray = [
    12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
  ];

  for (let i = 0; i < givenArray.length - 1; i++) {
    // Going through each element
    for (let j = 0; j < givenArray.length - 1 - i; j++) {
      // Going Again with
      if (givenArray[j] < givenArray[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = givenArray[j];
        givenArray[j] = givenArray[j + 1];
        givenArray[j + 1] = temp;
      }
    }
  }

  printAnswer(givenArray);
}

function highestValue(way) {
  let numberArray = prompt("Enter Number by comma separated"); // propt fromm user
  numberArray = numberArray.split(","); // separating values by comma entered by user
  let answer = 0; // default Value
  if (way == "math") {
    answer = Math.max(...numberArray); //By using math functions
  } else {
    numberArray.forEach((num) => {
      if (num > answer) {
        answer = num; // By using foreach loop
      }
    });
  }
  printAnswer(answer);
}

function fibonacci() {
  const fibCount = prompt("Enter Number of Time for Fibonacci");
  let fibSequence = [0, 1]; // Take two number by default
  for (let i = 2; i < fibCount; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  printAnswer(fibSequence);
}
