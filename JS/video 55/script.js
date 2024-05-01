console.log("Hey this is tutorial no 55");

var a = 12; // var = global scope
var b = 23;

var c = "Tushar";

let d = 34; // let = block scope as well as global scope -- recommended to use this only

var _s = "Nikhil"; // allowed

// var 55a = 22; Not allowed

// console.log(a + b + 3);

{
  let d = 43;
  console.log(d);
}

console.log(d);

console.log(typeof a, typeof b, typeof c);

const a2 = 6;

// a2 = a + 3; Not allowed --> Uncaught TypeError: Assignment to constant variable.

let o = {
  Name: "Tushar Supe",
  "Job Code": "5342",
};

console.log(o);

o.salary = "230cr";

console.log(o);
