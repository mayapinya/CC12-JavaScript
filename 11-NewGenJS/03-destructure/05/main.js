let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  let { numPlanets, ...discoveryYears } = planetFacts;
  console.log(discoveryYears); // * // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} เป็นค่าที่ได้จาก Array Destructuring