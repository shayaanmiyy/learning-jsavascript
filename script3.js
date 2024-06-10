
function printAnswers(data) {

}

// Using Custom Function intead of console.log
function logger(parm) {
    let resultDiv = document.getElementById('resultDiv')
    resultDiv.value = [...parm]
}



// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sumOf3Array() {
    let array = [1, 2, 4];
    let answer;
    if (array.length == 3) {
        answer = array[0] + array[1] + array[2]
    }
    logger(["input Array", array, "sumOf3Array", answer]);
}

// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
function rotateArrayLeft() {
    let array = [1, 2, 4];
    let answer;
    if (array.length == 3) {
        answer = [array[1], array[2], array[0]]
    }
    logger(["Input Array", array, "rotateArrayLeft", answer]);
}

// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function lastOrFirst() {
    let array = [1, 2, 4];
    let answer = false;
    if (array[0] === 1 || array[array.length] === 1) {
        answer = true
    }
    logger(["input Array", array, "lastOrFirst", answer]);
}

// Write a JavaScript program to reverse the elements of a given array of integers of length 3.
function reverseArray() {
    let array = [1, 2, 4];
    let answer;
    answer = array.reverse();
    logger(["input Array", array, "reverseArray", answer]);
}

// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
function createByFirstAndLast() {
    let array = [1, 2, 4];
    let answer;
    if (array.length >= 1) {
        answer = [array[0], array[array.length - 1]];
    }
    logger(["input Array", array, "createByFirstAndLast", answer])
}

// Write a JavaScript program to find the longest string from a given array of strings.
function findLongestString() {
    let array = ['abcdefghijk', 'abcde', 'abcdefghij'];
    let answer = {
        stringlength: 0,
        stringname: ""
    };
    array.forEach(item => {
        if (answer.stringlength < item.length) {
            answer.stringlength = item.length;
            answer.stringname = item;
        }
    })
    logger(["input Array", array, "findLongestString", JSON.stringify(answer)])
}

// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
function divideAndSum() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum1 += arr[i];
        } else {
            sum2 += arr[i];
        }
    }
    logger([["input Array", array, "divideAndSum", sum1, sum2]]);
}

// Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements
function areSimilarF(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let diference = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            diference.push(i);
        }
    }

    if (diference.length === 0) {
        return true;
    } else if (diference.length === 2) {
        [i, j] = diference;
        return arr1[i] === arr2[j] && arr1[j] === arr2[i];
    } else {
        return false;
    }
}

function areSimilar() {
    let array1 = [1, 2, 3];
    let array2 = [1, 3, 2];
    logger(["input Array", array1, array1, areSimilarF(array1, array2)]);


    let array7 = [1, 2, 3, 4];
    let array8 = [1, 2, 3, 5];
    logger(["input Array", array7, array8, areSimilarF(array7, array8)]);

}


// Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replaceNumbrt() {
    let array = [1, 2, 3, 4, 5, 6, 8, 9];
    array.forEach((item, index) => {
        array[index] = 1
    });
    logger(["input Array", array, "replaceNumbrt", array])
}


// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.
function findElement() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let correctCount = 0;
    let answer = false;
    arr2.forEach((item, index) => {
        if (arr1.includes(item)) {
            correctCount++
        }
    });

    if (correctCount == arr1.length) {
        answer = !answer;
    }
    logger(["input Array", arr1, arr2, "findElement", answer])
}

// Write a JavaScript program to find the number of inversions of a given array of integers. Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function countInversions() {
    let arr = [1, 20, 6, 4, 5];
    let invCount = 0;
    let arlen = arr.length
    for (let i = 0; i < arlen; i++) { // go on each elem of arr
        for (let j = i + 1; j < arlen; j++) { // again loop
            if (arr[i] > arr[j]) { // compae first elem with same arr 2nd elem
                invCount++;
            }
        }
    }
    logger(["input Array", arr, "countInversions", invCount]);
}

/*
Write a JavaScript program to create an array of prefix sums of the given array.

In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:y0 = x0y1 = x0 + x1y2 = x0 + x1+ x2

*/
function addArrSum() {
    let arr = [1, 2, 3, 4, 5];
    let sumArr = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        sumArr.push(currentSum);
    }

    logger(["input Array", arr, "addArrSum", sumArr]);
}


// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
function getSortedPrimes() {
    let n = 50;
    let primes = [];

    let isPrime = (num) => {
        if (num <= 1) {
            return false;
        } else if (num === 2) {
            return true;
        } else if (num % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    logger(["input Number", n, "primes", primes])

}

// Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.
function reduceArray(arr, initialValue) {
    let result = [];
    let accumulator = initialValue;
    let callback = (acc, curr) => acc + curr

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
        result.push(accumulator);
    }

    return result;
}

function reduceArrr() {
    let array = [1, 2, 3, 4];

    let sumResult = reduceArray(array, 0);
    let productResult = reduceArray(array, 1);
    let subtractResult = reduceArray(array, 10);

    logger(["Input Array", array, "Reduced Value by 0 => ", sumResult, "Reduced Value by 1 => ", productResult, "Reduced Value by 1o => ", subtractResult]);
}


let functionList = [
    "sumOf3Array", "rotateArrayLeft", "lastOrFirst", "reverseArray", "createByFirstAndLast", "findLongestString", "divideAndSum", "areSimilar", "replaceNumbrt", "findElement", "countInversions", "addArrSum", "getSortedPrimes", "reduceArrr"
]

let functionHtml = '';
functionList.forEach((item) => {
    functionHtml += `<button onclick="${item}()">${item}</button> &emsp;`
})


const mainBody = document.getElementsByTagName('main');
mainBody[0].innerHTML = `
<style>button { margin: 10px auto; }</style>
    <h1>JavaScript Sprint: JS Arrays</h1>
    <div class="wrapper">${functionHtml}</div>
`