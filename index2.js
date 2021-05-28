let arr = [45, 12, 8, 2, 28];

let sum = 0;
function sumNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumNumber(arr));

let difference = arr[0];
function differenceNum(arr) {
  for (let i = 1; i < arr.length; i++) {
    difference -= arr[i];
  }
  return difference;
}
console.log(differenceNum(arr));

let multiplicate = 1;
function multiplicateNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    multiplicate *= arr[i];
  }
  return multiplicate;
}
console.log(multiplicateNum(arr));

let division = arr[0];
function divisionNum(arr) {
  for (let i = 1; i < arr.length; i++) {
    division /= arr[i];
  }
  return division;
}
console.log(divisionNum(arr));
