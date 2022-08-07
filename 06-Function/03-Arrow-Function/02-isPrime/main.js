const primeCheck = (num) => {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

console.log(primeCheck(7));
console.log(primeCheck(22));
