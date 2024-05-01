console.log("I am the tutorial of loops");

let a = 1;

for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

let obj = {
  Name: "Tushar Supe",
  Role: "Software Developer",
  Company: "JForce Solutions",
};

for (const key in obj) {
  console.log(key);
}

for (const c of "Tushar") {
  console.log(c);
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
