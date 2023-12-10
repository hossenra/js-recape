function second(a, b) {
  const total = a + b;
  return total;
}

const result = second(2, 5);
// console.log(result);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return 0;
  }
  return a + b;
}

const total = noNegative(2, -3);
// console.log(total);

const eight = undefined;

const nignth = null;
