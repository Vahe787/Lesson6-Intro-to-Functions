let a = "pencil";
let arr = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];

function possibleAnagrams(arr, a) {
  let b = a.split("").sort().join("");
  let c;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    c = arr[i].split("").sort().join("");
    if (b === c) {
      newArr.push(arr[i]);
    }
  }
  return [a, newArr];
}
console.log(possibleAnagrams(arr, a));
