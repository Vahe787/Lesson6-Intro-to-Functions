const log = console.log;
let str =
  "Yes, London. You know: fish, chips, cup o tea, bad food, worse weather";
let str2 = "o";
newStr = [];

function updateStr(str, str2) {
  let str1 = str.split(str2).join("");
  newStr.push(str1);
  return newStr.join("");
}
console.log(updateStr(str, str2));
