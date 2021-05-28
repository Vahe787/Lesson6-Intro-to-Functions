let a = "+1234535612";
let newArr = [];
let n = a.trim().split("");
console.log(n);
let c;

function cleanNum(n) {
  for (let i = 0; i < n.length; i++) {
    if (n.length === 11 && n[0] === "+") {
      n.splice(0, 1);
      c = n.join("");
      newArr.push(c);
      return newArr;
    } else if ((n.length < 10 || n.length > 10) && n[i] !== " ") {
      return "Bad Number";
    } else if (n.lengt !== 10) {
      return "Good Number";
    }
  }
}
console.log(cleanNum(n));
