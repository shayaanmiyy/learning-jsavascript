// Understanding control structures and looping mechanisms in JavaScript. By completing tasks related to if-else statements, switch-case structures, and various loop types.

// Task 1
function score() {
    let score = prompt("Enter your score");
    let userMesage = ""

    if (score > 100) {
        userMesage = "Score Cannot be greater than 100"
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
        userMesage = `You have entered ${score} which is Invalid!`
    }

    alert(userMesage);
}

// Task 2
function buzzfizz() {
    let fizzNumber = 3;
    let buzzNumber = 5;
    let answer = ''
    for (i = 0; i <= 100; i++) {
        if (i % fizzNumber === 0 && i % buzzNumber === 0) {
            answer += "FizzBuzz \n"
        } else if (i % fizzNumber === 0) {
            answer += "Fizz \n"
        } else if (i % buzzNumber === 0) {
            answer += "Buzz \n"
        } else {
            answer += i + " \n"
        }
    }
    printAnswer(answer)
}

function printTringle() {
    let answer = ''
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
    let sqyareLastnumber = 10;
    let answer = '';
    for (let i = 1; i <= sqyareLastnumber; i++) {
        let starPattern = "";
        if (i == 1 || i == sqyareLastnumber) {
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
    let diamondValue = 10;
    let half = diamondValue / 2;
    let answer = '';

    for (let i = 1; i <= half; i++) {
        let starPattern = '';
        for (let j = i; j < half; j++) {
            starPattern += ' ';
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            starPattern += '*';
        }
        answer += `${starPattern} \n`;
    }

    for (let i = half - 1; i >= 1; i--) {
        let starPattern = '';
        for (let j = half; j > i; j--) {
            starPattern += ' ';
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            starPattern += '*';
        }
        answer += `${starPattern} \n`;
    }
    return printAnswer(answer);
}

function printAnswer(data) {
    let resultDiv = document.getElementById('resultDiv')
    resultDiv.value = data
}

// Functions Ticket Start Here

// Extract Unique Character from Strings
function getUnique(string) {
    let splittedstring = string.split('');
    let tempArr = []
    splittedstring.forEach(words => {
        if (!tempArr.includes(words)) {
            tempArr.push(words)
        }
    });
    printAnswer(tempArr.join(''));
}

function countWordPresence(string, word) {
    let splittedstring = string.split('');
    let counter = 0;
    splittedstring.forEach(alphabet => {
        if (alphabet == word) {
            counter++
        }
    });
    printAnswer(`The word ${string} contains ${counter} ${word}`);

}

function askUser(type) {
    if (type == "fw") {
        let string = prompt("Enter Your Sentence").toLowerCase();
        let fincWord = prompt("Enter Word to count").toLowerCase();
        countWordPresence(string, fincWord);
    }
    if (type == "us") {
        let string = prompt("Enter Your Sentence (Leave Empty For Quick Brown Fox)").toLowerCase();
        if (string == '') {
            string = "thequickbrownfoxjumpsoverthelazydog"
        }
        getUnique(string);
    }
}

function listLongestCountryByName() {
    let countries = [];
    for (let i = 0; i < 3; i++) {
        let c = prompt("Enter any Country Name for Your Choice");
        countries.push(c)
    }
    let value = 0;
    let rankCountry;
    countries.forEach(country => {
        let countrylength = country.split('').length;
        if (countrylength > value) {
            value = countrylength;
            rankCountry = country
        }
    });
    let printValue = `The ${rankCountry} has highest word Count of ${value} Letters`
    printAnswer(printValue)
}

function palindrome() {
    let palindromeString = prompt("Enter String you want to check. (Ex. racecar, madam");
    let palindromeCheck = palindromeString.split('').reverse().join('');
    let answer;
    palindromeString == palindromeCheck ? answer = true : answer = false;
    printAnswer(`The string ${palindromeString} is ${answer ? 'a Palindrome String' : 'not a palindrome string'}`);
}

function findRepeatLetter() {
    let string = prompt("Please Enter String (Empty would be abcdabced") || "abcdabced";
    let splittedstring = string.split('');
    let tempArr = [];
    let uniqueString = 0;
    splittedstring.forEach(words => {
        if (tempArr[words]) {
            tempArr[words]++
        } else {
            tempArr[words] = 1
        }
    });
    splittedstring.forEach(words => {
        if (tempArr[words] == 1) {
            uniqueString = words;
        }
    });
    printAnswer(`In ${string} we found "${uniqueString}" as unique word`)
}

function sortArray() {
    let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
    let sortedArray = array.sort((a, b) => {
        return b - a;
    });
    printAnswer(sortedArray)
}

function highestValue(way) {
    let numberArray = prompt("Enter Number by comma separated");
    numberArray = numberArray.split(',');
    let answer = 0;
    if (way == "math") {
        answer = Math.max(...numberArray)
    } else {
        numberArray.forEach(num => {
            if (num > answer) {
                answer = num
            }
        })
    }
    printAnswer(answer)
}

function fibocacci() {
    let fibCount = prompt("Enter Number of Time for Fibonacci");
    let fibSequence = [0, 1]; // Take two number by default
    for (let i = 2; i < fibCount; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    printAnswer(fibSequence);
}