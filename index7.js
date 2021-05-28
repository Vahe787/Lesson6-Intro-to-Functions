let str = "A revolution without dancing is a revolution not worth having.";
let newStr = str.split(" ");
let max = 0;
let maxStr;
function maxWord(newStr) {
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > max) {
      max = newStr[i].length;
      maxStr = newStr[i];
    }
  }
  return maxStr;
}
console.log(maxWord(newStr));
