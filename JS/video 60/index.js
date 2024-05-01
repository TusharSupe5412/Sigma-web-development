console.log("This is string tutorial");

let a = "Tushar";
console.log(a[0]);
console.log(a[5]);
// console.log(a[6]); undefined

console.log(a.length);

let real_name = "Tushar";
let friend = "PK";

// console.log("My name is " + real_name + " and my friend name is " + friend);

// instead of above code we can right below syntax in JS - Template Literals

// if is use varialble in template literals it is called - String Interpolation

console.log(`My name is ${real_name} and my friend name is ${friend}`);

let b = "Samadhan";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.charAt([0]));
console.log(b.slice(1, 4));
console.log(b.slice(3));
console.log(b.replace("S", "R"));
console.log(b.concat(a, "Aishwarya"));
