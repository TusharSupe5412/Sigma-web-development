let name = "Tushar";

function nice(name) {
  console.log("Hey " + name + " you are nice !");
  console.log("Hey " + name + " you are good !");
  console.log("Hey " + name + " you are best !");
  console.log("Hey " + name + " you are very good !");
}

nice(name);

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

result = sum(1, 2);

console.log("The sun of a and b is = ", result);

const func1 = (x) => {
  console.log("I am an arrow function", x);
};

func1(521);
