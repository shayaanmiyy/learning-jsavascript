// Understanding control structures and looping mechanisms in JavaScript. By completing tasks related to if-else statements, switch-case structures, and various loop types.

// Task 1
function score() {
    let score = prompt("Enter your score");
    console.log(score);
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
    let fizzNumber = 3
    let buzzNumber = 5
    for (i = 0; i <= 100; i++) {
        if (i % fizzNumber === 0 && i % buzzNumber === 0) {
            console.log("FizzBuzz");
        } else if (i % fizzNumber === 0) {
            console.log("Fizz");
        } else if (i % buzzNumber === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function printTringle() {
    // Steps Pattern
    for (let i = 1; i <= 10; i++) {
        let starPattern = "";
        for (let j = 1; j <= i; j++) {
            starPattern += "*";
        }
        console.log(starPattern);
    }
}

function printSquare() {
    let sqyareLastnumber = 10;
    // Square Pattern
    for (let i = 1; i <= sqyareLastnumber; i++) {
        let starPattern = "";
        if (i == 1 || i == sqyareLastnumber) {
            starPattern += "**********";
        } else {
            starPattern = "*";
        }
        console.log(starPattern);
    }
}


function printDiamonds() {
    // Diamond 
    let diamondValue = 10;
    let half = diamondValue / 2;

    for (let i = 1; i <= half; i++) {
        let starPattern = '';
        for (let j = i; j < half; j++) {
            starPattern += ' ';
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            starPattern += '*';
        }
        console.log(starPattern);
    }

    for (let i = half - 1; i >= 1; i--) {
        let starPattern = '';
        for (let j = half; j > i; j--) {
            starPattern += ' ';
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            starPattern += '*';
        }
        console.log(starPattern);
    }

}