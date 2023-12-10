const x = [];
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// optional
// check falsy
const y = null;
if (!y) {
  console.log("value is falsy");
}

// check truthy
const z = " ";
if (!!z) {
  console.log("value is truthy");
}
