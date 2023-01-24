//Task 1 - Declare Variables
let a = 3;
let b = 5;
let c;

//Task 1 - Concatenation
let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '----------\n';
output += ('a + b = ' + (a + b) + '\n');
output += ('a - b = ' + (a - b) + '\n');
output += ('a * b = ' + (a * b) + '\n');
output += ('a / b = ' + (a / b) + '\n');
output += ('a % b = ' + (a % b) + '\n');
output += ('(a += b): ' + (a += b) + '\n');
output += ('(a -= b): ' + (a -= b) + '\n');
output += ('(a *= b): ' + (a *= b) + '\n');
output += ('(a /= b): ' + (a /= b) + '\n');
output += ('(a %= b): ' + (a %= b) + '\n');
output += ('(a == b): ' + (a == b) + '\n');
output += ('(a != b): ' + (a != b) + '\n');
output += ('(a > b): ' + (a > b) + '\n');
output += ('(a < b): ' + (a < b) + '\n');
output += ('(!a && !c): ' + (!a && !c) + '\n');
output += ('(!a || !c): ' + (!a || !c) + '\n');

//Task 1 - Trigger alert function
alert(output)

// Task 2 - Declare variables
let first_name = 'Matthew';
let last_name = 'Shaw';
let email = 'shaw0247@algonquinlive.com';
let sentence = output;

//Task 2 - Concatenation
sentence = 'My name is';
sentence += ' ';
sentence += first_name;
sentence += ' ';
sentence += last_name;
sentence += '.';
sentence += ' ';
sentence += 'You can contact me at';
sentence += ' ';
sentence += email;
sentence += '.';

// Task 2 - alert output
alert(sentence);
