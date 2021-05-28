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
