const users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 },
];

for (let item of Object.entries(users)) {
  const [, { user, age }] = item;
  console.log(`${user} ${age ? age : "unknown"}`);
}
