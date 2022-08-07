function isArray(input) {
  return Array.isArray(input);
}

isArray({});
isArray(1);
isArray('');
isArray([]);
isArray([1, 2, 3, 4]);
