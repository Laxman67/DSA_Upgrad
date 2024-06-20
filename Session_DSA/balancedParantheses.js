const Stack = require('./ArrayBased_Stack');
let string1 = '(a+b)*()';
let string2 = '()';
let string3 = '()()()()';

function balancedParanthesis(str) {
  let stack = new Stack();
  let valid = false;
  for (let ch of str) {
    if (ch == '(') {
      console.log('This => (');
      stack.push(ch);
    } else if (ch == ')') {
      console.log('This => )');
      if (stack.isEmpty()) {
        console.log('Empty - True');
        valid = false;
      } else {
        stack.pop();
        valid = true;
      }
    }
  }
  return valid;
}

console.log(balancedParanthesis(string1));
