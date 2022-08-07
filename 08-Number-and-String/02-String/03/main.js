function ucFirst(str) {
  if (!str) {
    return 'This function not allow for empty string';
  }

  let newString = str.trim();
  let firstChar = newString.slice(0, 1);
  let leftString = newString.slice(1);

  return firstChar.toUpperCase() + leftString;
}

console.log(ucFirst("hello It's me"));
console.log(ucFirst(''));
console.log(ucFirst("    hello It's me     "));
