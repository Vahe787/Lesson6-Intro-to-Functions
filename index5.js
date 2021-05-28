let str = "FwrtY45KHL120mn10P";

function sumNumbersInString(str) {
  let newStr = "0";
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(String(str[i]) * 1)) newStr += str[i];
    else {
      sum += parseInt(newStr);
      newStr = "0";
    }
  }
  return sum + parseInt(newStr);
}

console.log(sumNumbersInString(str));
