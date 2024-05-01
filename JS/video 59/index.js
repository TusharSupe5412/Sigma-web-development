let random = Math.random();

let a = prompt("Enter First Number -");
let c = prompt("Enter Operation");
let b = prompt("Enter Second Number -");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // Perform correct operation
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
  console.log("correct", random);
} else {
  // Perform wrong operation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
  console.log("wrong", random);
}
