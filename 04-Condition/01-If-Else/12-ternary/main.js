let score = prompt('Score input');
let grade =
  score >= 80
    ? 'A'
    : score >= 70
    ? 'B'
    : score >= 60
    ? 'C'
    : score >= 50
    ? 'D'
    : 'F';
alert(grade);
