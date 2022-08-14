let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  if (!salaries) return null;
  let maxValue = 0;
  let maxName = '';
  for (let user of Object.entries(salaries)) {
    const [name, value] = user;
    if (maxValue <= value) {
      maxValue = value;
      maxName = name;
    }
  }
  return maxName;
}

console.log("topSalaries Name : ", topSalaries(salaries));
