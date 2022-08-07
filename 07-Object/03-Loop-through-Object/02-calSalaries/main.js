let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let calSalaries = (obj) => {
  let sum = 0;
  for (const key in obj) {
    let currentSalary = obj[key];
    sum += currentSalary;
  }

  return sum;
};
console.log(calSalaries(salaries));
console.log(calSalaries({}));
