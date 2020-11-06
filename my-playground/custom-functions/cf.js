function calculateBill(billAmount = 100, taxRate = 0.13) {
  console.log('running');
  const total = billAmount * (1 + taxRate);
  return total;
}

// use undefined to fallback to default value, i.e. calculateBill(undefined, 0.12)

// const myTotal = calculateBill();
// console.log(`Your total is ${myTotal}`);

console.log(`Your total is ${calculateBill(100, 0.13)}`);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Hannah') {
  return `Hey ${name.toUpperCase()}`;
}
