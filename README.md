# Functions

## Table Of Contents

- #### Function Declaration
  - #### Default Values
  - #### return value
- #### Function Expression
- #### Function Declaration vs Function Expression
- #### Arrow Functions
- #### Arrow functions vs Function Keyword
- #### IIFE (Immediate Invoked Function Expression)

---

## Local variables

#### A variable declared inside a function is only visible inside that function.

#### For example:

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function
```

---

## Outer variables

#### A function can access an outer variable as well, for example:

```javascript
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John
```

---

- ### Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

```javascript
let arr = [45, 12, 3, 6, 17, 8, 10];
let odd = [];
let even = [];

function numEvenOrOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [even, odd];
}
console.log(numEvenOrOdd(arr));
```

- ### Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol.

```javascript
let arr = [45, 12, 8, 2, 28];

let sum = 0;
function sumNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; //95
}
console.log(sumNumber(arr));

let difference = arr[0];
function differenceNum(arr) {
  for (let i = 1; i < arr.length; i++) {
    difference -= arr[i];
  }
  return difference;
}
console.log(differenceNum(arr)); //-5;

let multiplicate = 1;
function multiplicateNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    multiplicate *= arr[i];
  }
  return multiplicate;
}
console.log(multiplicateNum(arr)); //241920;

let division = arr[0];
function divisionNum(arr) {
  for (let i = 1; i < arr.length; i++) {
    division /= arr[i];
  }
  return division;
}
console.log(divisionNum(arr)); //0.008370535714285714
```
