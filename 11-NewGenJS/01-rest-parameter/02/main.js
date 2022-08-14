const filterOutOdds = (...numbers) => {
  return numbers.reduce(function (acc, item) {
    if (item % 2 == 0) {
      acc.push(item);
    }
    return acc;
  }, []);
};
console.log(filterOutOdds(9, 2, 4, 1, 3, 5, 7, 11, 15));
