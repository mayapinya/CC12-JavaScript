/**
 INPUT : string , length
 OUTPUT : string (modified)

 IF length of string > length
    MODIFY
 ELSE 
    RETURN original str
 */

function truncate(str, length) {
  if (str.length > length) {
    let editString = str.slice(0, length - 1) + '...';
    return editString;
  } else {
    return str;
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
console.log(truncate('Hi everyone!', 20)); // Hi everyone!
