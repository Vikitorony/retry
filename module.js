const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const exp = (a, b) => {
  let number = a;
  for (let i = 1; i < b; i++) {
    number *= a;
  }
  return number;
};

module.exports = { add, multiply, exp };
