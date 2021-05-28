let arr = [10, 25, 16, -5, 30, 15, 24];
let number = 16;
let newArr = [];
let isSmoll = false;
function isNumberSmollArrNumbers(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      isSmoll = true;
      newArr.push(arr[i]);
    }
  }
  if (isSmoll === false) {
    return "Such values do not exist.";
  }
  return newArr;
}
console.log(isNumberSmollArrNumbers(arr, number));
