const names = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jack", lastName: "Dann" },
  { firstName: "Joe", lastName: "Dunne" },
];

for (let item of Object.entries(names)) {
  const [, { firstName, lastName }] = item;
  console.log(`${firstName} ${lastName}`);
}
