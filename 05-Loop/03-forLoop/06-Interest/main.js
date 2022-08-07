let money = 100000;
for (let i = 1; i <= 10; i++) {
  const interest = money * 0.025;
  money = money + interest;
}
console.log(`money : ${money.toFixed(2)}`);
